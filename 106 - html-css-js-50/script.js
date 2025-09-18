function handleInlineClick() {
  alert("Inline Handler");
}

document.getElementById("onEventButton").onclick = function () {
  alert("On-Event Handler");
};
document.getElementById("onEventButton").onclick = function () {
  alert("Second On-Event Handler");
};

document
  .getElementById("addEventListenerButton")
  .addEventListener("click", () => {
    alert("addEventListener Handler");
  });

document
  .getElementById("addEventListenerButton")
  .addEventListener("click", () => {
    console.log("Second addEventListener Handler");
  });
