import { inputButtons, clearButton } from "./src/selectors.js";
import addNumberValue from "./src/addNumberValue.js";
import useOperator from "./src/useOperator.js";
import addDecimal from "./src/addDecimal.js";
import { resetAll } from "./src/values.js";
/* 
!Langkah untuk memodulariasi app kalkulator
1. buat modul terpisah for objek calculate dan import objek tersebut
2. buat file value.js untuk membuat fungsi set dan get value
3. buat file selector.js dan tambahkan semua semua selector ke dalam sebuah satu file
4. buat module untuk addNumberValue
5. buat module untuk useOperator
6. buat module untuk addDecimal
7. import semua modul dan jalankan test
8. buat module reset
*/

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

clearButton.addEventListener("click", () => resetAll());
