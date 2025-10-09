// import segala keperluan yang ada ke app.js dari mathUtils.js dan message.js

// named import
import { add, subtract, pi } from "./src/mathUtils.js";

// default import
import message from "./src/message.js";

console.log(add(2, 3));
console.log(subtract(5, 3));
console.log(pi);
message("Satria");
