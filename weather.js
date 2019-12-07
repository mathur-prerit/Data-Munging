const { readingData } = require("./Common");

class parsingData extends readingData {
  static parseFile(row) {
    let splited = [];
    let filteredData = [];
    for (let i = 2; i < row.length; i++) {
      splited = row[i][0].trim().replace("*","").split(" ");
      filteredData = splited.filter(data => data !== "");

      parsingData.diffData(Number(filteredData[0]),Number(filteredData[1]),Number(filteredData[2]))
    }

  }
}

readingData
  .readFile("./weather.dat")
  .then(results => {
    parsingData.parseFile(results);
  })
  .catch(error => {
    console.log(error);
  });
