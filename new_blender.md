---
layout: default
section: Calculators
title: 🥣 Blend a Batch (New Version)!
js: new_blender
style: new_blender
---
<script src="/assets/js/common.js" type="text/javascript"></script>

<table id="blendees">
  <thead><tr><th>Quantity</th><th>SG</th><th>%ABV</th></tr></thead>
  <tbody></tbody>
</table>
<script type="text/javascript">
  add_blender_row();
  add_blender_row();
</script>

<button type="button" onClick="blend()">Calculate</button>
<button type="button" onClick="add_blender_row()">Add a Row</button>

<div id="results"></div>

PLANS:
- add "imperial" versions of US volume units
- output in largest volume unit actually used
- add _mass/weight_ units (kilos, grams, pounds, oz av, etc.) and calculate the volume
- add a list of _liquids_ (water, honey, wine, vodka, etc.), which will populate the sg and maybe abv field with an approximation
- add which liquid contributed what % of sugars, assuming all mass above SG 1 is sugars, maybe with a warning that if the honey (if any) is below 50% it's not mead
- add way to designate a row as _desired total_ volume, and another as what to adjust to "make it so"
