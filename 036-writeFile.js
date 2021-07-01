// Syntax
// fs.writeFile(file, data, callback)
// Write contents to a file asynchronously

var fs = require("fs");
fs.writeFile("asyncFile.txt", "R in 8 Hours", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Write to a file successful!");
  console.log("Please check the asyncFile.txt");
});
