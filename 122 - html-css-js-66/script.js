function myDisplayer(value) {
  document.getElementById("demo").textContent = value;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

/* function myCalculator(num1, num2) {
  myDisplayer(num1 + num2); //ini nested function, sangat tidak disarankan
} */
// masalah yang akan terjadi
// 1. fungsi tersebut akan selalu menampilkan selalu ke displayer,
//    karena tidak mengembalikan nilainya saja, namun juga selalu mengganti nilai displayer
// 2. akan sulit didebug jika dalam file besar

// mencari cara fungsi myCalculator bisa melakukan merubah tampilan dengan kemungkinan ya atau tidak
// caranya dengan menggunakan callback function pada parameter myCalculator
function myCalculator(num1, num2, callback) {
  let result = num1 + num2;
  if (callback) {
    callback(result);
  }
  return result;
}
myCalculator(15, 35, myDisplayer);
//ada callback function, penjumlahan akan tampil di page

console.log(myCalculator(8, 9));
//tidak ada callback function, hanya dicetak di dalam console

// callback function bisa digunakan untuk menentukan sebuah keputusan
function filterNumbers(numbers, filter) {
  const numArray = [];
  for (let number of numbers) {
    if (filter(number)) {
      numArray.push(number);
    }
  }
  return numArray;
}

function filterPositives(number) {
  return number >= 0;
}
function filterNegatives(number) {
  return number < 0;
}

const numbers = [23, 4, 1, 45, -12, 34, -34, 2, -54];

console.log(filterNumbers(numbers, filterPositives));
console.log(filterNumbers(numbers, filterNegatives));
