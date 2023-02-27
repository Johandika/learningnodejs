const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts.js");

const app = express();
const port = 3000;

//gunakan ejs dan express-ejs-layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public")); // Build in Middleware

// Application level middleware, next dapat ditulis jika ingin mencari middleware selanjutnya, jika ingin berhenti setelah proses kode maka next tidak perlu di tulis
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

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
    mahasiswas,
  }); // mencari file di dalam folder view dan mengirim data ke view dalam bentuk tunggal dan bentuk array
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  const contacts =  loadContact();
  
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app running port ${port}`);
});
