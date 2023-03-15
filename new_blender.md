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
    <tr><th>Item</th><th>Quantity</th><th>Liquid</th><th>SG</th><th>%ABV</th><th>%Sugar</th></tr>
  </thead>
  <tbody></tbody>
</table>
<script type="text/javascript">
  add_blender_row();
  add_blender_row();
</script>

<button type="button" onClick="blend()">Calculate</button>
<button type="button" onClick="add_blender_row()">Add a Row</button>

<div id="results"></div>

FUTURE PLANS:
- output in largest volume unit actually used, or make it selectable
- add _mass/weight_ units (kilos, grams, pounds, oz av, etc.) and calculate the volume
- add way to designate a _desired total_ volume, and a row as what to adjust to "make it so"
- add parsing of query params, so we can save a recipe as a URL
- add warning that if the honey (if any) is below 50% of the sugars it's not mead  :-)
