/* 
Soal Latihan #1: Memeriksa Angka Genap atau Ganjil
Tujuan: Gunakan kondisional (if/else) untuk memeriksa apakah sebuah angka adalah genap atau ganjil.

Data Awal: const angka = 17;

Instruksi:

Buat if/else statement untuk memeriksa angka.

Cetak "Genap" jika angka habis dibagi 2.

Cetak "Ganjil" jika tidak.
*/
const angka = 17;
if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

/* 
Soal Latihan #2: Menggabungkan Elemen Array Menjadi String
Tujuan: Gabungkan semua elemen dari sebuah array menjadi satu kalimat dengan spasi di antara setiap kata.

Data Awal: const kata = ['Saya', 'sedang', 'belajar', 'JavaScript'];

Instruksi:

Gunakan perulangan for untuk mengiterasi array.

Gabungkan setiap elemen ke dalam sebuah variabel string baru.

Cetak kalimat akhirnya.

Silakan tulis kode Anda. Saya akan menunggunya di sini.
*/

const kata = ["Saya", "sedang", "belajar", "JavaScript"];

let kalimat = "";
for (let i = 0; i < kata.length; i++) {
  kalimat += kata[i] + " ";
}
console.log(kalimat);

/* 
Soal Latihan #3: Mencari Nilai Maksimal dalam Array
Tujuan: Temukan angka terbesar dalam sebuah array.

Data Awal: const nilai = [5, 12, 8, 25, 18];

Instruksi:

Buat variabel nilaiMax dengan nilai awal angka pertama dari array.

Gunakan perulangan for untuk membandingkan setiap elemen dengan nilaiMax.

Jika elemen lebih besar dari nilaiMax, perbarui nilai nilaiMax.

Cetak nilaiMax setelah perulangan selesai.
*/

const nilai = [5, 12, 8, 25, 18];

let nilaiMax = nilai[0];

for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] > nilaiMax) {
    nilaiMax = nilai[i];
  }
}
console.log(nilaiMax);

/* 
Soal Latihan #4: Mengubah Objek Menjadi Array Kunci-Nilai
Tujuan: Ubah objek menjadi array dari array berpasangan ([key, value]).

Data Awal: const dataPengguna = { nama: 'Andi', umur: 22, kota: 'Jakarta' };

Instruksi:

Gunakan metode Object.entries() untuk mengubah objek menjadi array pasangan.

Cetak array hasilnya.
*/

const dataPengguna = { nama: "Andi", umur: 22, kota: "Jakarta" };

let arrayDataPengguna = Object.entries(dataPengguna);
console.log(arrayDataPengguna);
/* 
 Object.entries()

akan mengambil property(key:value), dan membuatnya dalam satu array kecil [key, value], sekumpulan property itu akan digabungkan menjadi di dalam array besar

[
  [key, value],
  [key, value],
  [key, value],
]
*/

/* 
Soal Latihan #5: Menyaring Angka Positif
Tujuan: Gunakan filter() untuk menyaring hanya angka-angka positif dari sebuah array.

Data Awal: const dataAngka = [-5, 10, -3, 20, 0, -1];

Instruksi:

Buat array baru bernama dataPositif menggunakan metode filter().

Di dalam filter(), tulis kondisi untuk memilih angka yang lebih besar dari 0.

Cetak array dataPositif.
*/

const dataAngka = [-5, 10, -3, 20, 0, -1];
let dataPositif = dataAngka.filter((curr) => {
  return curr > 0;
});
console.log(dataPositif);

/* 
Soal Latihan #6: Mengubah Suhu dari Celsius ke Fahrenheit
Tujuan: Gunakan map() untuk mengubah semua nilai suhu dari Celsius ke Fahrenheit.

Data Awal: const suhuCelsius = [0, 10, 20, 30];

Rumus: (C * 9/5) + 32

Instruksi:

Buat array baru bernama suhuFahrenheit menggunakan map().

Di dalam map(), terapkan rumus konversi ke setiap elemen.

Cetak array suhuFahrenheit.
*/
const suhuCelsius = [0, 10, 20, 30];

const suhuFahrenheit = suhuCelsius.map((curr) => (curr * 9) / 5 + 32);
console.log(suhuFahrenheit);

