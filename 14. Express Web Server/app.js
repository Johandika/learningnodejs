const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // .sendFile untuk menampilkan response berupa file kita. Argumennya yaitu path file dan root direktori . Bisa menampikan file gambar, file pdf dll. Untuk mengembalikan file html sebenarnya menggunakan view yang akan kita bahas di materi selanjutnya
  res.sendFile("./index.html", { root: __dirname });

  // .json dari express akan langsung mengembalikan file dalam bentuk json karena langsung di parsing oleh method .json() dari express
  // res.json({
  //   nama: "Johandika",
  //   number: "082370323310",
  //   umur: "26 tahun",
  // });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

// Route parameter 1 parameter
app.get("/product/:id", (req, res) => {
  res.send("Product ID :" + req.params.id);
});

// Route parameter 2 parameter
app.get("/smartphone/:id/category/:idCat", (req, res) => {
  res.send(`Smartphone ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
});

// Query String
// http://localhost:3000/produkrumahtangga/[id]?category=[category]
// http://localhost:3000/produkrumahtangga/2?category=meja
app.get("/produkrumahtangga/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

// .use gunanya untuk menjalankan sebuah middleware, dia akan menjalankan apapun yang di tulis pada request http/path. Jadi jangan letakkan ini paling atas karena route lain di bawahnya tidak akan pernah dijalankan
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app running port ${port}`);
});
