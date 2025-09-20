// penggunaan this pada event listener
// menggunakan function expression bisa mengakses this
document
  .getElementById("exampleButton")
  .addEventListener("click", function (event) {
    console.log("this refers to:", this);
    console.log(this.id);
    console.log(this.textContent);
    console.log(this.className);
    console.log(this.classList);
  });

// seperti yang sudah pernah dibahas, arrow function tidak memiliki this sendiri
document.getElementById("exampleButton").addEventListener("click", (event) => {
  console.log("this refers to:", this);
});
