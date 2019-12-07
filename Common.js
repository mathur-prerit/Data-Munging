const fs = require('fs');
const csv = require ("fast-csv");

let data = []
let resultArray =[]
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
        let diff=Math.abs(x-y)
        resultArray.push({'key':key,'x':x,'y':y,'diff':diff})
    }

    static minimumDifference(){
            let minFlag
            let min=999999
            for (let i of resultArray){
                if (i.diff<min){
                    min=i.diff
                    minFlag=i
                }
            }
            return minFlag

       
    }
}
//const hello = new readingData();
//  readingData.readFile('./weather.dat').then(()=>{
//      console.log(data);
//  });
//console.log(hello.readFile('./football.dat'));

module.exports = { readingData }