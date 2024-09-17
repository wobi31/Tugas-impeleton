##Tugas impeleton
Tugas1:
##Deskripsi:
Program penegcekan kata palindrom menggunakna promise javscript

##Rincian kode
Fungsi cekKataPalindrom: Fungsi ini mengambil satu argumen, kata, yang merupakan string yang ingin diuji.
Promise: Fungsi tersebut mengembalikan Promise baru yang merepresentasikan hasil dari pengujian palindrom.
setTimeout: Fungsi setTimeout digunakan untuk menunda eksekusi kode yang mencocokkan kata dan versi terbalik dari kata. Ini memungkinkan untuk memastikan bahwa kode yang dijalankan di lingkungan asynchronous.
Konversi ke huruf kecil: Kata yang diberikan diubah menjadi huruf kecil menggunakan metode toLowerCase.
Membalikkan kata: Kata yang diubah menjadi huruf kecil dibalik menggunakan metode split, reverse, dan join.
Membandingkan kata: Kata asli dan versi terbaliknya dibandingkan untuk memeriksa apakah mereka sama.
Menyelesaikan Promise: Jika kata adalah palindrom, fungsi resolve dari Promise dipanggil, yang mengirimkan pesan yang mengonfirmasi bahwa kata tersebut adalah palindrom. Jika tidak, fungsi reject dipanggil, yang mengirimkan Error baru yang menunjukkan bahwa kata tersebut bukan palindrom.
Menggunakan fungsi: Fungsi tersebut dapat digunakan dengan memanggilnya dan menambahkan then dan catch untuk menangani hasil dari Promise yang dikembalikan. Contoh kode untuk menggunakan fungsi tersebut disajikan di bagian bawah kode, di mana fungsi cekKataPalindrom dipanggil dengan parameter "siang" dan kemudian menangani hasil dengan menggunakan then dan catch.

##Output
Output akan mencetak sesuai program Jika kata tersebut adalah palindrom, fungsi resolve dari Promise dipanggil, jika tidak, fungsi reject dipanggil.

Tugas2:
##Deskripsi:
Program sederhana Reverse Words,programakan membalikan kata yang di inputakan.di dalam program kata yang akan di balikan adalah ('saya belajar javascript')

##Rincian kode
meengunakan 3 method split,reverse,join
split akan menguraikan kata kemudian reverse akan membalikan kata yang diinputkan,join akan menggabungknya kembali

##Output
Output akan mencetak hasil dari kata yang sudah di jalankan

Tugas3:
##Deskripsi:
Program  applikasi Fazzfood menghitung jumlah pembelajan,dengan memeiliki 2 fromo FAzzFood dan Ditraktir60

##Rincian Kode
Menerima 4 parameter: harga, voucher, jarak, pajak.
Menghitung diskon berdasarkan voucher yang diberikan.
Menghitung biaya jarak berdasarkan jarak tempuh.
Menghitung pajak yang dikenakan.
Menghitung subtotal dan total harga.
Mengembalikan objek yang berisi rincian hasil perhitungan.
Menghitung Diskon:
Memeriksa apakah voucher ada.
Jika ada, menentukan nilai diskon berdasarkan jenis voucher.
Menghitung potongan harga berdasarkan diskon.
Membandingkan potongan harga dengan potongan maksimal, dan mengambil nilai yang lebih kecil.
Menghitung Biaya Jarak:
Menentukan biaya jarak berdasarkan jarak tempuh.
Menghitung Pajak:
Memeriksa apakah pajak diaktifkan.
Jika diaktifkan, menghitung pajak yang dikenakan.
Menghitung Subtotal dan Total:
Menghitung subtotal dengan mengurangi harga dengan diskon dan menambahkan biaya jarak.
Menghitung total dengan menambahkan subtotal dengan pajak yang dikenakan.
Mengembalikan Objek:
Mengembalikan objek yang berisi rincian hasil perhitungan:
potonganHarga: Diskon yang diberikan.
pajakDikenakan: Pajak yang dikenakan.
biayaJarak: Biaya jarak tempuh.
subtotal: Subtotal harga.

Tugas4:
##Deskripsi:
program menghitung Deret angka

##Rincian kode
1. Fungsi `angka()` menerima sebuah input berupa angka (`deretAngka`).
2. Fungsi tersebut mengubah input angka menjadi string.
3. Kemudian, fungsi mengganti semua karakter '0' dengan string kosong menggunakan metode `replace()` dengan regex `/0/g`.
4. Terakhir, fungsi mengembalikan hasil sebagai angka integer dengan menggunakan fungsi `parseInt()`.

##Output
Output akan mencetak deret angka

