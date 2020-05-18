let fs = require("fs");
console.log("Before");

let File1 = fs.promises.readFile("../../f1.txt");
let File2 = fs.promises.readFile("../../f2.txt");
let File3 = fs.promises.readFile("../../f3.txt");

File1.then(function(content){
console.log("content has arrived")
  console.log(content+"");
})

File2.then(function(content){
console.log("content has arrived")
  console.log(content+"");
})

File3.then(function(content){
console.log("content has arrived")
  console.log(content+"");
})



// setTimeout(function () {
//   console.log("I was called after 3sec ");
//   console.log(fileWillBeReadPromise);
// }, 3000);

console.log("After");