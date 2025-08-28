function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3, 4];

// penggunaan spread operator pada function
// element pada array akan dimasukkan sebagai parameter di dalam function sum()
// element hanya akan dimasukkan sesuai banyak kebutuhan dalam parameter
// bisa terlihat di console bahwa element yang digunakan hanya 1,2, dan 3. element value bernilai 4 karena parameter sum tidak membutuhkannya
let result = sum(...numbers);
console.log(result);

// ***************************************************
// menggabungkan multiple aray
// dan dimasukkan sebagai parameter
function multiply(a, b, c, d) {
  return a * b * c * d;
}

const num1 = [2, 3];
const num2 = [4, 5];

let resultMultiply = multiply(...num1, ...num2);
console.log(`array yang digabung:`, ...num1, ...num2);
console.log(resultMultiply);
// ***************************************************
