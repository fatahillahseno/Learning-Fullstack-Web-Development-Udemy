// Destructuring pada Object
const car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024,
};

// Menggunakan nama properti yang sama
let { brand, model, year } = car;
console.log(brand); // Output: BMW
console.log(model); // Output: 7 Series
console.log(year); // Output: 2024
brand = "Audi";
console.log(brand);
console.log(car);

// Mengganti nama variabel
const { brand: carBrand, model: carModel, color: carColor } = car;
console.log(carBrand); // Output: BMW
console.log(carModel); // Output: 7 Series
console.log(carColor); // Output: White

// Menggunakan Nilai Default
const car1 = {
  brand: "BMW",
  model: "7 Series",
  // Properti 'color' dan 'year' tidak ada di objek ini
  // color: "Red"
  // akan bernilai red, karena nilai default yang kita definisikan akan diabaikan
};

// Menggunakan nilai default 'Black' karena 'color' tidak ada di objek
// Menggunakan nilai default 2024 karena 'year' tidak ada di objek
const { color = "Black", year: carYear = 2024 } = car1;

console.log(color); // Output: Black
console.log(carYear); // Output: 2024

// destructuring nested object
const carWithOwner = {
  brand: "BMW",
  model: "7 Series",
  color: "Red",
  owner: {
    name: "Seno",
    age: 27,
  },
};

const {
  owner: { name: carOwner, age },
} = carWithOwner;

console.log(carOwner);

// rest parameter pada object
// mengambil semua nilai pada object
const { owner, ...carDetails } = carWithOwner;

console.log(owner);
console.log(carDetails);

owner.name = "Satria";
console.log(owner);
console.log(carWithOwner);
// js tidak membuat object baru, hanya mereferensikan object yang awal