/* 
Soal Latihan #7: Menghitung Total Harga Barang
Tujuan: Hitung total harga dari array objek, di mana setiap objek memiliki harga.

const keranjang = [
  { produk: 'Buku', harga: 5000 },
  { produk: 'Pensil', harga: 2000 },
  { produk: 'Penghapus', harga: 1500 }
];

Instruksi:
1. Gunakan reduce() untuk menjumlahkan semua properti harga.
2. Cetak total harga akhirnya.
*/
const keranjang = [
  { produk: "Buku", harga: 5000 },
  { produk: "Pensil", harga: 2000 },
  { produk: "Penghapus", harga: 1500 },
];

const totalHarga = keranjang.reduce((acc, curr) => {
  return (acc += curr.harga);
}, 0);

console.log(totalHarga);

/* 
Soal Latihan #8: Mengelompokkan Transaksi berdasarkan Tipe
Tujuan: Gunakan reduce() untuk mengelompokkan transaksi ke dalam objek berdasarkan tipenya ('pemasukan' atau 'pengeluaran').

Data Awal:

JavaScript

const transaksi = [
  { tipe: 'pemasukan', jumlah: 10000 },
  { tipe: 'pengeluaran', jumlah: 5000 },
  { tipe: 'pemasukan', jumlah: 8000 }
];

Instruksi:
1. Gunakan reduce() dengan nilai awal objek kosong {}.
2. Untuk setiap transaksi, tambahkan jumlah ke tipe yang sesuai. Jika tipe belum ada, inisialisasi dengan jumlah saat ini.
3. Cetak objek akhirnya.
*/
const transaksi = [
  { tipe: "pemasukan", jumlah: 10000 },
  { tipe: "pengeluaran", jumlah: 5000 },
  { tipe: "pemasukan", jumlah: 8000 },
];
const cashFlow = transaksi.reduce((acc, curr) => {
  acc[curr.tipe] = (acc[curr.tipe] || 0) + curr.jumlah;
  return acc;
}, {});
console.log(cashFlow);

/* 
Soal Latihan #9: Mencari Pengguna Berdasarkan ID
Tujuan: Gunakan find() untuk menemukan objek pengguna dengan ID tertentu.

Data Awal:
const pengguna = [
  { id: 101, nama: 'Budi' },
  { id: 102, nama: 'Citra' },
  { id: 103, nama: 'Dewi' }
];
Instruksi:
1. Gunakan find() untuk mencari pengguna dengan id 102.
2. Cetak objek pengguna yang ditemukan.
*/
const pengguna = [
  { id: 101, nama: "Budi" },
  { id: 102, nama: "Citra" },
  { id: 103, nama: "Dewi" },
];

const foundUser = pengguna.find((curr) => curr.id === 102);
console.log(foundUser);

/* 
Soal Latihan #10: Memeriksa Ketersediaan Stok
Tujuan: Gunakan some() untuk memeriksa apakah ada setidaknya satu produk yang memiliki stok di bawah 5.

Data Awal:

JavaScript

const produk = [
  { nama: 'Baju', stok: 15 },
  { nama: 'Celana', stok: 8 },
  { nama: 'Sepatu', stok: 4 }
];
Instruksi:

Gunakan metode some() untuk mengembalikan true atau false berdasarkan kondisi stok < 5.

Cetak hasilnya.
*/
const produk = [
  { nama: "Baju", stok: 15 },
  { nama: "Celana", stok: 8 },
  { nama: "Sepatu", stok: 4 },
];

const checkStock = produk.some((curr) => curr.stok < 5);
console.log(checkStock);

/* 
Soal Latihan #11: Mengubah Data Pembelian
Tujuan: Dari array objek pembelian, hitung total harga dari semua produk yang stoknya kurang dari 10.

const pembelian = [
  { namaProduk: 'Laptop', harga: 1200, stok: 15 },
  { namaProduk: 'Mouse', harga: 25, stok: 5 },
  { namaProduk: 'Keyboard', harga: 75, stok: 20 },
  { namaProduk: 'Monitor', harga: 200, stok: 8 }
];

Instruksi:

Gunakan filter() untuk menyaring produk dengan stok di bawah 10.

Gunakan reduce() untuk menjumlahkan harga dari produk yang sudah disaring
*/
const pembelian = [
  { namaProduk: "Laptop", harga: 1200, stok: 15 },
  { namaProduk: "Mouse", harga: 25, stok: 5 },
  { namaProduk: "Keyboard", harga: 75, stok: 20 },
  { namaProduk: "Monitor", harga: 200, stok: 8 },
];

