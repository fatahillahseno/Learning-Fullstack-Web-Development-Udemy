// variabel yang berisikan object

// cara paling sederhana membuat suatu object
// menggunakan literal syntax
let car = {
  // format property -> key: value
  // key bisa diisi string ataupun number, lagipula semua key akan di-convert menjadi string
  brand: "BMW",
  model: "7 Series",
  color: "white",
  make: 2024,
  "car owner": "John", //example that do not do this
};

console.log(car);
console.log("Brand:", car.brand);
console.log("Model:", car.model);
console.log("Color:", car.color);
console.log("Make:", car.make);
console.log("Car Owner:", car["car owner"]);

/* -------------------------------------------------------- */

// cara lainnya menggunakan constructor function
let audi = new Object();
audi.brand = "Audi";
audi.model = "A7";
audi.color = "Black";
audi.make = "2024";
audi["car owner"] = "Mark";
console.log(audi);
