/* setTimeout(renderImage, 3000);
console.log("Rendering Date: ", new Date().getSeconds());

function renderImage() {
  console.log("Rendering Date: ", new Date().getSeconds());
}
 */

function myDisplayer(value) {
  console.log(`Printing Result: ${value}`);
}

function myCalculator(num1, num2, callback) {
  let result = num1 + num2;

  if (callback) {
    setTimeout(() => callback(result), 10000); //menunggu 10 detik dahulu baru dieksekusi
  }
  return result;
}

myCalculator(2, 5, myDisplayer);
