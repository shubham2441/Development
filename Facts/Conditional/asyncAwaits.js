let fs = require("fs");

(async function(){
    let File1 = await fs.promises.readFile("../f1.txt");
    if(File1.byteLength >=10){
        let File2 = await fs.promises.readFile("../f2.txt");
        console.log(`File 2 ${File2.byteLength}`); 
    }
    else{
        let File3 = await fs.promises.readFile("../f3.txt");
        console.log(`File 3 ${File3.byteLength}`); 
    }
})();