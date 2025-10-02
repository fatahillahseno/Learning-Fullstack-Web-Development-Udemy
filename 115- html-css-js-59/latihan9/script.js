// 1. Dapatkan elemen Induk (Sidebar)
const sidebar = document.getElementById("sidebar");

// 2. Pasang event listener pada elemen Induk (Event Delegation)
sidebar.addEventListener("click", function (e) {
  // A. Cek apakah yang diklik adalah tautan (<a>)
  // Jika elemen yang diklik BUKAN tautan, HENTIKAN fungsi (return)
  if (e.target.tagName !== "A") {
    return;
  }

  // B. Cegah tindakan default tautan (mencegah halaman reload)
  e.preventDefault();

  // C. Dapatkan semua tautan navigasi
  const allLinks = sidebar.querySelectorAll("a");

  // D. Loop melalui semua tautan dan HAPUS kelas 'active' dari SEMUANYA
  // Gunakan forEach dan classList.remove()
  allLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // E. Tambahkan kelas 'active' hanya pada tautan yang baru diklik
  // e.target adalah tautan yang diklik karena kita sudah cek di langkah A
  e.target.classList.add("active");
});
