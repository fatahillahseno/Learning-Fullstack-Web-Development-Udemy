let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: "2024",
  owner: {
    name: "John",
    age: 45,
  },
};

/* console.log("Name of the owner:", car.owner.name);
let newCar = {...car}; // nested object yang baru dengan shallow copy
newCar.owner.name = "Mark"; // change the name of the owner
newCar.color = "red";
console.log(
  "Name of the owner:",
  car.owner.name
); /* name pada object owner yang ada di dalam object car juga ikut terpengaruh */
// console.log("newCar", newCar);
// console.log("oldCar", car);

// jadi nested object yang ada pada objek tidak dapat berubah
// terdapat cara native dari javascript langsung
// menggunakan structured clone
// namun cara ini kemungkinan tidak bisa bekerja di beberapa browser

console.log("Name of the owner oldCar:", car.owner.name);
let newCar = structuredClone(car); // nested object yang baru dengan deep copy
newCar.owner.name = "Mark"; // change the name of the owner
newCar.color = "red";
console.log(
  'Name of the owner of oldCar after be modified ("Mark")  in newCar not be affected ("John"):',
  car.owner.name
); /* name pada object owner yang ada di dalam object car juga ikut terpengaruh */
console.log("newCar", newCar);
console.log("oldCar", car);
console.log(
  `Car's Owner : ${car.owner.name}
New Car's Owner: ${newCar.owner.name}`
);
