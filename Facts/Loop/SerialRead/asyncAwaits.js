let fs = require("fs");
(async function(){
let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt"];
try {
  for (let i = 0; i < files.length;i++) {
    await fs.promises.readFile(files[i]);
    console.log(`Data of file ${i}`);
  }
}

catch (err) {
  console.log(err)
}
})();
