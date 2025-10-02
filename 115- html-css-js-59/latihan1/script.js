const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const displayText = document.getElementById("displayText");

btn1.addEventListener("click", function () {
  displayText.textContent = "Tombol 1 telah diklik!";
});

btn2.addEventListener("click", function () {
  displayText.textContent = "Tombol 2 telah diklik!";
});

btn3.addEventListener("click", function () {
  displayText.textContent =
    "Klik salah satu tombol di atas untuk mengubah teks ini.";
});
