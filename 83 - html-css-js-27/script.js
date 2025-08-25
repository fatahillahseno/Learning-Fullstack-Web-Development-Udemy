let fruits = ["Apple", "Banana", "Guava", "Grapes"];

// method pada array
// diantaranya adalah push, pop, shift, unshift, splice, slice, forEach, map, filter, reduce, find, findIndex, includes, join, toString

// property pada array
// diantaranya adalah length

// push()
// menambahkan elemen baru di akhir array
fruits.push("Orange");
console.log(
  `After push("Orange") : ${fruits}\n// menambahkan elemen baru di akhir array`
); // ["Apple", "Banana", "Orange"]

// pop()
// menghapus elemen terakhir dari array
fruits.pop();
console.log(`After pop() : ${fruits}\n// menghapus elemen terakhir dari array`); // ["Apple", "Banana", "Orange"]

// unshift()
// menambahkan elemen baru di awal array
fruits.unshift("Mango");
console.log(
  `After unshift("Mango") : ${fruits}\n// menambahkan elemen baru di awal array`
); // ["Apple", "Banana", "Orange"]

// shift()
// menghapus elemen pertama dari array
fruits.shift();
console.log(
  `After shift() : ${fruits}\n// menghapus elemen pertama dari array`
); // ["Apple", "Banana", "Orange"]

// indexOf()
// mencari index dari sebuah elemen dalam array
console.log(
  `indexOf("Banana")\nIndex of "Banana" : ${fruits.indexOf(
    "Banana"
  )}\n// mencari index dari sebuah elemen dalam array`
); // index dari Banana adalah 1

// includes()
// memeriksa apakah di dalam array ada elemen tersebut atau tidak
console.log(
  `includes("Apple")\nApakah ada Apple di dalam array? : ${fruits.includes(
    "Apple"
  )}\n// mencari elemen tersebut ada di dalam array atau tidak`
); // Apple ada di dalam array: true
