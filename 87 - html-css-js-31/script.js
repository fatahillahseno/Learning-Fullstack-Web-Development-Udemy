let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  year: 2024,
};

//menyalin semua properti(key dan value)
// object baru hanya menyalin tidak mereferensikan object asal
// jika ingin mengubah suatu value pada objek, tambahkan saja setelah penggunaan spread operator diikuti tanda koma
// {...objectAwal, key: valueYangBerubah}
let updatedCar = { ...car, color: "Black" };
console.log(car);
console.log(updatedCar);

// `````````````````````````````````````````````````````````

let owner = {
  name: "John",
  age: 30,
};

// kombinasi dua object menjadi satu object baru
// tulis spread operator diikuti semua object, pisahkan dengan tanda koma
// {...object1, ...object2}
// object baru dengn data owner dan car
let carWithOwner = { ...car, ...owner };
console.log(carWithOwner);
// test for in di objek
// for (key in carWithOwner) {
//   console.log(`${key} : ${carWithOwner[key]}`);
// }

// membuat object lagi menjadi nested object
// cukup dengan spread operator object asli diikuti dengan koma
// lalu buat sebuah key baru, pada nilai value isikan dengan spread operator object yang ingin dijadikan nested object
let nestedOwner = { ...car, owner: { ...owner } };
console.log(nestedOwner);

// ada properti yang diupdate namun berada di object baru
// kita ingin mengupdate properti di object lama
// caranya masih sama masukan spread operator diikut object yang disalan, pisahkan kedua tersebut dengan koma
// object yang terakhir ditambahkan akan menimpa properti yang sama pada object baru yang akan dibuat
let updateCar = {
  year: 2025,
  color: "red",
};
let finalCar = { ...car, ...updateCar };

console.log(finalCar);
