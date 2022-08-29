const path = require("path");

let pathStr = path.join(__dirname, "./1.txt");

console.log(pathStr);

console.log(path.basename(pathStr, "t"));
