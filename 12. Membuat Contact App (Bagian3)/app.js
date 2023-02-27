// cara mengambil argumen dari command line, menggunakan module "yargs" yaitu module yang fungsinya mengelola argumen pada command line kita
const yargs = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require("./contacs");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      // builder penulisannya yaitu --nama= ,--email= , --noHp=
      nama: {
        describe: "Nama Lengkap", // cek di yargs .option
        demandOption: true, // required atau tidak
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "No Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      simpanContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .demandCommand(); // agar node app tidak kosong di CLI

// menampilkan daftar semua nama kontak dan no hp
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama $ no hp kontak",
  handler() {
    listContact();
  },
});

// menampilkan detail sebuah kontak berdasarkan nama
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus kontak berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
