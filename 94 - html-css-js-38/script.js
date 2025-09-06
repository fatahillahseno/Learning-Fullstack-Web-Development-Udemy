// method reduce()
// menghasilkan satu value saja dari array

// format syntax
// array.reduce(function(), initial value)
// array.reduce
// (
// (accumulator, currentValue, index, array)=>{},
// intialValue
// )

const numbers = [5, 10, 15, 20, 25, 30];
const sum = numbers.reduce((accumulator, currentValue) => {
  return currentValue + accumulator;
  /*  
    iterasi 1
    currentValue = 5, accumulator = 0
    accumulator = accumulator + currentValue;
    accumulator = 0 + 5; 
    accumulator = 5; 
    
    iterasi 2
    currentValue = 10, accumulator = 5
    accumulator = accumulator + currentValue;
    accumulator = 5 + 10; 
    accumulator = 15;
    
    iterasi 3
    currentValue = 15, accumulator = 15
    accumulator = accumulator + currentValue;
    accumulator = 15 + 15; 
    accumulator = 30;

    iterasi 4
    currentValue = 20, accumulator = 30 
    accumulator = accumulator + currentValue;
    accumulator = 30 +20 ; 
    accumulator = 50;

    iterasi 5
    currentValue = 25, accumulator = 50
    accumulator = accumulator + currentValue;
    accumulator = 50 + 25 ; 
    accumulator = 75;

    iterasi 6
    currentValue = 30, accumulator =75 
    accumulator = accumulator + currentValue;
    accumulator = 75+ 30; 
    accumulator = 105;
  */
}, 0);
// 0 adalah nilai awal
console.log(sum);
// ===============================================

// hasil akhir yang diinginkan
/* 
  {
    fruit:15,
    vegetable:8,
  }

*/
const items = [
  { name: "Apple", type: "fruit", quantity: 10 },
  { name: "Banana", type: "fruit", quantity: 5 },
  { name: "Carrot", type: "vegetable", quantity: 8 },
];

// cek apa isi item.type
// output: ['fruit', 'fruit', 'vegetable']
// const item = items.map((item) => item.type);
// console.log(item);

const inventory = items.reduce((accumulator, item) => {
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  return accumulator;
}, {});
/* 
  mekanisme code di atas
  1. Buat variabel baru sebagai variabel baru setelah melakukan method reduce()
  2. Menggunakan method reduce() pada array items yang memiliki parameter fungsi callback dan initial value untuk accumulator.
  3. Dalam fungsi callback, terdapat parameter accumulator dan item. Dimana accumulator adalah wadah hasil akhir reduce nanti, item adalah variabel untuk melakukan iterasi pada array items nanti.
  4. Dalam blok fungsi callback, 
  accumulator[item.type] = (accumulator[item.type] || 0) + item.quantity;
  itu menandakan apakah ada properti item.type pada object accumulator atau tidak. 
    a. Jika tidak ada maka buat properti sesuai item.type lalu masukkan value nya dengan mengecek terlebih dahulu apakah sudah ada value dlu pada accumulator[item.type] jika ada tampilkan lalu tambahkan dengan item.quantity.
    b. jika tidak ada maka jadikan value properti tersebut menjadi 0, lalu tambahkan dengan item.quantity
  5. Setelah itu kembalikan nilai accumulator sebagai nilai dari function
  Catatan:
  pada kasus di atas, item.type akan mengeluarkan hasil ['fruit', 'fruit', 'vegetable']
  jadi logicnya akan seperti ini
  cek apakah accumulator['fruit'] ada atau tidak, jika tidak maka buat propertinya lalu tambahkan value yang ada pada array items, jika ada ambil value nya tambahkan value yang juga memiliki item.type yang sama
*/
console.log(inventory);
