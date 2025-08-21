// hoisting adalah proses dimana deklarasi fungsi atau variabel var diangkat ke atas sebelum kode dieksekusi

// sehingga kita bisa memanggil fungsi sebelum deklarasinya

// untuk let dan const bisa dihoisting, namun tidak bisa diakses sebelum deklarasinya, jika dipaksa akan menghasilkan error

// function expression juga tidak bisa dihoisting, sehingga harus dideklarasikan sebelum digunakan karena javascript tidak mengizinkan akses sebelum deklarasi

// penggunaan hoisting dimaksudkan untuk memudahkan penulisan kode

greet("Seno");

// 1. Function Declaration
// function nameFunction() { *Code for function* }
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 2. Function Expression
//  function expression adalah ketika fungsi dimasukkan ke dalam variabel
// function expression tidak dihoisting, sehingga harus dideklarasikan sebelum digunakan
const sayGoodbye = function (name) {
  console.log(`Goodbye! ${name}`);
};
sayGoodbye("Satria");

// 3. Arrow Function
// arrow function adalah sintaksis singkat untuk menulis fungsi
// Arrow function juga tidak dihoisting, sehingga harus dideklarasikan sebelum digunakan
// property unik dari arrow function adalah tidak memiliki this context, sehingga tidak bisa digunakan sebagai constructor.
// format deklarasi arrow function adalah:
// (parameter) => { *Code for function* }
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(10, 20));

// short form arrow function
// const namaFunction = (parameter1, parameter2) => codeSingkat;
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(13, 17));
