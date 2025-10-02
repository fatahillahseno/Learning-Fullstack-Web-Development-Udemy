const itemList = document.getElementById("itemList");
const listItems = document.querySelectorAll(".list-item");

itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    listItems.forEach(function (item) {
      item.classList.remove("highlight");
    });

    event.target.classList.add("highlight");
  }
});
