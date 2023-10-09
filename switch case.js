let programStudi = "Informatika";
let pesan;

switch (programStudi) {
  case "Informatika":
    pesan = "Anda mahasiswa program studi Informatika.";
    break;
  case "Ekonomi":
    pesan = "Anda mahasiswa program studi Ekonomi.";
    break;
  default:
    pesan = "Anda mahasiswa program studi lainnya.";
}

console.log(pesan);
