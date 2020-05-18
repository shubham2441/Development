let fs = require("fs");


fs.readFile("../../f1.txt", function (err, data) {
  console.log(data.byteLength);
  console.log("File1 Read");
})


fs.readFile("../../f2.txt", function (err, data) {
  console.log(data.byteLength);
  console.log("File2 Read");

})

fs.readFile("../../f3.txt", function (err, data) {
  console.log(data.byteLength);
  console.log("File3 Read");

})

console.log("After");