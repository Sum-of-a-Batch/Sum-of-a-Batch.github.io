function gather_names(map) {
  let arr = [];
  for(name in map) arr.push(name);
  return arr;
}

let LIQUIDS = {
  "other"                   : { sg:    "", abv: "" },
  "water"                   : { sg: 1.000, abv:  0 },
  "honey"                   : { sg: 1.425, abv:  0 },
  "apple juice"             : { sg: 1.048, abv:  0 },
  "apple juice concentrate" : { sg: 1.189, abv:  0 },
  "cherry juice"            : { sg: 1.137, abv:  0 },
  "grape juice"             : { sg: 1.048, abv:  0 },
  "grape juice concentrate" : { sg: 1.34 , abv:  0 },
  "mango nectar"            : { sg: 1.048, abv:  0 },
  "maple syrup"             : { sg: 1.331, abv:  0 },
  "peach nectar"            : { sg: 1.048, abv:  0 },
  "vodka"                   : { sg: 0.940, abv: 40 },
};

let liquid_names = gather_names(LIQUIDS);

let UNITS = {
  /*
   * TODO: add MASS units,
   * and notations whether each measure is mass or volume,
   * and have blender convert as needed
   */
  "liters"     :  { to_metric: 1.0000000 },
  "deciliters" :  { to_metric: 0.100000  },
  "centiliters":  { to_metric: 0.010000  },
  "ml / cc"    :  { to_metric: 0.0010000 },
  "US gallons" :  { to_metric: 3.78541   },
  "US quarts"  :  { to_metric: 0.946353  },
  "US cups"    :  { to_metric: 0.236588  },
  "US ounces"  :  { to_metric: 0.0295735 },
  "UK gallons" :  { to_metric: 4.54609   },
  "UK quarts"  :  { to_metric: 1.13652   },
  "UK cups"    :  { to_metric: 0.284131  },
  "UK ounces"  :  { to_metric: 0.0284131 },
};

let unit_names = gather_names(UNITS);

function err_part(bad_num, row_num) {
  return '; got ' + bad_num + ' on row ' + (row_num + 1);
}

function parse_blendee(row_num, errs) {
  let qty = get_number('qty-' + row_num, errs, true, 0);
  let sg  = get_number('sg-'  + row_num, errs, true, 1);
  let abv = get_number('abv-' + row_num, errs, true, 0);
  if(qty < 0) {
    errs.push('Quantities must be greater than zero' + err_part(qty, row_num));
  }
  if(sg  < 0) {
    errs.push('SGs must be at least zero' + err_part(qty, row_num));
  }
  if(abv < 0) {
    errs.push('ABVs must be at least zero' + err_part(qty, row_num));
  }
  return { "qty": qty, "unit": get_value('unit-' + row_num), "sg": sg, "abv": abv }
}


function blend() {
  var errs = [];
  var items = [];
  var total_alc = 0;
  var total_vol = 0;
  var total_wt = 0;
  var total_sugar = 0;

  let tbody = document.getElementById('blendees').tBodies[0];
  let num_blendees = tbody.childElementCount;
  let results = document.getElementById('results');

  for(let row_num = 0; row_num < num_blendees; row_num++) {
    let item = parse_blendee(row_num, errs);
    items.push(item);
    let liters = item.qty * UNITS[item.unit].to_metric;
    total_vol += liters;
    total_wt  += liters * item.sg;
    total_alc += liters * item.abv;
    item.sugar = liters * (item.sg - 1);
    total_sugar += item.sugar;
  }

  if(errs.length) return alert('Errors:\n' + errs.join('\n'));

  for(let row_num = 0; row_num < num_blendees; row_num++) {
    item = items[row_num];
    document.
      getElementById('sug-' + row_num).
      innerHTML = (item.sugar * 100 / total_sugar).toFixed(1) + '%';
  }

  net_sg = total_wt / total_vol;
  net_abv = total_alc / total_vol;

  results.innerHTML = [
    'The combined batch will have:',
    '<ul>',
      '<li>a volume of ' + total_vol.toFixed(3) + ' liters,</li>',
      '<li>an SG of ' + net_sg.toFixed(3) +
        ' (' + sweetness(net_sg) + '), and</li>',
      '<li>an ABV of ' + net_abv.toFixed(1) + '%.</li>',
    '</ul>'
  ].join('\n');
}

function add_blender_row() {
  let tbody = document.getElementById('blendees').tBodies[0];
  let num_rows = tbody.childElementCount;
  tbody.insertRow(num_rows).innerHTML = make_blender_row(num_rows);
};

function selects_for(names) {
  return names.map(function(name) { return '<option>' + name + '</option>'; });
}

function make_blender_row(row_num) {
  return(
    [
      '<tr>',
        '<td style="text-align: center">', row_num, '</td>',
        '<td>',
          '<input type="number" id="qty-' + row_num + '">',
          '<select id="unit-' + row_num + '">',
            selects_for(unit_names),
          '</select>',
        '</td>',
        '<td>',
          '<select id="liquid-' + row_num + '" onChange="set_sg_and_abv(this)">',
            selects_for(liquid_names),
          '</select>',
        '</td>',
        '<td><input type="number" id="sg-'     + row_num + '"></td>',
        '<td><input type="number" id="abv-'    + row_num + '"></td>',
        '<td id="sug-' + row_num + '"></td>',
      '</tr>'
    ].join('\n')
  );
}

function set_sg_and_abv(select) {
  let stats = LIQUIDS[select.value];
  if(stats != {}) {
    let row_num = select.id.replace("liquid-","");
    document.getElementById("sg-" + row_num).value = stats["sg"];
    document.getElementById("abv-" + row_num).value = stats["abv"];
  }
}
