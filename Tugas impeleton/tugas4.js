function angka(deretAngka) {
  const angka = deretAngka.toString(); // angka di ubah menjadi string
  const hasil = angka.replace(/0/g, ''); // menghapus nilai nol
  return parseInt(hasil);
}

const deretAngka = 5956560159466056;
const hasil = angka(deretAngka);
console.log(hasil); // Output: 55566914566956