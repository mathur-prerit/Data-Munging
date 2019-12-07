const { readingData } = require("./Common");

class parsingData extends readingData {
  static parseFile(row) {
    let splited = [];
    let filteredData = [];

    for (let i = 1; i < row.length; i++) {
      splited = row[i][0].trim().replace("-","").split(" ");
    filteredData = splited.filter(data => data !== "");

   parsingData.diffData(filteredData[1],Number(filteredData[6]),Number(filteredData[7]))
    }
    const answer = parsingData.minimumDifference();

    console.log(`The minimum goal difference was: ${answer.diff} with team: ${answer.key}`);
  }
}

readingData
  .readFile("./football.dat")
  .then(results => {
    parsingData.parseFile(results);
  })
  .catch(error => {
    console.log(error);
  })