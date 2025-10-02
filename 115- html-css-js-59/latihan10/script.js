// 1. dapatkan semua elemen yang diperlukan
const radioGroup = document.getElementById("serviceOptions");
const allLabels = document.querySelectorAll(".custom-radio-card");
const allDetails = document.querySelectorAll(".card-detail");

// 2. Buat fungsi yang berguna saat event terjadi
// 2.A. fungsi untuk menghilangkan semua class .expanded dan selected
const clearActiveStates = () => {
  allLabels.forEach((label) => label.classList.remove("selected"));
  allDetails.forEach((detail) => detail.classList.remove("expanded"));
};

// 2.B. fungsi untuk menangani klik pada radio button atau label
const handleClick = (event) => {
  // 2.B.1 cari elemen parent dari event.target yang memiliki class .custom-radio-card
  let clickedLabel = event.target.closest(".custom-radio-card");

  // 2.B.2 jika tidak ada label yang diklik, keluar dari fungsi
  if (!clickedLabel) return;

  // 2.B.3 cari elemen card-detail dengan nextElementSibling dari clickedLabel
  // (elemen detail berada setelah label pada HTML)
  const newDetail = clickedLabel.nextElementSibling;

  // 2.B.4 jika tidak ada elemen detail atau elemen detail tidak memiliki class .card-detail, keluar dari fungsi
  if (!newDetail || !newDetail.classList.contains("card-detail")) return;

  // 2.B.5 cek apakah card-detail sudah memiliki class .expanded
  const isAlreadyExpanded = newDetail.classList.contains("expanded");

  //2.B.6 panggil fungsi untuk menghilangkan semua class .expanded dan .selected
  clearActiveStates();

  //2.B.7 buat kondisi untuk menampilkan detail dan menandai label
  if (!isAlreadyExpanded) {
    // Tandai Label: tambahkan class .selected pada clickedLabel
    clickedLabel.classList.add("selected");

    // Tampilkan Detail : tambahkan class .expanded pada newDetail
    newDetail.classList.add("expanded");

    // ambil nilai dari atribut for pada label yang diklik
    const associatedInputId = clickedLabel.getAttribute("for");
    // gunakan nilai for atribut yang didapatkan untuk
    // mengambil tag input yang memiliki value yg sama dengan id input
    const associatedInput = document.getElementById(associatedInputId);
    // buat input tersebut terceklis (kondisi: checked)
    if (associatedInput) {
      associatedInput.checked = true; // Setel radio button terkait sebagai terpilih
    }
  }
};

radioGroup.addEventListener("click", handleClick);
