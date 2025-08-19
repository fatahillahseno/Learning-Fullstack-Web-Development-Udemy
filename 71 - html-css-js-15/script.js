// swtich statemens adalah sebuah pernyataan yang digunakan untuk memilih salah satu dari beberapa blok kode untuk dieksekusi berdasarkan nilai dari sebuah ekspresi.
// condition di dalam switch disebut cases
// jika tidak ada case yang cocok, maka akan mengeksekusi default
// case untuk menandai blok kode yang akan dieksekusi jika nilai dari ekspresi cocok dengan nilai case tersebut
// default adalah blok kode yang akan dieksekusi jika tidak ada case yang cocok
// break digunakan untuk menghentikan eksekusi dari switch statement

let operator = "%"; // +, -, *, /
let num1 = 10;
let num2 = 5;
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log("Hasil Penjumlahan:", result);
    break;
  case "-":
    result = num1 - num2;
    console.log("Hasil Pengurangan:", result);
    break;
  case "*":
    result = num1 * num2;
    console.log("Hasil Perkalian:", result);
    break;
  case "/":
    result = num1 / num2;
    console.log("Hasil Pembagian:", result);
    break;
  default:
    console.log("Operator tidak dikenali");
}

// kapan saat harus menggunakan switch statement?
// switch statement digunakan ketika kita memiliki beberapa kondisi yang harus diperiksa berdasarkan nilai dari sebuah variabel atau ekspresi.
// switch statement lebih mudah dibaca dan dipahami dibandingkan dengan if-else statement ketika ada banyak kondisi yang harus diperiksa.

// kapan saat harus menggunakan if-else statement?
// if-else statement digunakan ketika kita memiliki kondisi yang lebih kompleks atau ketika kita perlu memeriksa kondisi yang tidak hanya berdasarkan nilai dari sebuah variabel atau ekspresi.
// if-else statement juga lebih fleksibel karena kita dapat menggunakan operator logika dan perbandingan untuk memeriksa kondisi yang lebih kompleks.
