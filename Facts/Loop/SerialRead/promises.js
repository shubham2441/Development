let fs = require("fs");


let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt"];

let FileRead = fs.promises.readFile(files[0]);
for (let i = 1; i < files.length; i++) {
  FileRead = FileRead.then(function (data) {
    console.log(`File no ${i} printed`)
    let TempRead = fs.promises.readFile(files[i]);
    return TempRead;
  })
}
