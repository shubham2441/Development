let fs = require("fs");


let File1 = fs.promises.readFile("../f1.txt");
File1.then(function (data) {
    if (data.byteLength >= 10) {
        console.log(`File 1 data ${data.byteLength}`);
        console.log("inside if")
        let File2 = fs.readFile("../f2.txt");
        return File2;
    }
    //console.log(`File 2 data ${data.byteLength}`);
    else {
        let File3 = fs.promises.readFile("../f3.txt");
            console.log("Inside else")
            console.log(`File 1 data ${data.byteLength}`);
            return File3;
        }
    }).then(function(data){
        console.log(data+"");
    }).catch(function(err){
        console.log("error has occurred");
    });
