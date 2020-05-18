let fs = require("fs");
console.log("Before");

let File1 = fs.promises.readFile("../../f1.txt");

File1.then(function(){
    fs.promises.readFile("../../f2.txt");
    console.log("File2 Read");  
}).then(function(){
    fs.promises.readFile("../../f3.txt");
    console.log("File3 Read");  
}).then(function(){
    fs.promises.readFile("../../f4.txt");
    console.log("File4 Read");  
})

console.log("After");
