// constructor adalah jenis fungsi yang istimewa, dimana membantu kita (developer) membuat banyak instance yang sejenis

// Sebuah constructor di JavaScript adalah fungsi khusus yang digunakan untuk membuat dan menginisialisasi objek. Mirip seperti cetak biru atau blueprint untuk membuat rumah, sebuah constructor mendefinisikan struktur awal dan properti yang akan dimiliki oleh objek baru.

// Instance adalah sebuah objek individual yang dibuat dari sebuah constructor. Menggunakan analogi cetak biru tadi, jika constructor adalah cetak biru rumah, maka instance adalah rumah-rumah yang sebenarnya dibangun dari cetak biru tersebut. Setiap rumah (instance) memiliki karakteristik yang sama seperti yang didefinisikan di cetak biru (constructor) seperti jumlah kamar atau luasnya, namun bisa memiliki detail yang berbeda, seperti warna catnya.

let car = {
  brand: "BMW",
  model: "7 Series",
};

let carOther = {
  brand: "Audi",
  model: "S Series",
};

// akan terjadi banyak pembuatan objek yang terlalu banyak, dan jika ada lebih dari 1 properti akan membuat baris kode tidak efektif

// maka dari itu kita bisa menggunakan constructor function
// semacam blueprint bagaimana objek akan terlihat

// format constructor function:
// 1. nama function dimulai dari huruf kapital, misal Car
// 2. request parameter sesuai tujuan constructur ini, misal constructor car ini, memiliki beberapa parameter yaitu brand, model, year, etc. Maka developer yang membuat objek dari constructor ini harus memasukkan parameter tersebut ketika memanggil constructor ini.
// 3. penggunaan this context, misal
// this.brand = brand;
// properti brand pada constructor ini isikan dengan nilai brand yang dimasukkan
// 4. Penggunaan constructor harus didahului keyword new ketika dipanggil pada sebuah object baru
// 5. Bisa diberikan default value pada parameter ketika construction function dibuat

function Car(brand, model, year, color) {
  this.brand = brand; //properti brand dari function/object Car diisi dengan nilai request parameter brand yang dimasukkan
  this.model = model;
  this.year = year;
  this.color = color;
}

// membuat objek dari constructor Car()
let car1 = new Car("BMW", "7 Series", 2024, "White");
let car2 = new Car("Audi", "A6", 2021, "Black");

console.log(car1);
console.log(car2);

// Date juga termasuk constructor function
// karena membuatkan object date

// --------------------------------------------------------
console.log(`\n\n`);
// function Person(firstName, lastName, age = 1) {
function Person(firstName, lastName, age, isMember = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMember = isMember;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// let person = new Person("Barbatoss", "Eigo");
// nilai age akan berisikan 1, sesuai default value pada constructor di baris ke 48

let person = new Person("Barbatoss", "Eigo", 17); //isMember akan bernilai sesuai default value (false)
let person2 = new Person("Kagami", "Kuro", 27, true); //isMember akan bernilai true

console.log(person); //akan mencetak keseluruhan object dari person
console.log(person.getFullName()); // menggunakan function yang ada di dalam object

console.log(person2); //akan mencetak keseluruhan object dari person

// Tambahan
// ada built-in constructor yang sudah kita tau
// 1. Object()
// 2. Array()
// 3. Map()
// 4. Set()
// 5. Date()
// 6. RegExp()
// 7. Function()
