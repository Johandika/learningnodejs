// Membuat prompt yang diinputkan ke dalam sebuahfile baru bernama contacts.json dan di simpan

//inisialisasi core modules
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data jika belum ada , existsSync untuk mengecek apakah direktori ada atau tidak
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data"); // method mkdirSync untuk membuatkan direktori jika tidak ada
}

//membuat file contacts.json jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]", "utf-8");
}

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file); // mengubah data jadi objek javascript

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")); // penggunaan chalk
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      // jika tidak email apa yg dilakukan
      console.log(chalk.red.inverse.bold("Email tidak valid")); // penggunaan chalk
      return false;
    }
  }

  // cek noHp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    // jika tidak email apa yg dilakukan
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid")); // penggunaan chalk
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); // stringify mengubah data jadi JSON
  console.log(chalk.green.inverse.bold("Terimakasih sudah memasukkan data."));
};

// multiple export dalam bentuk object dengan notasi ES6
module.exports = { simpanContact };
