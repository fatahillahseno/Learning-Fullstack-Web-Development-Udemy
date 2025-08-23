let num = 3.14159;

// jika kita ingin membuat angka menjadi sekian desimal
// berdasarkan angka di belakang desimal yang kita inginkan
console.log(num.toFixed(2)); // output: 3.14, ini akan membulatkan sebanyak 2 angka di belakang koma

// jika kita ingin membulatkan angka ke atas
// kita bisa menggunakan toFixed atau Math.ceil
console.log(Math.ceil(num)); // output: 4

// jika kita ingin mengubah angka menjadi string
let stringNum = num.toString();
console.log(`num = ${num}, Tipe data variabel num adalah ${typeof num}`);
console.log(
  `stringNum = ${stringNum}, Tipe data variabel stringNum adalah ${typeof stringNum}`
);

// jika kita ingin mengubah angka menjadi ekponensial number
// ekponensial number adalah representasi angka yang menggunakan pangkat 10
// angka yang ditampilkan adalah angka di belakang koma
let large = 123456;
console.log(large.toExponential(2)); // output: 1.23e+5, 2 angka di belakang koma
