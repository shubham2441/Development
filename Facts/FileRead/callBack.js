let fs = require("fs");
console.log("start")

fs.readFile("../f1.txt", function (err, f1Content) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(f1Content + "");
    }
    console.log("finish")
})
fs.readFile("../f2.txt", function (err, f2Content) {
    if (err) {
        console.log(err);
    } else {
        console.log(f2Content + "");
    }
})

console.log("After");