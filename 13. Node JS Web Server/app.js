const http = require("http");
const port = 3000;
const fs = require("fs");

//req-request = apa yang dikirimkkan ke server, res-response apa yang dikembalikan web servernya
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html", // untuk status 200 buat kontennya jadi text html
  });

  const url = req.url;
  if (url === "/about") {
    res.write(`<h1>Ini adalah Halaman About</h1>`);
    res.end();
  } else if (url === "/contact") {
    res.write(`<h1>Ini adalah Halaman Contact</h1>`);
    res.end();
  } else {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("Error : File not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}..`);
}); // code untk menjalankan web server
