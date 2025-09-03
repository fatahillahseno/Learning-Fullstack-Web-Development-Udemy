// method filter()
// method pada array yang digunakan untuk membuat array baru dengan menyaring value yang diinginkan
// akan mengembalikan nilai true atau false
// bernilai true jika memenuhi kondisi dan akan memasuki array baru
// bernilai false jika tidak memenuhi kondisi dan tidak akan masuk ke array baru

// format syntax
// array.filter((currentValue, index, array){})
const numbers = [5, 10, 15, 20, 25, 30];
const greaterThan10 = numbers.filter((number) => number > 10);
console.log(greaterThan10);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];
const olderThan25 = users.filter((user) => user.age > 25);
console.log(olderThan25);

const mixedNumbers = [3, 23, 4, 124, 45, 23, 32, 45, 66, 76, 98];
const evenNUmbers = mixedNumbers.filter((mixed) => mixed % 2 === 0);
console.log(evenNUmbers);
