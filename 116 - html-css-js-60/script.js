document.getElementById("btnOpen").addEventListener("click", function () {
  window.open("https://www.google.com", "_blank");
  console.log(window.document);
});

document
  .getElementById("btnShowProperties")
  .addEventListener("click", function () {
    alert(`
      Screen Width: ${window.screen.width}px
      Screen Height: ${window.screen.height}px
      Screen Available Width: ${window.screen.availWidth}px
      Screen Available Height: ${window.screen.availHeight}px
      Color Depth: ${screen.colorDepth}bits
      Pixel Depth: ${screen.pixelDepth}bits
  `);
  });

document.getElementById("showHref").addEventListener("click", function () {
  console.log("Current URL: ", window.location.href);
});

document.getElementById("showHostname").addEventListener("click", function () {
  console.log("Hostname: ", window.location.hostname);
});

document.getElementById("showPathname").addEventListener("click", function () {
  console.log("Pathname: ", window.location.pathname);
});
document.getElementById("showProtocol").addEventListener("click", function () {
  console.log("Protocol: ", window.location.protocol);
});
document.getElementById("goToSite").addEventListener("click", function () {
  window.location.assign("https://google.com");
});

// keseluruhan properti dan method location object
console.log(window.location);
