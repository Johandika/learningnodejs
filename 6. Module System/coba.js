// FUNCTION
const cetakNama = (nama) => {
  return `Hallo, nama saya ${nama}`;
};

// VARIABEL
const PI = 3.14;

// OBJECT
const mahasiswa = {
  nama: "Dodi Ferdiansyah",
  umur: 20,
  cetakMhs() {
    return `Mahasiswa bernama ${this.nama} umur ${this.umur} tahun.`;
  },
};

// CLASS
class Orang {
  constructor() {
    console.log("Object orang sudah di buat");
  }
}

// untuk exports 2 atau lebih, maka menambahkan method atau properti pada module.exports
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// Selain dengan cara yang seperti pada komentar di atas bisa jug dengan dijadikan objek seperti di bawah, bahkan bisa di refactoring lagi di ES 6 jika nama objek dan value sama maka cukup tuliskan 1 nama saja.
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };
module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
