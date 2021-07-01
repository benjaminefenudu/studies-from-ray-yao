// Syntax
// fs.writeFileSync(file, data);

var fs = require("fs");
fs.writeFileSync("syncFile.txt", "Go in 8 Hours");
console.log("Write contents to file successful!");
console.log("Please check the syncFile.txt.")