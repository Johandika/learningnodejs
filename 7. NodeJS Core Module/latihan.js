// Membuat prompt yang diinputkan ke dalam sebuahfile baru bernama contacts.json dan di simpan

//inisialisasi core modules
const fs = require("fs");
const readline = require("readline");

// Readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda :", (nama) => {
  rl.question("Masukkan no hp anda :", (noHp) => {
    const contact = {
      nama,
      noHp,
    };
    const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data.");
    rl.close();
  });
});
