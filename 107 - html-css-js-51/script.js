document
  .getElementById("exampleButton")
  .addEventListener("click", function (event) {
    console.log("event.type:", event.type);
    console.log("event.target:", event.target);
    console.log("event.target.tagName:", event.target.tagName);
    console.log("event.currentTarget:", event.currentTarget);
    console.log("event.currentTarget.tagName:", event.currentTarget.tagName);
    console.log("event.timeStamp:", event.timeStamp);
    console.log("Mouse X Position:", event.clientX);
    console.log("Mouse Y Position:", event.clientY);
  });
