const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", function (event) {
  console.log(`Key Down: ${event.key} \nKey Code: ${event.code}`);
});

/* 
Keypress event sudah deprecated, namun kegunaannya sama dengan keydown
karena non character keys tidak terdeteksi pada keypress

inputField.addEventListener("keypress", function (event) {
  console.log(`Key Pressed: ${event.key} \nKey Code: ${event.code}`);
});
 */

inputField.addEventListener("keyup", function (event) {
  console.log(`Key Up: ${event.key}`);
  if (event.key === "Enter") {
    console.log("Enter pressed");
    alert("Command Executed!");
  }
});
