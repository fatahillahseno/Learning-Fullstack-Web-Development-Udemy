// menggunakan date constructor function
// Date()
// membuat objek konstruktor pada variabel yang diinginkan
// membuat objek Date. Ketika dipanggil sebagai fungsi, ia mengembalikan sebuah string yang merepresentasikan waktu saat ini.

let currentDate = new Date();
console.log(currentDate);

// Date(argument)
// argument bisa berisi:

// new Date() → waktu sekarang
// contoh : let date = new Date()

// new Date("string") → dari string tanggal
// new Date("Tahun-Bulan-Tanggal")
// contoh : let date = new Date("2025-08-25")

// new Date(milisecond) → dari timestamp
// selalu dimulai dari 1 januari 1970 sebagai standar internasional
// jika dimasukan suatu bilangan, maka angka itu dihitung sebagai mili detik dari 1 januari 1970
// contoh: membuat tanggal dari timestamp (milisecond)
// let dateFromTimestamp = new Date(1698240000000);
// mili detik yang dimasukkan di atas akan menghasilkan Wed Oct 25 2023 20:20:00
// 169824000000 mili detik jika dikonversikan dari 1 Januari 1970
// akan berada di 25 Oktober 2023

// new Date(tahun, bulan, tanggal, jam, menit, detik, milidetik) → dari komponen tanggal/waktu
// argumen paling detail
// contoh: let date = new Date(2023, 9, 25, 20, 20, 0, 0);
// bulan dimulai dari 0 (Januari), jadi 9 berarti Oktober
// let dateFromComponents = new Date(2023, 9, 25, 20, 20, 0, 0);
// akan menghasilkan 25 Bulan Oktober (array index dari 0) tahun 2023, jam ke 20 atau 8 malam, menit ke 20, detik ke 0, mili detik ke 0

let specificDate = new Date(2025, 7, 25, 14, 4, 0);
console.log(specificDate);

// method pada currentDate
// 1. date.getFullYear()
// untuk mengambil nilai tahun saja
console.log(`Tahun pada hari ini adalah ${currentDate.getFullYear()}`);

// 2. date.getMonth()
// untuk mengambil nilai bulan saja
console.log(
  `Bulan ${currentDate.getMonth()} adalah bulan Agustus, karena array Month dimulai dari index 0, maka index 7 adalah bulan Agustus.`
);

// 3. date.getDate()
// untuk mengambil nilai tanggal saja
console.log(`Tanggal pada hari ini adalah ${currentDate.getDate()}`);

// bisa juga mengubah dari date ke string
// menggunakan date.toString()
console.log(
  `Date ini adalah object\n${currentDate}\ntype data: ${typeof currentDate}`
);
console.log(
  `Date ini adalah string\n${currentDate.toString()}\ntype data: ${typeof currentDate.toString()}`
);

// bisa juga ke Date String
// menggunakan date.toDateString()
console.log(
  `Date ini adalah date string\n${currentDate.toDateString()}\ntype data: ${typeof currentDate.toDateString()}\n\nperbedaan yang terjadi hanya ada hari, bulan, tanggal, dan tahun, tidak ada waktu dan daerah waktunya`
);

// bisa juga ke Time String
// menggunakan date.toTimeString()
console.log(
  `Date ini adalah time string\n${currentDate.toTimeString()}\ntype data: ${typeof currentDate.toTimeString()}\n\nperbedaan yang terjadi hanya ada waktu dan daerah waktunya, tidak ada hari, bulan, tanggal, dan tahun.`
);
