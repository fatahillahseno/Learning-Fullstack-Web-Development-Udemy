let numbers = [1, 2, 3];
let moreNumbers = [4, 5, 6];

// spread operator
// mengabungkan semua array dengan ... dan koma
// array yang dicopy/digabungkan akan memakai memori baru
// tidak sama dengan memori yang dipakai oleh array yang direferensikan

let combined = [...numbers, ...moreNumbers];
console.log(combined);
combined[0] = 999;
console.log(combined);
console.log(numbers);

let fruits = ["Apple", "Banana", "Orange"];
let moreFruits = ["Grapes", ...fruits, "Pineapple"];
console.log(moreFruits);

// berbeda jika dengan nested array
let nestedArray = [
  [1, 2],
  [3, 4],
];

let copiedArray = [...nestedArray]; //hanya shallow copy yang terjadi

console.log(`Original Nested Array: ${nestedArray}`);

copiedArray[1][1] = 8;
console.log(
  `Dilakukan pengubahan row 1 col 1\npada original nested array\ncopiedArray[1][1] = 8;`
);
console.log(
  `Shallow Copy, Copied Array: ${copiedArray}\nKetika 4 diganti ke 8 di copied array`
);

console.log(
  `Otomatis di original nested Array juga berubah\nOriginal Nested Array: ${nestedArray}`
);

// lalu bagaimana kita bisa melakukan deep copy
// kita bisa menggunakan loop
// selalu pikirkan terlebih dahulu ketika melakukan deep copying

let deepCopyArray = [];
for (array of nestedArray) {
  deepCopyArray.push([...array]);
}
console.log(`Cara untuk melakukan deep copy
\n// inisialisasi array kosong
let deepCopyArray = [];\n
// assign nilai yang ada di orginal
for (array of nestedArray) {  
deepCopyArray.push([...array]);
}`);

console.log(`\nOriginal Nested Array: ${nestedArray}`);
console.log(`Deep Copy Array : ${deepCopyArray}`);
deepCopyArray.push([65, 77]);
console.log(
  `\nKetika kita membuat deep copy\nditambahkan atau diubah tidak akan berubah, deepCopyArray.push([65, 77]);\n\nDeep Copy Array : ${deepCopyArray}`
);
console.log(`Original Nested Array: ${nestedArray}`);
