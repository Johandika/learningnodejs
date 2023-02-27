// PENGGUNAAN TANPA PROMISE, kelemahannya akan mengakibatkan callback hell
// rl.question("Masukkan nama anda :", (nama) => {
//   rl.question("Masukkan no hp anda :", (noHp) => {
//     const contact = {
//       nama,
//       noHp,
//     };
//     const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(fileBuffer);
//     contacts.push(contact);
//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
//     console.log("Terimakasih sudah memasukkan data.");
//     rl.close();
//   });
// });

const { pertanyaan, simpanContact } = require("./contacs");

const main = async () => {
  const nama = await pertanyaan("Masukkan nama anda :");
  const email = await pertanyaan("Masukkan email anda :");
  const noHp = await pertanyaan("Masukkan noHp anda :");

  simpanContact(nama, email, noHp);
};

main();