const stockUnder10 = pembelian.filter((curr) => curr.stok < 10);
const totalPriceUnder10 = stockUnder10.reduce((acc, curr) => {
  acc += curr.harga;
  return acc;
}, 0);
console.log(totalPriceUnder10);

/* 
Soal Latihan #12: Meratakan dan Menghitung
Tujuan: Gunakan reduce() untuk meratakan array dari array dan menghitung total jumlah semua angka.

Data Awal: const nestedNumbers = [[1, 2], [3, 4, 5], [6]];
Output yang Diharapkan: 21

Instruksi:

Gunakan reduce() untuk mengiterasi nestedNumbers.

Di setiap iterasi, jika elemen saat ini adalah sebuah array, tambahkan semua angkanya ke akumulator. Jika tidak, tambahkan elemen itu sendiri ke akumulator.

Cetak total akhirnya.
*/
const nestedNumbers = [[1, 2], [3, 4, 5], [6]];
const totalNumber = nestedNumbers.reduce((acc, curr) => {
  const innerSum = curr.reduce((innerAcc, num) => innerAcc + num, 0);
  return acc + innerSum;
}, 0);
console.log(totalNumber);

/* 
Soal Latihan #13: Mengubah Data Menjadi Objek Tunggal
Tujuan: Dari array produk dan array harga, buatlah satu objek tunggal yang menggabungkan nama produk dengan harganya.

Data Awal:

JavaScript

const produk = ['Laptop', 'Mouse', 'Keyboard'];
const harga = [1200, 25, 75];
Instruksi:

Gunakan reduce() untuk mengiterasi salah satu array (misalnya produk).

Di setiap iterasi, gunakan indeks untuk mengambil harga yang sesuai dari array harga.

Gabungkan nama produk dan harganya ke dalam akumulator yang merupakan sebuah objek.

Cetak objek akhirnya.
*/
const produkElektronik = ["Laptop", "Mouse", "Keyboard"];
const harga = [1200, 25, 75];

const hargaProduk = produkElektronik.reduce((acc, curr, index) => {
  acc[curr] = harga[index];
  return acc;
}, {});

console.log(hargaProduk);

/* 

Soal Latihan #14: Mengelompokkan Produk Berdasarkan Kategori
Tujuan: Gunakan reduce() untuk mengelompokkan produk menjadi objek tunggal berdasarkan kategorinya.

Data Awal:

JavaScript

const daftarProduk = [
  { nama: 'Laptop', kategori: 'elektronik' },
  { nama: 'Kemeja', kategori: 'pakaian' },
  { nama: 'Headphone', kategori: 'elektronik' },
  { nama: 'Celana Jeans', kategori: 'pakaian' },
  { nama: 'Blender', kategori: 'rumah tangga' }
];
Instruksi:

Gunakan reduce() untuk mengelompokkan produk-produk tersebut.

Akumulator (acc) akan menjadi objek kosong {}.

Di setiap iterasi, periksa apakah kategori produk saat ini sudah ada di dalam akumulator.

Jika belum, buat array kosong untuk kategori tersebut.

Jika sudah ada, tambahkan produk ke dalam array kategori yang sudah ada.

Cetak objek akhirnya.

Output:
{
  elektronik: [
    { nama: 'Laptop', kategori: 'elektronik' },
    { nama: 'Headphone', kategori: 'elektronik' }
  ],
  pakaian: [
    { nama: 'Kemeja', kategori: 'pakaian' },
    { nama: 'Celana Jeans', kategori: 'pakaian' }
  ],
  'rumah tangga': [
    { nama: 'Blender', kategori: 'rumah tangga' }
  ]
}
*/
const daftarProduk = [
  { nama: "Laptop", kategori: "elektronik" },
  { nama: "Kemeja", kategori: "pakaian" },
  { nama: "Headphone", kategori: "elektronik" },
  { nama: "Celana Jeans", kategori: "pakaian" },
  { nama: "Blender", kategori: "rumah tangga" },
];

