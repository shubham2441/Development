let fs = require("fs");
console.log("Before");

let fileWillBeReadPromise = fs.promises.readFile("../f1.txt");
console.log(fileWillBeReadPromise)

fileWillBeReadPromise.then(function(content){
console.log("content has arrived")
  console.log(content);
})

setTimeout(function () {
  console.log("I was called after 3sec ");
  console.log(fileWillBeReadPromise);
}, 3000);

console.log("After");