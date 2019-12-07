const fs = require('fs');
const csv = require ("fast-csv");

let data = []
let resultObject = {key:'',x:0,y:0,diff:0};
class readingData {
       static readFile(path){
           return new Promise((resolve,reject) => {
            fs.createReadStream(path)
  .pipe(csv.parse({ headers: false })) 
  .on('data', row => {
            data.push(row)
        }).on('end', () => {
            if (data){
            resolve(data)
            }
            reject('error');
        })
    })
    };

    static diffData(key,x,y){
        resultObject.key=key
        resultObject.x=x
        resultObject.y=y
        //console.log(resultObject);
    }

}
//const hello = new readingData();
//  readingData.readFile('./weather.dat').then(()=>{
//      console.log(data);
//  });
//console.log(hello.readFile('./football.dat'));

module.exports = { readingData }