const categoryProduct = daftarProduk.reduce((acc, curr) => {
  (acc[curr.kategori] = acc[curr.kategori] || []).push(curr);
  return acc;
}, {});
console.log(categoryProduct);

/* 
Soal Latihan #15: Menghitung Rata-rata Harga Produk
Tujuan: Dari array objek produk, hitung rata-rata harga produk yang memiliki stok di atas 10.

Data Awal:

JavaScript

const produk = [
  { nama: 'Baju', harga: 150000, stok: 12 },
  { nama: 'Celana', harga: 200000, stok: 8 },
  { nama: 'Sepatu', harga: 350000, stok: 15 },
  { nama: 'Topi', harga: 50000, stok: 5 },
  { nama: 'Jaket', harga: 400000, stok: 20 }
];
Instruksi:

Gunakan filter() untuk menyaring produk dengan stok di atas 10.

Gunakan map() pada hasil penyaringan untuk mendapatkan array yang hanya berisi harga.

Gunakan reduce() untuk mendapatkan array yang hanya berisi harga dan menghitung totalnya.

Hitung rata-rata dengan membagi total harga dengan jumlah produk yang disaring.

Cetak hasil rata-rata.
*/
const produk2 = [
  { nama: "Baju", harga: 150000, stok: 12 },
  { nama: "Celana", harga: 200000, stok: 8 },
  { nama: "Sepatu", harga: 350000, stok: 15 },
  { nama: "Topi", harga: 50000, stok: 5 },
  { nama: "Jaket", harga: 400000, stok: 20 },
];

const above10 = produk2.filter((curr) => curr.stok > 10);
const totalHargaAbove10 = above10.reduce((acc, curr) => acc + curr.harga, 0);
const averageAbove10 = totalHargaAbove10 / above10.length;
console.log(averageAbove10);

/* 
Soal Latihan #16: Menghitung Nilai Unik dan Jumlahnya
Tujuan: Dari array dataPesanan, hitung berapa kali setiap item muncul.

Data Awal:
const dataPesanan = [
  'Buku', 'Pensil', 'Buku', 'Pensil', 'Pensil', 'Penghapus'
];

Instruksi:

Gunakan reduce() untuk menghitung frekuensi setiap item.

Akumulator (acc) akan menjadi sebuah objek kosong {}.

Di setiap iterasi, periksa apakah item saat ini sudah ada di dalam akumulator.

Jika item belum ada, inisialisasikan dengan nilai 1.

Jika item sudah ada, tambahkan nilai hitungannya (+1).

Cetak objek akhir yang berisi nama item dan jumlahnya.
*/
const dataPesanan = ["Buku", "Pensil", "Buku", "Pensil", "Pensil", "Penghapus"];

const counterPesanan = dataPesanan.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(counterPesanan);

/* 
Soal Latihan #17: Menemukan dan Memverifikasi Data
Tujuan: Dari array objek siswa, pastikan semua siswa lulus ujian, yaitu memiliki nilai di atas atau sama dengan 75.

Data Awal:
const siswa = [
  { nama: 'Andi', nilai: 85 },
  { nama: 'Budi', nilai: 92 },
  { nama: 'Citra', nilai: 78 },
  { nama: 'Dewi', nilai: 65 }
];

Instruksi:

Gunakan every() untuk memeriksa apakah semua siswa memiliki nilai nilai >= 75.

Cetak hasilnya (yaitu, true atau false).
*/
const siswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Citra", nilai: 78 },
  { nama: "Dewi", nilai: 65 },
];

const nilaiSiswa = siswa.every((curr) => curr.nilai >= 75);
console.log(nilaiSiswa);

/* 
Soal Latihan #18: Memeriksa dan Menemukan Ketidaksesuaian
Tujuan: Gunakan some() untuk memeriksa apakah ada setidaknya satu produk yang memiliki stok di bawah 5.

Data Awal:

JavaScript

const produk = [
  { nama: 'Baju', stok: 15 },
  { nama: 'Celana', stok: 8 },
  { nama: 'Sepatu', stok: 4 },
  { nama: 'Topi', stok: 10 }
];
Instruksi:

Gunakan metode some() untuk memeriksa apakah ada produk dengan stok < 5.

Cetak hasilnya (true atau false).
*/
const produk3 = [
  { nama: "Baju", stok: 15 },
  { nama: "Celana", stok: 8 },
  { nama: "Sepatu", stok: 4 },
  { nama: "Topi", stok: 10 },
];

