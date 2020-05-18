let fs = require("fs");
// (async function(){
//   let readFiles = [];
 let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt"];
// try {
//   for (let i = 0; i < files.length;i++) {
//     readFiles.push(fs.promises.readFile(files[i]));
//   }
//   for(let i=0;i<files.length;i++){
//     readFiles[i] = await readFiles[i]; 
//     console.log(`Data of file ${i+1}`);
//   }
// }

// catch (err) {
//   console.log(err)
// }
// })();
async function myfn (path){
  let ans = await fs.promises.readFile(path);
  console.log(ans.byteLength);
  //return ans.byteLength;
}
for(let i=0;i<files.length;i++){
   myfn(files[i]);
}
