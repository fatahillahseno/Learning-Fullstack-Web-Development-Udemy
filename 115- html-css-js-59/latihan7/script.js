// 1. Dapatkan semua elemen .faq-header
const headers = document.querySelectorAll(".faq-header");

// 2. Loop melalui setiap header untuk menambahkan event listener
headers.forEach((header) => {
  header.addEventListener("click", function () {
    // 'this' atau 'header' merujuk pada elemen .faq-header yang diklik

    // a. Dapatkan elemen .faq-content yang merupakan SIBLING setelah header ini
    const content = this.nextElementSibling;

    // b. Toggle kelas 'expanded' pada konten
    content.classList.toggle("expanded");
    // c. (Opsional/Bonus) Toggle kelas 'active' pada header itu sendiri untuk memutar ikon
    this.classList.toggle("active");
  });
});