const stokUnder5 = produk3.some((curr) => curr.stok < 5);
console.log(stokUnder5);

/* 
Soal Latihan #19: Menggabungkan dan Menyaring Objek
Tujuan: Gabungkan dua array objek menjadi satu dan saring objek yang duplikat berdasarkan id.

Data Awal:
const array1 = [
  { id: 1, nama: 'Baju' }, 
  { id: 2, nama: 'Celana' }
];
const array2 = [
  { id: 2, nama: 'Celana' }, 
  { id: 3, nama: 'Sepatu' }
];

Instruksi:
Gabungkan kedua array menjadi satu array menggunakan concat() atau spread operator (...).
Gunakan reduce() untuk membuat objek sementara yang menggunakan id sebagai kunci (key) untuk menyingkirkan duplikat.
Gunakan Object.values() pada objek sementara untuk mendapatkan array objek tanpa duplikat.
Cetak hasilnya.

Output yang Diharapkan:
[
  { id: 1, nama: 'Baju' },
  { id: 2, nama: 'Celana' },
  { id: 3, nama: 'Sepatu' }
]
*/
const array1 = [
  { id: 1, nama: "Baju" },
  { id: 2, nama: "Celana" },
];
const array2 = [
  { id: 2, nama: "Celana" },
  { id: 3, nama: "Sepatu" },
];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);

/* 
Soal Latihan #20: Menggabungkan dan Mengubah Objek
Tujuan: Dari array data, gunakan reduce() untuk menggabungkan objek-objek tersebut dan mengubah formatnya menjadi objek tunggal dengan ID sebagai kunci

const data = [
  { id: 'a1', nama: 'Laptop', harga: 1200 },
  { id: 'b2', nama: 'Mouse', harga: 25 },
  { id: 'c3', nama: 'Keyboard', harga: 75 }
];

Instruksi:
Gunakan reduce() untuk mengiterasi array data.
Akumulator (acc) akan menjadi objek kosong {}.
Di setiap iterasi, tambahkan objek saat ini ke dalam akumulator, menggunakan id sebagai kunci.
Cetak objek akhirnya.

Output yang Diharapkan:
{
  a1: { id: 'a1', nama: 'Laptop', harga: 1200 },
  b2: { id: 'b2', nama: 'Mouse', harga: 25 },
  c3: { id: 'c3', nama: 'Keyboard', harga: 75 }
}
*/
const data = [
  { id: "a1", nama: "Laptop", harga: 1200 },
  { id: "b2", nama: "Mouse", harga: 25 },
  { id: "c3", nama: "Keyboard", harga: 75 },
];

const dataAkumulatif = data.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
console.log(dataAkumulatif);

/* 
Soal Latihan #21: Mencari Nilai Maksimal dan Minimal
Tujuan: Temukan nilai terbesar dan terkecil dari sebuah array angka.

Data Awal: const angka = [15, 8, 27, 4, 33, 10];

Instruksi:
Gunakan reduce() untuk menemukan angka terbesar.
Gunakan reduce() untuk menemukan angka terkecil.
Cetak kedua hasilnya.

*/
const angkaLain = [15, 8, 27, 4, 33, 10];
const minValue = angkaLain.reduce((acc, num) => {
  acc = num < acc ? num : acc;
  return acc;
}, angkaLain[0]);
console.log(minValue);
const maxValue = angkaLain.reduce((acc, num) => {
  acc = num > acc ? num : acc;
  return acc;
}, angkaLain[0]);
console.log(maxValue);

