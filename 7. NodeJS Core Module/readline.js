// Readline
// Fungsi utama dari readline adalah membaca input dari pengguna secara interaktif dan memungkinkan pengguna untuk memasukkan teks dan menekan tombol enter untuk mengirimkan masukan. readline juga menyediakan berbagai opsi dan metode untuk memanipulasi dan mengubah input yang diterima dari pengguna, seperti menghapus karakter tertentu, mengedit input, atau menyimpan riwayat input yang dimasukkan.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// contoh pneggunaan readline dalam pembuatan prompt
rl.question("Masukkan nama anda :", (nama) => {
  rl.question("Masukkan no hp anda :", (hp) => {
    console.log(`Terimakasih ${nama} anda sudah memasukkan no ${hp}`);
    rl.close();
  });
});
