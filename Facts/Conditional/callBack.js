let fs = require("fs");

let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];

fs.readFile(files[0], function (err, data) {
    if (data.byteLength > 20) {
        console.log(`File 1 data ${data.byteLength}`);
        fs.readFile(files[1], function (err, data) {
            console.log(`File 2 data ${data.byteLength}`);
            if (data.byteLength > 40) {
                fs.readFile(files[5], function (err, data) {
                    console.log(`File 6 data ${data.byteLength}`);
                })

            } else {
                fs.readFile(files[6], function (err, data) {
                    console.log(`File 7 data ${data.byteLength}`);
                })
            }
        })
    } else {
        fs.readFile(files[2], function (err, data) {
            console.log(`file 3 data ${data.byteLength}`);
            if (data.byteLength < 30) {
                fs.readFile(files[3], function (err, data) {
                    console.log(`File 4 data ${data.byteLength}`);
                })
            } else {
                fs.readFile(files[6], function (err, data) {
                    console.log(`File 5 data ${data.byteLength}`);
                })

            }
        })

    }
})