let fs = require("fs");

let files = ["f1.txt","f2.txt","f3.txt","f4.txt"];
readFiles(0);
console.log("Finish");

function readFiles(i){
    if(i==files.length){
        return;
    }
    fs.readFile(files[i], function(err,data){
        console.log(`File ${i+1}`);
    })
    readFiles(i+1);
}