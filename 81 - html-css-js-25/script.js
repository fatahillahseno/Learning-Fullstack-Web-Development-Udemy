// primitive data types
let text = "seno";
let number = 13;

// proses autoboxing adalah proses otomatis JavaScript mengubah tipe data primitif menjadi objek
// sehingga kita bisa menggunakan metode yang ada pada objek tersebut
// contoh autoboxing pada string
// kita bisa menggunakan metode pada string seperti toUpperCase

text.toUpperCase; // akan mengubah text menjadi huruf kapital
number.toString; // akan mengubah number menjadi string
// ---------------------------------------------------------

// contoh lain
let example = "Javascript is awesome!";

console.log(example); // akan mencetak string "Javascript is awesome!"

// menghitung berapa banyak karakter dalam sebuah string
console.log(example.length);

console.log(example.charAt(3)); // index dimulai dari 0, jadi index 3 adalah karakter keempat
// logic dari code ini adalah mengambil karakter keempat dari string

console.log(example.split(" ")[2]); // "awesome!"
// logic dari code ini adalah memecah string menjadi array berdasarkan spasi, output
/* 
[
index ke-0 : "Javascript", 
index ke-1 : "is", 
index ke-2 : "awesome!"
] 
*/
// lalu mengambil elemen ketiga (index 2) dari array tersebut

console.log(example.toUpperCase());
// logic dari code ini adalah mengubah semua huruf dalam string menjadi huruf kapital

console.log(example.toLowerCase());
// logic dari code ini adalah mengubah semua huruf dalam string menjadi huruf kecil
