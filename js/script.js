const embedOptions = {
  actions: false,
  renderer: "svg"
};

vegaEmbed(
  "#line_chart",
  "specs/student_growth.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#country_lollipop",
  "specs/country_lollipop.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#sector_area",
  "specs/sector_area.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#state_heatmap",
  "specs/state_heatmap.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#state_bubble",
  "specs/state_student_metrics.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#state_choropleth",
  "specs/state_choropleth.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#state_bump_chart",
  "specs/state_bump_chart.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#sector_donut",
  "specs/sector_donut.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#student_rate_ranking",
  "specs/student_rate_ranking.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#state_small_multiples",
  "specs/state_small_multiples.json",
  embedOptions
).catch(console.error);
