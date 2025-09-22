document
  .getElementById("exampleForm")
  .addEventListener("submit", function (event) {
    console.log("Form Submitted");
    //mencegah form me-submit otomatis atau reload
    event.preventDefault();
    // setelah itu biasanya developer akan menambahkan kode untuk memproses data form
    console.log("My own code");
  });

// Event pada input field
// input, menampilan perubahan pada form input setiap karakter yang diinputkan
document.getElementById("textInput").addEventListener("input", function () {
  console.log("Text Input: ", this.value);
});

// change, menampilkan perubahan pada form input, namun change hanya akan aktif ketika kita keluar dari form inputnya
document.getElementById("emailInput").addEventListener("change", function () {
  console.log("Email Input: ", this.value);
});

// focus, event yang terpicu ketika form input mendapatkan fokus
document.getElementById("passwordInput").addEventListener("focus", function () {
  console.log("Password Focused");
});

//blur, event yang terpicu ketika form input kehilangan fokus
document.getElementById("passwordInput").addEventListener("blur", function () {
  console.log("Password Blurred");
});

// change pada checkbox
// menggunakan properti checked untuk mengetahui status checkbox
document
  .getElementById("checkboxInput")
  .addEventListener("change", function () {
    console.log(this.checked ? "checked" : "unchecked");
  });

document.getElementById("fileInput").addEventListener("change", function () {
  console.log(this.files);
  console.log(this.files[0]);
  console.log(this.files[0].name);
});
