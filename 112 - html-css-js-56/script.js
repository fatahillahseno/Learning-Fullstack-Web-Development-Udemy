window.addEventListener("load", function () {
  console.log("Window fully loaded");
  // alert("window is loaded");
});

window.addEventListener("resize", function () {
  console.log(`Resized to ${window.innerWidth} x ${window.innerHeight}`);
});

window.addEventListener("scroll", function () {
  console.log(`you are scrolling`);
});

window.addEventListener("beforeunload", function (event) {
  let confirmationMessage = "Are you sure you want to leave?";
  event.preventDefault();
  event.returnValue = confirmationMessage;
  // kode pada block ini tidak akan berjalan pada beberapa browser
});
