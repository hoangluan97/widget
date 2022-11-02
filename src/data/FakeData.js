export const GenerateData = (tag) => {
  const Example = [
    { title: "Markdown Guide" },
    { title: "Charts in Colaboratory" },
    { title: "Data Table" },
    { title: "Accessing Files" },
    { title: "Altair Chart Snippets" },
    { title: "BigQuery Snippets" },
    { title: "Google Drive Snippets" },
    { title: "Forms Snippets" },
    { title: "Google Sheets Snippets" },
    { title: "Pandas Snippets" },
  ];

  const Recent = [
    { title: "Markdown Guide", recent: "1324", first: "1205" },
    { title: "Charts in Colaboratory", recent: "1523", first: "1207" },
    { title: "Data Table", recent: "2024", first: "2107" },
    { title: "Accessing Files", recent: "1620", first: "1205" },
    { title: "BigQuery Snippets", recent: "1934", first: "0805" },
  ];

  const Google = [
    {
      title: "Markdown Guide",
      owner: "Luan Nguyen",
      recent: "1324",
      first: "1205",
    },
    {
      title: "Charts in Colaboratory",
      owner: "Luan Nguyen",
      recent: "1523",
      first: "1207",
    },
    {
      title: "Data Table",
      owner: "Luan Nguyen",
      recent: "2024",
      first: "2107",
    },
    {
      title: "Accessing Files",
      owner: "Luan Nguyen",
      recent: "1620",
      first: "1205",
    },
    {
      title: "BigQuery Snippets",
      owner: "Luan Nguyen",
      recent: "1934",
      first: "0805",
    },
  ];
  if (tag === "example") {
    return Example;
  } else if (tag === "recent") {
    return Recent;
  } else {
    return Google;
  }
};
