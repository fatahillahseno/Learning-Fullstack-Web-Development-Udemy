// jika sebuah function berada di dalam sebuah object
// maka function tersebut disebut method (hanya penyebutan saja yang berbeda, kegunaannya tetap sama dengan function biasa)
// namun jika menggunakan value yang ada dalam object
// maka kita harus menggunakan this untuk mengaksesnya
// contoh: this.brand, this.model, this.year
// this mengacu pada keseluruhan object itu sendiri
// jika kita ingin mengaksesnya dari luar object, kita harus menggunakan nama objectnya
// contoh: car.brand, car.model, car.year

let car = {
  brand: "BMW",
  model: "7 Series",
  year: 2024,

  describeCar: function () {
    return `This car is ${this.year} ${this.brand} ${this.model}  `;
  },
};

console.log(car.describeCar());

// catatan:
//  jangan gunakan arrow function untuk method dalam object
//  karena arrow function tidak memiliki konteks this yang benar

// shorthand untuk mendeklarasikan function dalam object
let calculator = {
  num1: 3,
  num2: 4,

  // arrow function method
  /* add: () => {
    console.log(this);
  }, */
  //jangan gunakan arrow akan mereferensikan ke global scope

  // normal method
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },
};

console.log(calculator.add(10, 5)); // 5)
console.log(calculator.subtract(10, 5)); // 5)
