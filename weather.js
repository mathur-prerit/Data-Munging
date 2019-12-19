const { ReadingData } = require("./Common");

class ParsingData extends ReadingData {}

const dayOfMonthColumn = 0;
const maxTempColumn = 1;
const minTempColumn = 2;
const startIndex = 2

const parsingData = new ParsingData();
parsingData
  .readFile("./weather.dat")
  .then(results => {
    const mydata = parsingData.parseFile(startIndex, results, dayOfMonthColumn, maxTempColumn, minTempColumn);
    parsingData.diffData(mydata);
    let answer = parsingData.minimumDifference();
    console.log(
      `The minimum temperature difference was: ${answer.diff} degree on day: ${answer.key}`
    );
  })
  .catch(error => {
    console.log(error);
  });
