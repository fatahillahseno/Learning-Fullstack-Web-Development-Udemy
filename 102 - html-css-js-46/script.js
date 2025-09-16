let paragraph = document.getElementById("paragraph");

let parentNode = paragraph.parentNode;
console.log("parentNode", parentNode);

let parentElement = paragraph.parentElement;
console.log("parentElement", parentElement);

// ingin mengambil teks pada paragraph dengan textNodeExample
// formatnya sebagai node
// firstChild disini akan mengambil text node
// pada element node <p> ber-id textNodeExample
let textNode = document.getElementById("textNodeExample").firstChild;
console.log(textNode);

let parentElementTextNode = textNode.parentElement;
console.log("parentElementTextNode", parentElementTextNode);

let parentNodeTextNode = textNode.parentNode;
console.log("parentNodeTextNode", parentNodeTextNode);

// property untuk root dokumen html
let htmlElement = document.documentElement;
console.log(htmlElement.parentNode);
console.log(htmlElement.parentElement);

let divElement = document.getElementById("textNodeExample").parentNode;
console.log(divElement);
let commentNode = divElement.previousSibling;

console.log("Code for Comment Node =", Node.COMMENT_NODE);

while (commentNode && commentNode.nodeType !== Node.COMMENT_NODE) {
  commentNode = commentNode.previousSibling;
}
console.log(commentNode);
console.log(commentNode.data);
