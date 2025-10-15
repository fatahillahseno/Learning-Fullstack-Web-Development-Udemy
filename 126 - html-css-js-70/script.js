let jsonCar = `{
  "brand": "BMW",
  "model": "7 Series",
  "color":"Blue",
  "make": 2024,
  "available": true
}`;
console.log("jsonCar");
console.log(typeof jsonCar);
console.log(jsonCar);

// jika ingin menggunakan data dari server(file json)
// kita harus convert terlebih dahulu ke javascript object
// menggunakan JSON.parse()
const car = JSON.parse(jsonCar);
console.log("\ncar");
console.log(typeof car);
console.log(car);

// ubah kembali Javascript Object menjadi JSON kembali
// menggunakan JSON.stringify()
const newJson = JSON.stringify(car);
console.log("\nnewJson");
console.log(typeof newJson);
console.log(newJson);
