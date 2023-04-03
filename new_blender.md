---
layout: default
section: Calculators
title: 🥣 Blend a Batch (New Version)!
js: new_blender
style: new_blender
---
<script src="/assets/js/common.js" type="text/javascript"></script>

<table id="blendees">
  <thead>
    <tr>
      <th>Row</th>
      <th>Quantity</th>
      <th>Liquid</th>
      <th>SG</th>
      <th>%ABV</th>
      <th>% of Sugars</th>
    </tr>
  </thead>
  <tbody></tbody>
  <tbody>
    <tr>
      <td>
        <button type="button" onClick="add_blender_row()">Add Row</button>
      </td>
      <td colspan="5"></td>
    </tr>
    <tr>
      <td style="text-align: center"><button type="button" onClick="blend()">Blend</button></td>
      <td colspan="5"></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <button type="button" onClick="ferment()">Ferment</button>
      </td>
      <td colspan="2">
        with yeast of
        <input type="number" id="tolerance" style="width: 3em">
        % tolerance
      </td>
      <td colspan="3"></td>
    </tr>
  </tbody>
</table>
<script type="text/javascript">
  add_blender_row();
  add_blender_row();
</script>

<div id="results"></div>

INSTRUCTIONS:

- You can use this
to figure the effects of
blending various amounts of various liquids,
and optionally then also fermenting the resulting mixture.&nbsp;
For instance:
  - Making a mead must, and fermenting it
  - Blending two batches of mead together
  - Diluting, fortifying, or sweetening mead
- Enter how much you want to use, of your first liquid:
  - Enter a number in the left box under Quantity
  - Use the other box to select a unit of measure (which defaults to liters)
- Use the Liquid dropdown in Row 1 to select a liquid:
  - If your desired liquid is not listed (such as "mead"), use "other"
  - If the SG or %ABV are not quite right (or blank), you can edit them
  - Any SG or %ABV left blank is taken as zero
- Repeat the steps above for Row 2
- If you need more rows, press the "Add Row" button
- After you've entered all your liquids, you can:
  - click "Blend" to see what it would be like to blend them together, or
  - Enter a yeast tolerance and click "Ferment" to see that _and_
  what would be the results of fermenting that mixture,
  with a yeast of that tolerance

FUTURE PLANS:
- output in largest volume unit actually used, or make it selectable
- add _mass/weight_ units (kilos, grams, pounds, oz av, etc.)
  and calculate the volume
- add way to designate a _desired total_ volume,
  and a row as what to adjust to "make it so"
- make it run _backwards_,
  i.e.,
  enter a desired
  total volume, FG, and ABV,
  and get an amount of honey, an amount of water, and a yeast tolerance
- add parsing of query params, so we can save a recipe as a URL
- eliminate all non-metric units, screw the places using stupid units  :-)
- add warning that if the honey (if any) is below 50% of the sugars
  it's not mead  :-)
