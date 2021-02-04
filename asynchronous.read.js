const { convertCsv } = require('./csv.parse');
const { readFile } = require('fs');

readFile("./data/pulitzer-circulation-data.csv", 'utf-8', (err, data) => {
  const vals = convertCsv(data);

  console.table(vals)
});
