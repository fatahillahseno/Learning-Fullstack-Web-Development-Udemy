const trackingBox = document.getElementById("trackingBox");
const coordinateOutput = document.getElementById("coordinateOutput");

trackingBox.addEventListener("mousemove", function (event) {
  coordinateOutput.textContent = `Koordinat (X : ${event.clientX}, Y : ${event.clientY})`;
});
