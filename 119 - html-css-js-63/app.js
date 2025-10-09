import { counter, incrementCounter } from "./src/counter.js";

const display = document.getElementById("counter");
const button = document.getElementById("updateCounter");

button.addEventListener("click", () => {
  incrementCounter();
  display.textContent = counter;
});
