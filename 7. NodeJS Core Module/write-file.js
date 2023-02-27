// 5 Module nodejs yang paling sering di gunakan dan kegunaannya :
// 1. HTTP: Module ini digunakan untuk membuat aplikasi web dan HTTP server. HTTP memungkinkan Node.js untuk mengirim permintaan HTTP, menerima respons HTTP, dan mengakses berbagai properti dan header HTTP.
// 2. FS (File System): Module ini digunakan untuk membaca, menulis, mengubah, dan menghapus file pada sistem file. FS menyediakan fungsi-fungsi yang memungkinkan Node.js untuk berinteraksi dengan sistem file, termasuk membaca dan menulis file.
// 3. Path: Module ini digunakan untuk mengelola dan memanipulasi path file dan direktori. Path menyediakan fungsi-fungsi untuk mengkonversi path relatif menjadi path absolut, mengekstrak direktori, dan nama file dari path, serta memanipulasi ekstensi file.
// 4. Events: Module ini digunakan untuk mengaktifkan dan mengelola event dan event listener. Events memungkinkan Node.js untuk membuat, memicu, dan menangani event dalam aplikasi.
// 5. OS (Operating System): Module ini digunakan untuk mengakses informasi sistem operasi. OS menyediakan fungsi-fungsi untuk mengambil informasi tentang CPU, memori, dan jaringan, serta informasi sistem operasi yang lebih umum seperti platform, hostname, dan direktori kerja.

// CORE MODULES
// FILE SYSTEM
const fs = require("fs");

// Kita akan menggunakan beberapa method simple dari 'fs' :
// writeFileSync, untuk menuliskan sesuatu ke dalam sebuah file secara Synchronous. tuliskan direktori file, kemudian tuliskan apa yang mau di isi ke dalamnya, jika file tidak ada maka node js akan membuat file secara otomatis, kalau file sudah ada maka isi file tersebut akan di timpa. Kita juga tidak bisa menggunakan data/test.txt dengan maksud ingin membuat folder baru, karena membuat folder berbeda lagi caranya

// menuliskan string ke file (Synchronous)
try {
  fs.writeFileSync("test.txt", "Hello world secara Synchronous .!");
} catch (err) {
  console.log(err); //menggunakan try catch untuk menampilkan error untuk Synchronous, untuk yg Async tidak perlu karena nanti sudah di tangani dengan callback
}

try {
  fs.writeFileSync("data/test.txt", "Hello world secara Synchronous di folder data!");
} catch (err) {
  console.log(err); //menggunakan try catch untuk menampilkan error untuk Synchronous, untuk yg Async tidak perlu karena nanti sudah di tangani dengan callback
}

// menuliskan string ke file (Asynchronous)
fs.writeFile("data/test.txt", "Hello world secara Asynchronous", (err) => {
  console.log(err);
});
