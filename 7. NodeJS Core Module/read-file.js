// membaca isi file secara (Synchronous), mengubah buffer ke teks dengan toString()
const fs = require("fs");
const data = fs.readFileSync("data/test.txt");
console.log(data.toString());

// membaca isi file secara (Synchronous), mengubah buffer ke teks dengan encoding UTF-8
const data2 = fs.readFileSync("data/test.txt", "utf-8");
console.log(data2);

//membaca isi file secara (Asynchronous)
fs.readFile("data/test.txt", "utf-8", (err, data3) => {
  if (err) throw err;
  console.log(data3);
});
