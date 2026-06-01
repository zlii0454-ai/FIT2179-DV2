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

vegaEmbed(
  "#state_bubble",
  "specs/state_student_metrics.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#state_choropleth",
  "specs/state_choropleth.json",
).catch(console.error);

vegaEmbed(
  "#state_bump_chart",
  "specs/state_bump_chart.json",
  { actions: false }
).catch(console.error);

vegaEmbed(
  "#sector_donut",
  "specs/sector_donut.json",
  { actions: false }
).catch(console.error);