/* 
Soal Latihan #22: Menggabungkan dan Mengubah Objek (Lanjutan)
Tujuan: Dari dua array, gabungkan data berdasarkan id yang sama, dan tambahkan properti baru (totalHarga).

Data Awal:
const produk = [
  { id: 'a', nama: 'Laptop', harga: 1200 },
  { id: 'b', nama: 'Mouse', harga: 25 },
  { id: 'c', nama: 'Keyboard', harga: 75 }
];
const stok = [
  { id: 'a', kuantitas: 5 },
  { id: 'b', kuantitas: 10 },
  { id: 'c', kuantitas: 20 }
];

Instruksi:
Gunakan reduce() untuk mengubah array produk menjadi objek tunggal dengan id sebagai kunci.
Gunakan map() pada array stok untuk mengiterasi setiap item stok.
Di dalam map(), akses objek yang telah dibuat pada Langkah 1 untuk menemukan produk yang cocok berdasarkan id.
Tambahkan properti totalHarga (harga * kuantitas) ke dalam setiap objek.
Cetak array yang telah diubah.

Output yang Diharapkan:
[
  { id: 'a', kuantitas: 5, totalHarga: 6000 },
  { id: 'b', kuantitas: 10, totalHarga: 250 },
  { id: 'c', kuantitas: 20, totalHarga: 1500 }
]
*/
const produk4 = [
  { id: "a", nama: "Laptop", harga: 1200 },
  { id: "b", nama: "Mouse", harga: 25 },
  { id: "c", nama: "Keyboard", harga: 75 },
];

const stok4 = [
  { id: "a", kuantitas: 5 },
  { id: "b", kuantitas: 10 },
  { id: "c", kuantitas: 20 },
];

// Langkah 1: Ubah array produk4 menjadi objek untuk akses cepat dengan reduce()
const produkObjek = produk4.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

// Langkah 2: Gabungkan data dan hitung totalHarga dengan map()
const hasilAkhir = stok4.map((itemStok) => {
  const produkTerkait = produkObjek[itemStok.id];
  const totalHarga = produkTerkait.harga * itemStok.kuantitas;

  return {
    ...itemStok,
    totalHarga,
  };
});

console.log(hasilAkhir);

/* 
Soal Latihan #23: Menggabungkan dan Mengolah Data (Lanjutan)
Tujuan: Gabungkan data dari dua array, tambahkan properti stok4 ke array produk, lalu hitung totalNilai (harga * stok) untuk setiap produk.

Data Awal:
const produk = [
{ id: 'p1', nama: 'Baju', harga: 150000 },
{ id: 'p2', nama: 'Celana', harga: 200000 },
{ id: 'p3', nama: 'Sepatu', harga: 350000 }
];

const stok = [
{ id: 'p1', kuantitas: 12 },
{ id: 'p2', kuantitas: 8 },
{ id: 'p3', kuantitas: 15 }
];

Instruksi:

Gunakan reduce() pada array stok untuk mengubahnya menjadi objek tunggal dengan id sebagai kunci.

Gunakan map() pada array produk untuk mengiterasi setiap item produk.

Di dalam map(), gunakan objek dari Langkah 1 untuk menemukan kuantitas yang cocok berdasarkan id.

Tambahkan properti stok dan totalNilai (harga * kuantitas) ke setiap objek produk.

Cetak array yang telah diubah.

Output yang Diharapkan:
[
{ id: 'p1', nama: 'Baju', harga: 150000, stok: 12, totalNilai: 1800000 },
{ id: 'p2', nama: 'Celana', harga: 200000, stok: 8, totalNilai: 1600000 },
{ id: 'p3', nama: 'Sepatu', harga: 350000, stok: 15, totalNilai: 5250000 }
]
*/
const produkPakaian = [
  { id: "p1", nama: "Baju", harga: 150000 },
  { id: "p2", nama: "Celana", harga: 200000 },
  { id: "p3", nama: "Sepatu", harga: 350000 },
];

const stok = [
  { id: "p1", kuantitas: 12 },
  { id: "p2", kuantitas: 8 },
  { id: "p3", kuantitas: 15 },
];

const qty = stok.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
console.log(qty);

const hasilAkhir2 = produkPakaian.map((item) => {
  const kuantitasTerkait = qty[item.id];
  const kuantitas = kuantitasTerkait.kuantitas;
  const totalNilai = item.harga * kuantitas;

  console.log(kuantitasTerkait);
  return {
    ...item,
    stok: kuantitas,
    totalNilai,
  };
});

console.log(hasilAkhir2);
