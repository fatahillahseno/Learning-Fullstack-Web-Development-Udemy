const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.textContent = "Pindahkan mouse keluar!";
  hoverBox.style.backgroundColor = "red";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.textContent = "Arahkan mouse ke sini!";
  hoverBox.style.backgroundColor = "#2196f3";
});
