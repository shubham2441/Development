let fs = require("fs");

(async function(){
let data1 = await fs.promises.readFile("../../f1.txt");
  console.log(data1.byteLength);
  console.log("File1 Read");
})();

(async function(){
let data2 = await fs.promises.readFile("../../f2.txt");
  console.log(data2.byteLength);
  console.log("File2 Read");
})();

(async function(){
let data3 = await fs.promises.readFile("../../f3.txt");
  console.log(data3.byteLength);
  console.log("File3 Read");
})();