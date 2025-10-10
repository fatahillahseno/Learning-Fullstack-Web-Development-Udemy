import { getAwaitingNextValue } from "./values.js";
import { calculatorDisplay } from "./selectors.js";
function addDecimal() {
  if (getAwaitingNextValue() === true) {
    return;
  }
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

export default addDecimal;
