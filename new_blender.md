---
layout: default
section: Calculators
title: 🥣 Blend a Batch!
js: new_blender
style: new_blender
---
<script src="/assets/js/common.js" type="text/javascript"></script>

<table id="blendees">
  <thead>
    <tr><th>Volume</th><th>SG</th><th>%ABV</th></tr>
  </thead>
  <tbody>
  </tbody>
</table>
<script type="text/javascript">
  add_blender_row()
  add_blender_row()
</script>

<button type="button" onClick="add_blender_row()">Add a Row</button>
<button type="button" onClick="blend()">Calculate</button>

<div id="results"></div>
