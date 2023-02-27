// cara mengambil argumen dari command line, menggunakan module "yargs" yaitu module yang fungsinya mengelola argumen pada command line kita
const yargs = require("yargs");
const { simpanContact } = require("./contacs");

yargs.command({
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
});

yargs.parse();
