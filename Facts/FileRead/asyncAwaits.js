let fs = require("fs");

(async function () {
  try {
    let data = await fs.promises.readFile("../f1.txt");
    console.log(data.byteLength);
  } catch (err) {
    console.log("Inside catch");
    console.log(err);
  }
})();
