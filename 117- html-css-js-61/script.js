// tangkap semua elemen yang diperlukan
const calculatorDisplay = document.querySelector("h1");
const inputButtons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear-btn");

let firstValue = 0; // variabel untuk menyimpan nilai ffirst number
let awaitingNextValue = false; // variabel untuk penentu apakah menunggu number selanjut(setelah operator diklik)
let operatorValue = ""; // variabel untuk menampung operator apa yang diklik

function addNumberValue(number) {
  if (awaitingNextValue) {
    //jika awaitingNextValue bernilai true
    calculatorDisplay.textContent = number; //ubah isi calculatorDisplay di web menjadi nilai parameter number
    awaitingNextValue = false; //ubah parameter awaitingNextValue menjadi false agar dapat calculatorDisplay nanti bisa berubah dengan second number yang akan dimasukan
  } else {
    //jika awaitingNextValue bernilai false
    const displayValue = calculatorDisplay.textContent; // ambil angka pada saat ini dan simpan pada variabel
    calculatorDisplay.textContent = //ubah isi dari calculatorDisplay di web
      displayValue === "0" ? number : displayValue + number; // jika masih bernilai 0, masukan sesuai input parameter number, jika sudah ada nilai displayValue (yg tampil sekarang) dengan angka pada parameter input number
  }
}

// calculate adalah objek yang berisi method formula operator
const calculate = {
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
  "=": (firstNumber, secondNumber) => secondNumber,
};

function useOperator(operator) {
  // ambil string dari angka yang ditampilkan lalu ubah menjadi number(integer atau float)
  const currentValue = Number(calculatorDisplay.textContent); //bisa Number() atau parseFloat()

  if (operatorValue && awaitingNextValue) {
    //jika operatorValue sudah diset berdasarkan parameter operator yang diinputkan dari button
    // dan jika apakah kondisi sedang menunggu angka selanjutnya
    operatorValue = operator; //isikan operator value dengan input operator, ubah ketika user menekan input operator yang berbeda
    return; // lalu kembalikan nilainya, hentikan perhitungan jika belum ada angka kedua yang dimasukan
  }

  if (!firstValue) {
    //jika variabel kosong first value belum ada isinya
    firstValue = currentValue; //masukkan nilai current value(yg ada pada calculatorDisplay saat ini)
  } else {
    //jika sudah ada nilai pada variabel kosong tersebut
    const calculation = calculate[operatorValue](firstValue, currentValue);
    // lakukan perhitungan sesuai pada method objek kalkulate, dengan key nya berisi operatorValue yang diklik pada input button
    // dengan parameter firstValue (sebagai firstNumber) yang diklik di awal sebelum menekan input button operator
    // dan parameter currentValue (sebagai secondNumber) yang diklik setelah menekan input button operator

    calculatorDisplay.textContent = calculation; // tampilkan hasil perhitungan ke calculatorDisplay di web
    firstValue = calculation; // jadikan hasil terakhir menjadi value dari firstValue jika ingin melakukan perhitungan lebih lanjut
  }
  awaitingNextValue = true; // ubah kondisi awaitingNextValue setiap input button operator diklik
  operatorValue = operator; // masukan wadah kosong operatorValue dengan parameter operator yang didapat dari input button operator
}

function addDecimal() {
  if (awaitingNextValue === true) {
    return;
  }
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// event click button
// loop semua button untuk mencari tahu button yang tidak memiliki class
inputButtons.forEach((inputButton) => {
  // telusuri tiap button yang ada di web
  if (inputButton.classList.length === 0) {
    // jika tidak ada class pada button
    inputButton.addEventListener(
      "click",
      () =>
        //ketika diklik akan menjadi angka/number
        addNumberValue(inputButton.value) // panggil fungsi addNumberValue dengan parameter inputButton yang tidak memiliki class
    );
  } else if (inputButton.classList.contains("operator")) {
    //jika input button memiliki class yang berisi operator
    inputButton.addEventListener("click", () => useOperator(inputButton.value)); // ketika diklik akan memanggil fungsi useOperator dengan parameter inputButton yang memiliki class operator
  } else if (inputButton.classList.contains("decimal")) {
    inputButton.addEventListener("click", addDecimal);
  }
});

function resetAll() {
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
  calculatorDisplay.textContent = "0";
}

clearButton.addEventListener("click", resetAll);
