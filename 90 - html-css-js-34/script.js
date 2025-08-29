const fruits = ["Apple", "Banana", "Orange"];

// cara konvesional mengakses elemem pada array
// let firstValue = fruits[0];
// let secondValue = fruits[1];

// shorthand syntax
// destructuring
// dengan inisialisasi sebuah array, diiskan nama variabel sesuai value elemen yang ada pada array
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

const numbers = [1, 2, 3, 4, 5, 6];

// bagaimana jika  hanya ingin mengambil value pertama dan ketiga
// caranya dengan memberikan mengabaikan saja (tidak usah diberi nama variabel) lalu diikuti koma
// kita bisa juga gunakan rest parameter untuk mengambil sisa value yang lainnya menggunakan spread operator
let [firstNumber, , thirdNumber, ...restNumbers] = numbers;

console.log(firstNumber);
console.log(thirdNumber);
console.log(restNumbers);

// destructuring nested array
const nestedArray = [71, [72, 73], 74];
const [first, [second, third], fourth] = nestedArray;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
