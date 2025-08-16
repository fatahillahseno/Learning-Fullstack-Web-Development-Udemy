let car = {
  brand: "BMW",
  model: "7 Series",
  color: "White",
  make: "2024",
};

console.log("Original Car Object:", car);

// membuat duplikasi objek car

let carCopy = car;
carCopy.color = "Red";
console.log("Modified carCopy Object:", carCopy);
console.log("Original Car Object:", car);
//original object terpengaruh oleh property yang diubah pada object yg diduplikasi dari original
// perubahan ini disebut perubahan dangkal atau shallow copy
// perubahan yang mengubah property object yang sama walau pada variabel yang berbeda

// solusi untuk mengatasinya adalah dengan penyalinan mendalam
// deep copy lv 1, yaitu menyalin object original dengan membuat object baru dan menyalin segala property yang ada di original
// pengunaan deep copy dengan cara object literal syntax
// dan menambahkan spread operator ( ... )
// tiga titik/dot sebelum variabel object original
// contoh {...originalObject}

let newCar = { ...car };
console.log("New Car Object:", newCar);
newCar.color = "Blue";
console.log("Modified New Car Object:", newCar);
console.log("Original Car Object:", car);
