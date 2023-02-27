// npm init adalah perintah awal untuk menginisialisasi paket NPM
// npm install adalah perintah untuk install paket npm
// npm uninstall adalah perintah untuk uninstall paket npm
//npm i validator@13.5.2 adalah perintah untuk install spesifik
const validator = require("validator");

//validasi email
console.log(validator.isEmail("Sandhika@gmail.com"));
//validasi mobile phone
console.log(validator.isMobilePhone("082370323310", "id-ID"));
//validasi angka
console.log(validator.isNumeric("082370323310"));
