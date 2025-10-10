import { calculatorDisplay } from "./selectors.js";
import { getAwaitingNextValue, setAwaitingNextValue } from "./values.js";

function addNumberValue(number) {
  if (getAwaitingNextValue()) {
    //jika awaitingNextValue bernilai true
    calculatorDisplay.textContent = number; //ubah isi calculatorDisplay di web menjadi nilai parameter number
    setAwaitingNextValue(false); //ubah parameter awaitingNextValue menjadi false agar dapat calculatorDisplay nanti bisa berubah dengan second number yang akan dimasukan
  } else {
    //jika awaitingNextValue bernilai false
    const displayValue = calculatorDisplay.textContent; // ambil angka pada saat ini dan simpan pada variabel
    calculatorDisplay.textContent = //ubah isi dari calculatorDisplay di web
      displayValue === "0" ? number : displayValue + number; // jika masih bernilai 0, masukan sesuai input parameter number, jika sudah ada nilai displayValue (yg tampil sekarang) dengan angka pada parameter input number
  }
}

export default addNumberValue;
