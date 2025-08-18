let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); /* extract seluruh data pada array */
console.log(fruits[0]); /* extract data indeks ke 0 pada array */
console.log(fruits[1]); /* extract data indeks ke 1 pada array */
console.log(fruits[2]); /* extract data indeks ke 2 pada array */
console.log(fruits[3]); /* extract data indeks ke 3 pada array */

let numbers = [10, 20, 30, 40, 50];
console.log("\n", numbers);
console.log(numbers[1]); /* extract data indeks ke 1 pada array */

let mixedArray = [
  "Hello",
  26,
  true,
  null,
  { name: "Seno", job: "Software Engineer" },
  [13, 7, 8],
];
console.log("\n", mixedArray);
console.log(
  mixedArray[4]
); /* extract data nested object, indeks ke 4 pada array */
console.log(
  mixedArray[4]["name"]
); /* extract data name pada nested object menggunkan square bracket*/
console.log(
  mixedArray[4].name
); /* extract data name pada nested object menggunakan dot*/
console.log(mixedArray[5]);
console.log(mixedArray[5][1]);

// Cara Alternatif Membuat Array
// Constructor Function
let score = new Array(75, 89, 64, 30);
// score[0] = 75;
// score[1] = 89;
// score[2] = 64;
// score[3] = 30;
console.log(score);

// menambahkan value pada array
// variabelArray.push
score.push(88);
console.log(score);

// array juga termasuk tipe data yang mutable
// let newFruits = fruits;
/* cara yang salah untuk menyalin array karena masih mengambil memori yang sama pada array yang direferensikan */
let newFruits = [...fruits]; /* cara yang benar menggunakan spread operator */

// cara menambahkan value pada last array slot
fruits.push("Grapes");
// cara menghapus last value pada array
fruits.pop(); //menghapus value "Grapes"
fruits.pop(); //menghapus value "Mango"

console.log(fruits);
console.log(newFruits);
