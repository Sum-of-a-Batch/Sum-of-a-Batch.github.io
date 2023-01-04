function blend() {
  var errs = [];
  var total_alc = 0;
  var total_vol = 0;
  var total_wt = 0;

  let tbody = document.getElementById('blendees').tBodies[0];
  let num_blendees = tbody.childElementCount;

  for (let i = 0; i < num_blendees; i++) {
    let vol = get_number('volume-' + i, errs, true);
    /* TODO: mod get_number to supply a default, 1 for SG! */
    let sg  = get_number('sg-'     + i, errs, true);
    let abv = get_number('abv-'    + i, errs, true);
    if(vol <= 0) { errs.push('Volumes must be greater than zero'); }
    if(sg  <  0) { errs.push('SGs must be at least zero'); }
    if(abv <  0) { errs.push('ABVs must be at least zero'); }
    total_vol += vol;
    total_wt  += vol * sg;
    total_alc += vol * abv;
  }

  if(errs.length > 0) {
    let unique_errs =
      errs.filter(function(val,idx,self) { return self.indexOf(val) === idx })
    alert(unique_errs.join('\n'));
    return;
  }

  net_sg = total_wt / total_vol;
  net_abv = total_alc / total_vol;

  document.getElementById('results').innerHTML = [
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

function make_blender_row(row_num) {
  return(
    [
      '<tr>',
        '<td><input type="number" id="volume-' + row_num + '"></td>',
        '<td><input type="number" id="sg-'     + row_num + '"></td>',
        '<td><input type="number" id="abv-'    + row_num + '"></td>',
      '</tr>'
    ].join('\n')
  );
}
