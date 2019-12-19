const { ReadingData } = require("./Common");
const teamNameColumn = 1;
const goalForColumn = 6;
const goalAgainstColumn = 8;
const startIndex = 1

class ParsingData extends ReadingData {}
const parsingData = new ParsingData();
parsingData
  .readFile("./football.dat")
  .then(results => {
    const mydata = parsingData.parseFile(
      startIndex,
      results,
      teamNameColumn,
      goalForColumn,
      goalAgainstColumn
    );
    parsingData.diffData(mydata);
    let answer = parsingData.minimumDifference();
    // console.log(answer)
    console.log(
      `The minimum goal difference was: ${answer.diff} with team: ${answer.key}`
    );
  })
  .catch(error => {
    console.log(error);
  });
