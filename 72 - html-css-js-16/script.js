// for (var iniliasasi index; kondisi; inkrementasi)
let candies = 10;
for (i = 1; i <= candies; i++) {
  console.log(`Sticker is applied to candy #${i}`);
}

console.log("\n");
// --------------------------------------------------------

let fruits = ["Apples", "Banana", "Orange", "Mango"];
// length adalah properti array untuk mengembalikan jumlah elemen yang ada di dalam array
// fruits.length akan mengembalikan 4
for (let fruit = 0; fruit <= fruits.length - 1; fruit++) {
  //  index dimulai dari 0, jadi untuk mengakses elemen terakhir, kita harus mengurangi 1 dari panjang array
  console.log(fruits[fruit]);
}

console.log("\n");
// --------------------------------------------------------

// nested array loop
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  // console.log(matrix[row]);
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`Matrix value Row ${row + 1} col ${matrix[row][col]}`);
  }
}

let totalSum = 0;
let numberDescriptions = [];
console.log("\n");
for (let i = 1; i <= 10; i++) {
  console.log(
    `Total Sum of ${i}, i=${i}: totalSum  + i  = ${totalSum} + ${i} = ${
      totalSum + i
    }`
  );
  totalSum += i;
  numberDescriptions.push(`Array[${i - 1}]: ${i}`);
}

// console.log(numberDescriptions);
