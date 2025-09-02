// map method
// syntax map()
// map(function(currentValue, index, array){})
const numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((number) => number * number);
// squares akan menjadi array baru yang berisikan hasil dari perkalian value array numbers

console.log(numbers); //output: [1, 2, 3,  4,  5]
console.log(squares); //output: [1, 4, 9, 16, 25]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];

// shorthand arrow function untuk object => ( {} )
const usersWithBirthYears = users.map((user) => ({
  ...user,
  birthYear: new Date().getFullYear() - user.age,
}));

console.log(usersWithBirthYears);
