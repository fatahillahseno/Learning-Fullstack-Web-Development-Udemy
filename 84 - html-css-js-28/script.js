// Math Object

// property PI
// Math.PI
// memberikan nilai konstanta rasio keliling lingkaran terhadap diameternya (digunakan dalam perhitungan yang berhubungan dengan lingkaran).
console.log(`Propert Math.PI\nKonstanta Pi\nMath.PI : ${Math.PI}`);

// absolute method
// Math.abs()
// membuat nilai yang diberikan di dalam method ini menjadi positif, misal -8756 akan menjadi 8756.
console.log(
  `Method Math.abs, nilai absolute dari -8756\nMath.abs(-8756) : ${Math.abs(
    -8756
  )}`
);

// floor method
// Math.floor()
// membulatkan angka ke bawah ke bilangan bulat terdekat (nilai terendah), tidak peduli berapa angka di belakang koma.
console.log(
  `Method Math.floor()\nPembulatan pasti ke bawah, Math.floor(4.7778) : ${Math.floor(
    4.7778
  )}`
);

// round method
// Math.round()
// membulatkan angka ke bilangan terdekat sesuai angka di belakang koma.
// angka dibelakang koma <5, maka dibulatkan ke bawah.
//  angka di belakang koma >= 5, maka dibulatkan ke atas.

console.log(
  `Method Math.round()\nPembulatan akan ke bawah karena angka belakang koma <5, Math.round(4.2) : ${Math.round(
    4.2
  )}`
);

console.log(
  `Method Math.round()\nPembulatan akan ke atas karena angka belakang koma >=5, Math.round(4.5) : ${Math.round(
    4.5
  )}`
);

console.log(
  `Method Math.round()\nPembulatan akan ke atas karena angka belakang koma >=5, Math.round(4.7) : ${Math.round(
    4.7
  )}`
);

// Method Math.sqrt()
// Mencari nilai akar dari sebuah bilangan
console.log(
  `Method Math.sqrt()\nNilai akar dari 100 adalah : ${Math.sqrt(100)}`
);
