let fs = require("fs");

let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt"];
for (let i = 0; i < files.length;i++) {
    let nsp = fs.promises.readFile(files[i]);
    nsp.then(function (data) {
        console.log(`Data of file ${i}`);
    })
    nsp.catch(function (err) {
        console.log(err)
    })
}

