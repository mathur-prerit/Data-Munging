const fs = require("fs");
const csv = require("fast-csv");

let data = [];
let resultArray = [];
class ReadingData {
  readFile(path) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(path)
        .pipe(csv.parse({ headers: false }))
        .on("data", row => {
          data.push(row);
        })
        .on("end", () => {
          if (data) {
            resolve(data);
          }
          reject("error");
        });
    });
  }
  parseFile(startIndex, row,a,b,c) {
    let splited = [];
    let filteredData = [];
    let trimmedData=[];
    for (let i = startIndex; i < row.length; i++) {
      splited = row[i][0].trim().replace("*", " ").split(" ");
      filteredData = splited.filter(data => data !== "");
      trimmedData.push([filteredData[a],Number(filteredData[b]),Number(filteredData[c])]);
    }
    return trimmedData
  }

  diffData(newData) {
      for(let i of newData)
      {
        //   console.log(i)
      let key=i[0];
      let x= i[1];
      let y= i[2];
    let diff = Math.abs(x - y);
    resultArray.push({ key: key, x: x, y: y, diff: diff });
      }
  }

  minimumDifference() {
    let minFlag;
    let min = 999999;
    for (let i of resultArray) {
      if (i.diff < min) {
        min = i.diff;
        minFlag = i;
      }
    }
    return minFlag;
  }
}
module.exports = { ReadingData };
