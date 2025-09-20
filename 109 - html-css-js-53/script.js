const eventArea = document.getElementById("eventArea");
console.log(eventArea);

eventArea.addEventListener("mouseover", function () {
  console.log("Mouse over the area");
  this.style.backgroundColor = "lightblue";
});

eventArea.addEventListener("mouseout", function () {
  console.log("Mouse out of the area");
  this.style.backgroundColor = "#f0f0f0";
});

eventArea.addEventListener("mousedown", function () {
  console.log("Mouse button down");
  this.style.backgroundColor = "lightgreen";
});

eventArea.addEventListener("mouseup", function () {
  console.log("Mouse button up");
  this.style.backgroundColor = "lightblue";
});

eventArea.addEventListener("click", function () {
  console.log("Area Clicked");
});
