// Membuat prompt yang diinputkan ke dalam sebuahfile baru bernama contacts.json dan di simpan

//inisialisasi core modules
const fs = require("fs");
const readline = require("readline");

// Readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data jika belum ada , existsSync untuk mengecek apakah direktori ada atau tidak
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data"); // method mkdirSync untuk membuatkan direktori jika tidak ada
}

//membuat file contacts.json jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]", "utf-8");
}

// PENGGUNAAN DENGAN PROMISE
const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8"); // buat direktori
  const contacts = JSON.parse(fileBuffer); // parse ke JSON
  contacts.push(contact); // nambahin inputan baru ke JSON
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts)); // di print ke file contacts.json
  console.log("Terimakasih sudah memasukkan data.");

  rl.close();
};

// multiple export dalam bentuk object dengan notasi ES6
module.exports = { pertanyaan, simpanContact };
