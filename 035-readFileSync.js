// Syntax
// fs.readFileSync(file)
// Read the contents from a file synchronously

var fs = require("fs");
var data = fs.readFileSync("syncFile.txt");

console.log("The contents of the syncFile.txt is: ");
console.log(data.toString("utf8"));
