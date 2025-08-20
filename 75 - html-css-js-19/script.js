// jika ingin menggunakan loop yang tidak bergantung pada tipe data, kita bisa gunakan while loop

let count = 0;

while (count < 5) {
  console.log(`Count is ${count}`);
  count++;
}

console.log("\n");

// multi conditional loop dengan while
let number = 0;
while (number < 1 || number > 10) {
  console.log(`Number is ${number}`);
  number++;
}

console.log("\n");

// do while loop, loop yang akan dieksekusi minimal sekali
let i = 6;

do {
  console.log(`Do while: ${i}`);
  i++;
} while (i < 11);
