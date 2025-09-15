let contentDiv = document.getElementById("content");
// console.log(contentDiv.innerHTML);

let userInput = `<img src ='invalid-image' onError='alert("Hacked")' />`;
contentDiv.innerHTML = userInput;

// validate dan sanitize data nya terlebih dahulu untuk input yang berasal dari user
// jangan langsung menggunakan data langsung yang diberikan user, validate dan sanitize terlebih dahulu
