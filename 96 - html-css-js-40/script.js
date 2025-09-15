let heading = document.getElementById("main-title");
console.log(heading);

let paragraphs = document.getElementsByClassName("content");
console.log(paragraphs);
// akan menghasilkan array berupa element yang dengan class yang disebutkan
// namun tidak semua method atau properti array bisa digunakan
// mekanisme disebut HTML Collection
console.log(paragraphs.length);
console.log(paragraphs[0]);

let divElements = document.getElementsByTagName("div");
console.log(divElements);
console.log(divElements[2]);

// kita bisa mengubah HTML Collection yang kita buat
// menjadi array sesungguhnya agar dapat menggunakan
// properti dan method array
let paragraphArray = Array.from(paragraphs);
console.log(paragraphArray);
console.log(typeof paragraphArray);

// jika kita ingin mengakses isi array dengan loop
// kita tidak harus mengubahnya menjadi array
// HTML collection juga sudah bisa di-loop-ing ketika
// kita mau mengakses isi array tersebut
for (para of paragraphs) {
  console.log(para.innerText);
}
