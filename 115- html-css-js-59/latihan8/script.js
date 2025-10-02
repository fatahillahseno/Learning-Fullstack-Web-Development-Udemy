// inisialisasi harga per unit
const pricePerUnit = 50000;

// ambil elemen yang diperlukan
const quantityInput = document.getElementById("quantityInput");
const totalDisplay = document.getElementById("totalDisplay");
const quantityErrorDisplay = document.getElementById("quantityError");

// formatter mata uang Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

// fungsi
function calculateTotal() {
  // quantityInput.value biasanya bertipe string
  // untuk menghindari kesalah di masa depan
  // kita konversi ke number menggunakan Number()/parseFloat()
  const quantity = parseFloat(quantityInput.value);

  // bataskan nilai minimum dan maksimum
  const min_qty = 1;
  const max_qty = 10;

  // kondisi jika kurang dari batas minimum pesan
  if (isNaN(quantity) || quantity < min_qty) {
    // jika quantity dari input kurang dari 1
    // tampilkan pesan error minimal 1
    quantityErrorDisplay.textContent = `Jumlah minimum ${min_qty}`;
    // style pesan error dengan css yang dibuat
    quantityInput.classList.add("input-error");
    quantityErrorDisplay.style.color = "red";
    // set total harga yang tampil jadi Rp. 0
    totalDisplay.textContent = formatRupiah(0);

    return;
  }

  // kondisi jika kurang dari batas maksimum pesan
  else if (quantity > max_qty) {
    // jika quantity dari input lebih dari 10
    // tampilkan pesan error maksimal 10
    quantityErrorDisplay.textContent = `Jumlah maksimum ${max_qty}`;
    quantityErrorDisplay.style.color = "red";
    // style pesan error dengan css yang dibuat
    quantityInput.classList.add("input-error");
    // set total harga yang tampil jadi Rp. 0
    totalDisplay.textContent = formatRupiah(0);

    return;
  } else {
    // kondisi jika input yang dimasukkan benar
    // kosongkan pesan error
    quantityErrorDisplay.textContent = "Quantity Sesuai";
    // hilangkan style pada pesan error
    quantityInput.classList.remove("input-error");
    quantityErrorDisplay.style.color = "#fff";

    // Perhitungan Total Harga
    const totalPrice = quantity * pricePerUnit;
    totalDisplay.textContent = formatRupiah(totalPrice);
  }
}

// ketika ada perubahan di input quantity
// fungsi calculateTotal akan berjalan dan mengganti totalDisplay
quantityInput.addEventListener("input", calculateTotal);
calculateTotal(); //untuk make sure total langsung muncul saat halaman dimuat benar dengan jumlah quantity awal
