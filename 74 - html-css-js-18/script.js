let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
let userData = { name: "John", age: 30 };
// perbedaan for...in dan for...of
// for...in digunakan untuk mengiterasi properti (key) dari objek
// for...in digunakan untuk mengiterasi indeks dari array

// for...of digunakan untuk mengiterasi nilai dari iterable seperti array, string, atau objek yang memiliki iterator
// jadi langsung isi dari variabel tersebut, tidak bisa digunakan untuk objek

// cara memeriksa apakah sebuah variabel adalah iterable
// akan mengembalikan fungsi iterator jika iterable, bukan undefined

// array iterable
console.log(fruits[Symbol.iterator]); //ƒ values(){[native code]}

// object tidak iterable
console.log(userData[Symbol.iterator]); //undefined

// string juga iterable
console.log("Seno"[Symbol.iterator]); //ƒ [Symbol.iterator]() { [native code] }

console.log("\nPenggunaan For ... of");
// penggunan for..of
for (let index of fruits) {
  console.log(index);
}

console.log("\n");

const word = "Javascript";
for (let char of word) {
  console.log(char.toUpperCase());
}
/* toUpperCase() untuk membuat huruf menjadi besar */
