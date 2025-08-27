// default parameter pada function
// dengan menambahkan equal = dan value yang diinginkan
// misal parameternya. age = 27
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

// Tidak mengisi parameter, maka yang digunakan adalah nilai default "Guest"
greet(); // Output: Hello, Guest

// Mengisi parameter dengan "Seno", maka nilai "Guest" akan ditimpa
greet("Seno"); // Output: Hello, Seno

// cuma salah satu atau lebih parameter yang ada
function orderCoffee(size = "medium", type = "black") {
  console.log(`You ordered a ${size} ${type} coffee`);
}

// Tidak mengisi parameter apa pun, maka akan menggunakan kedua nilai default
orderCoffee(); // Output: You ordered a medium black coffee

// Hanya mengisi parameter pertama, parameter kedua akan tetap menggunakan nilai default
orderCoffee("small"); // Output: You ordered a small black coffee

// Mengisi semua parameter, maka semua nilai default akan ditimpa
orderCoffee("small", "latte"); // Output: You ordered a small latte coffee
