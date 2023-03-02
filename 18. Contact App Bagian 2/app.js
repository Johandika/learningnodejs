const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact, cekDuplikat, addContact } = require("./utils/contacts.js");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

//gunakan ejs dan express-ejs-layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public")); // Build in Middleware
app.use(express.urlencoded({ extended: true })); //untuk parsing data di post contact dan menghilangkan informasi deprecated body parser

// kofigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg"),
  });
});

// halaman form tambah contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form Tambah Data Contact",
    layout: "layouts/main-layout",
  });
});

// proses data contact
// proses penamaan validatornya harus sama dengan name, bukan id atau yg lainnya
app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplikat = cekDuplikat(value);
      if (duplikat) {
        throw new Error("Nama contact sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHp", "no HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    // res.send(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      // kirimkan flash message
      req.flash("msg", "Data contact berhasil ditambahkan");
      res.redirect("/contact"); // kalau redirect sprt ini maka route yang akan menanganinya bukan "POST" tapi "GET"
    }
  }
);

// halaman detail contact
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
