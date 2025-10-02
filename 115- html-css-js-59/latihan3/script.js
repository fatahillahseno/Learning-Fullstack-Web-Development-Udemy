const textInput = document.getElementById("textInput");
const outputDisplay = document.getElementById("outputDisplay");

textInput.addEventListener("keyup", function () {
  const currentInput = textInput.value;
  outputDisplay.textContent = currentInput;
});

let count = 0;
textInput.addEventListener("keypress", function () {
  count++;
  console.log(`Ditekan ${count} kali`);
});
