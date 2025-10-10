import { calculatorDisplay } from "./selectors.js";
import {
  getFirstValue,
  setFirstValue,
  getOperatorValue,
  setOperatorValue,
  getAwaitingNextValue,
  setAwaitingNextValue,
} from "./values.js";
import calculate from "./calculate.js";

function useOperator(operator) {
  // ambil string dari angka yang ditampilkan lalu ubah menjadi number(integer atau float)
  const currentValue = Number(calculatorDisplay.textContent); //bisa Number() atau parseFloat()

  if (getOperatorValue() && getAwaitingNextValue()) {
    //jika operatorValue sudah diset berdasarkan parameter operator yang diinputkan dari button
    // dan jika apakah kondisi sedang menunggu angka selanjutnya
    setOperatorValue(operator); //isikan operator value dengan input operator, ubah ketika user menekan input operator yang berbeda
    return; // lalu kembalikan nilainya, hentikan perhitungan jika belum ada angka kedua yang dimasukan
  }

  if (!getFirstValue()) {
    //jika variabel kosong first value belum ada isinya
    setFirstValue(currentValue); //masukkan nilai current value(yg ada pada calculatorDisplay saat ini)
  } else {
    //jika sudah ada nilai pada variabel kosong tersebut
    const calculation = calculate[getOperatorValue()](
      getFirstValue(),
      currentValue
    );
    // lakukan perhitungan sesuai pada method objek kalkulate, dengan key nya berisi operatorValue yang diklik pada input button
    // dengan parameter firstValue (sebagai firstNumber) yang diklik di awal sebelum menekan input button operator
    // dan parameter currentValue (sebagai secondNumber) yang diklik setelah menekan input button operator

    calculatorDisplay.textContent = calculation; // tampilkan hasil perhitungan ke calculatorDisplay di web
    setFirstValue(calculation); // jadikan hasil terakhir menjadi value dari firstValue jika ingin melakukan perhitungan lebih lanjut
  }
  setAwaitingNextValue(true); // ubah kondisi awaitingNextValue setiap input button operator diklik
  setOperatorValue(operator); // masukan wadah kosong operatorValue dengan parameter operator yang didapat dari input button operator
}

export default useOperator;
