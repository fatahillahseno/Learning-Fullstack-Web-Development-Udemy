let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

/* 
for loop untuk mencetak setiap elemen dalam array
kita bisa menggunakan for(let index in arrayVariabel){} 
ini mengatakan tolong lakukan perulangan untuk setiap index dalam arrayVariabel

pada format ini tidak perlu menuliskan kondisi seperti index < arrayVariabel.length
tidak perlu menuliskan ikrementasi seperti index++
*/

for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

// ------------------------------------------------------------

// for loop untuk object
// kita bisa menggunakan for(let key in objectVariabel){}
// ini mengatakan tolong lakukan perulangan untuk setiap key dalam objectVariabel

let car = {
  brand: "BMW",
  model: "7 Series",
  color: "Black",
  year: 2024,
};

console.log("\nCar Details:");
for (let key in car) {
  console.log(`key: ${key}, value: ${car[key]}`);
}
