const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;
const morgan = require("morgan");

//gunakan ejs dan express-ejs-layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public")); // Build in Middleware

app.get("/", (req, res) => {
  let mahasiswas = [
    {
      nama: "Johandika Lubis",
      email: "johanelyosse@gmail.com",
    },
    {
      nama: "Novia Marlina",
      email: "noviam234@gmail.com",
    },
    {
      nama: "Erika Sitanggang",
      email: "erika448@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Johandika Lubisss",
    title: "Home",
    mahasiswas }); // mencari file di dalam folder view dan mengirim data ke view dalam bentuk tunggal dan bentuk array
});

app.get("/about", (req, res) => {
  res.render("about",{
    layout : "layouts/main-layout",
    title : "Halaman About"});
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout : "layouts/main-layout",
    title: "Halaman Contact" });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app running port ${port}`);
});
