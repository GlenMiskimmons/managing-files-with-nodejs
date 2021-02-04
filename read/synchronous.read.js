const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

module.exports.read = () => {
  try {
    const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf-8");

    console.table(convertCsv(data));
  } catch (error) {
    console.log(`There was a problem with the file ${err}`);
  }
};
