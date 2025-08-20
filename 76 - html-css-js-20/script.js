//  function adalah sebuah blok kode yang dapat digunakan kembali
//  function dapat menerima parameter dan mengembalikan nilai
//  function dapat didefinisikan dengan kata kunci 'function' diikuti dengan nama function, tanda kurung, dan blok kode
//  contoh: function addNumbers(num1, num2) { return num1 + num2; }
// return adalah kata kunci yang digunakan untuk mengembalikan nilai dari function

/* function adalah sebuah kumpulan kode yang bisa kita ibaratkan sebagai sebuah kotak
tentunya di dalam kotak tersebut ada kode  yang bisa kita jalankan
untuk menjalankan kode  tersebut, kita membutuhkan sebuah bahan bakar
bahan bakar tersebut itulah parameter atau variabel yang kita berikan ke dalam function
kode tersebut akan melakukan operasi dengan parameter tersebut
sehingga mengembalikan nilai untuk sebuah kotak yang dibuat
kotak tersebut bisa kita panggil kapan saja kita mau */

function addNumbers(num1, num2) {
  return num1 + num2; /* mengembalikan nilai pertambahan */
}

// menyimpan hasil dari function ke dalam variabel
let result = addNumbers(5, 10);

console.log(`Penjumlahan Tersimpan Variabel: ${result}`); // output: 15

// langsung memanggil function tanpa menyimpan hasilnya
console.log(`Penjumlahan Langsung: ${addNumbers(13, 7)}`);
