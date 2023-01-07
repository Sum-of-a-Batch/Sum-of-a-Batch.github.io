function blend() {
  var errs = [];
  var total_alc = 0;
  var total_vol = 0;
  var total_wt = 0;

  let tbody = document.getElementById('blendees').tBodies[0];
  let num_blendees = tbody.childElementCount;
  let results = document.getElementById('results');

  for (let i = 0; i < num_blendees; i++) {
    let vol = get_number('volume-' + i, errs, true, 0);
    let sg  = get_number('sg-'     + i, errs, true, 1);
    let abv = get_number('abv-'    + i, errs, true, 0);
    if(vol < 0) { errs.push('Volumes must be greater than zero'); }
    if(sg  < 0) { errs.push('SGs must be at least zero'); }
    if(abv < 0) { errs.push('ABVs must be at least zero'); }
    total_vol += vol;
    total_wt  += vol * sg;
    total_alc += vol * abv;
  }

  if(errs.length > 0) {
    results.innerHTML = "";
    let unique_errs =
      errs.filter(function(val,idx,self) { return self.indexOf(val) === idx })
    alert(unique_errs.join('\n'));
    return;
  }

  net_sg = total_wt / total_vol;
  net_abv = total_alc / total_vol;

  results.innerHTML = [
    'The combined batch will have:',
    '<ul>',
      '<li>a volume of ' + total_vol + ' units,</li>',
      '<li>an SG of ' + net_sg.toFixed(3) +
        ' (' + sweetness(net_sg) + '), and</li>',
      '<li>an ABV of ' + net_abv.toFixed(1) + '%.</li>',
    '</ul>'
  ].join('\n');
};

function add_blender_row() {
  let tbody = document.getElementById('blendees').tBodies[0];
  let num_rows = tbody.childElementCount;
  tbody.insertRow(num_rows).innerHTML = make_blender_row(num_rows);
}

let UNITS = [
  { name: "cups",     liters:  0.236588  },
  { name: "gallons",  liters: 15.141632  },
  { name: "liters",   liters:  1.0       },
  { name: "ml / cc",  liters:  0.001     },
  { name: "ounces",   liters:  0.0295735 },
];

function make_blender_row(row_num) {
  return(
    [
      '<tr>',
        '<td>',
          '<input type="number" id="volume-' + row_num + '">',
          '<select id="units-' + row_num + '">',
            UNITS.map(function(unit) {
              let name = unit.name;
              return '<option value="' + name + '">' + name + '</option>';
            }),
          '</select>',
        '</td>',
        '<td><input type="number" id="sg-'     + row_num + '"></td>',
        '<td><input type="number" id="abv-'    + row_num + '"></td>',
      '</tr>'
    ].join('\n')
  );
}
