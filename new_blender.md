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
    <tr><th>Quantity</th><th>Liquid</th><th>SG</th><th>%ABV</th></tr>
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
- output in largest volume unit actually used
- add _mass/weight_ units (kilos, grams, pounds, oz av, etc.) and calculate the volume
- add which liquid contributed what % of sugars, assuming all mass above SG 1 is sugars, maybe with a warning that if the honey (if any) is below 50% it's not mead
- add way to designate a _desired total_ volume, and a row as what to adjust to "make it so"
