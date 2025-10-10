import { calculatorDisplay } from "./selectors.js";

let firstValue = 0; // variabel untuk menyimpan nilai first number
let awaitingNextValue = false; // variabel untuk penentu apakah menunggu number selanjut(setelah operator diklik)
let operatorValue = ""; // variabel untuk menampung operator apa yang diklik

export function getFirstValue() {
  return firstValue;
}

export function setFirstValue(value) {
  firstValue = value;
}

export function getAwaitingNextValue() {
  return awaitingNextValue;
}

export function setAwaitingNextValue(value) {
  awaitingNextValue = value;
}

export function getOperatorValue() {
  return operatorValue;
}

export function setOperatorValue(value) {
  operatorValue = value;
}

export function resetAll() {
  setFirstValue(0);
  setOperatorValue("");
  setAwaitingNextValue(false);
  calculatorDisplay.textContent = "0";
}
