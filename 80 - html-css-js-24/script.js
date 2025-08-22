console.log(this); // akan mereferensikan objek global (window di browser)

let car = {
  brand: "BMW",
  model: "7 Series",
  year: 2024,
  display() {
    console.log(this);
  },
};

car.display(); // akan mereferensikan objek car

function showThis() {
  console.log(this);
}

showThis(); // akan mereferensikan objek global (window di browser)
// kenapa? karena fungsi ini tidak dipanggil sebagai metode dari objek manapun

// jadi this akan mereferensikan objek yang memanggilnya
// jika dipanggil sebagai metode dari objek, this akan mereferensikan objek tersebut
// jika dipanggil sebagai fungsi biasa, this akan mereferensikan objek global
// jika dipanggil dalam konteks lain, this akan mereferensikan objek yang sesuai dengan konteks tersebut
