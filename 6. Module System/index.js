// Modules = sekumpulan kode yang dapat digunakan kembali dengan antarmuka yg terdefinisi

// Node JS Modules
// 1. Core modules , momdules yg disediakan system, perlu hanya require
// 2. Local modules , modules yg kita buat sendiri, perlu export dan require modules
// 3. Third party modules (npm modules), modules orang lain yang bisa kita pakai

// require()
// fungsi require mencari module dengan urutan sebagai berikut :
// 1. Core modules
// 2. File atau direktori ( ./  atau  /  atau  ../  )
// 3. Folder "node_moodules"

// const fs = require("fs"); // core modules
// const cetakNama = require("./coba"); // locale modules
// const moment = require("moment"); // third party module / npm module / node_modules

// inisialisasi method ke dalam require, dan requirenya cukup 1
const coba = require("./coba");

// memanggil methodnya
console.log(coba.cetakNama("Johandika"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
