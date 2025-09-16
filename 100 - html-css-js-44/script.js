function applyStyles() {
  // ambil elemen box1 dari dokumen
  let box1 = document.getElementById("box1");

  // menambahkan style baru pada box1
  box1.style.backgroundColor = "green";
  box1.style.borderColor = "red";
  box1.style.height = "200px";
  box1.style.width = "200px";

  console.log(box1.style);
}
function toggleClass() {
  // ambil elemen box2 dari dokumen
  let box2 = document.getElementById("box2");

  box2.classList.toggle("highlight");
  box2.classList.toggle("large");
  box2.classList.remove("box");
  console.log(box2.className);
}
