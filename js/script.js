vegaEmbed(
  "#line_chart",
  "specs/student_growth.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#country_lollipop",
  "specs/country_lollipop.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#sector_area",
  "specs/sector_area.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#state_heatmap",
  "specs/state_heatmap.json",
  { actions: false }
).catch(console.error);
