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
      <td>
        <button type="button" onClick="blend()">Calculate</button>
      </td>
      <td colspan="5"></td>
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
blending various amounts of various liquids.&nbsp;
For instance:
  - Making a mead must
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
- After you've entered all your liquids, press the "Calculate" button

FUTURE PLANS:
- use this, plus an input for yeast tolerance, to create a new batch planner page
- output in largest volume unit actually used, or make it selectable
- add _mass/weight_ units (kilos, grams, pounds, oz av, etc.) and calculate the volume
- add way to designate a _desired total_ volume, and a row as what to adjust to "make it so"
- add parsing of query params, so we can save a recipe as a URL
- eliminate all non-metric units, screw the places using stupid units  :-)
- add warning that if the honey (if any) is below 50% of the sugars it's not mead  :-)
