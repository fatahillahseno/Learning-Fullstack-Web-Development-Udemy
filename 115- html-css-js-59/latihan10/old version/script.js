// Ambil elemen induk untuk event delegation radio button
const radioGroup = document.getElementById("serviceOptions");

// berikan event listener "click" pada elemen induk
// parameter event berisi informasi event yang terjadi
radioGroup.addEventListener("click", function (event) {
  // buat variabel clickedLabel untuk menyimpan elemen label yang diklik
  // bertipe data null, agar tidak error saat belum ada label yang diklik
  let clickedLabel = null;
  // buat tipe data newDetail bertipe null
  // agar tidak error saat belum ada detail yang ditampilkan
  let newDetail = null;

  // indentifikasi target atau elemen yang diklik
  // hanya dijalankan jika yang diklik adalah elemen label
  // jika target memiliki class custom-radio-card
  if (event.target.classList.contains("custom-radio-card")) {
    // simpan elemen yang diklik dalam clickedLabel
    clickedLabel = event.target;
  } else if (event.target.closest(".custom-radio-card")) {
    //jika yang diklik adalah elemen di dalam label
    // misalnya teks atau elemen lain di dalam label
    clickedLabel = event.target.closest(".custom-radio-card");
  } else {
    // jika yang diklik bukan label atau elemen di dalam label
    // keluar dari proses ini
    return;
  }

  /*  // ambil semua elemen dengan dengan class card-detail
  // masukan ke dalam variabel allDetails
  const allDetails = document.querySelectorAll(".card-detail");

  // loop allDetails
  allDetails.forEach(function (detail) {
    // sembunyikan semua detail dengan menghapus class .expanded
    detail.classList.remove("expanded");
  });

  // cari elemen yang menampilkan isi detail
  // dan masukkan ke dalam variabel newDetail
  // untuk diberikan class .expanded
  // bisa diambil dengan nextElementSibling dari clickedLabel
  newDetail = clickedLabel.nextElementSibling;

  // tambahkan class .expanded pada newDetail
  // agar detail ditampilkan tiap diklik
  newDetail.classList.add("expanded"); */

  // cari elemen card-detail dengan nextElementSibling dari clickedLabel
  newDetail = clickedLabel.nextElementSibling;

  // cek apakah card-detail yang diklik sudah ditampilkan
  if (newDetail && newDetail.classList.contains("card-detail")) {
    // cek apakah card-detail sudah memiliki class .expanded
    const isAlreadyExpanded = newDetail.classList.contains("expanded");

    // ambil semua elemen dengan class card-detail
    const allDetails = document.querySelectorAll(".card-detail");
    // ambil semua elemen dengan class card-detail
    const allLabels = document.querySelectorAll(".custom-radio-card");

    // loop allDetails untuk menghilangkan class .expanded
    allDetails.forEach(function (detail) {
      detail.classList.remove("expanded");
    });

    // loop allLabels untuk menghilangkan class .selected
    allLabels.forEach(function (label) {
      label.classList.remove("selected");
    });

    // jika belum ditampilkan, tambahkan class .expanded pada newDetail
    if (!isAlreadyExpanded) {
      newDetail.classList.add("expanded");
      clickedLabel.classList.add("selected");
    }
  }
});
