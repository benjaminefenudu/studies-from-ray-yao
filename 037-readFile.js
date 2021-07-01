// Syntax
// fs.readFile(file, callback)
// Read the contents from a file asynchronously

var fs = require("fs");
fs.readFile("asyncFile.txt", function (err, data) {
  if (err) return console.error(err);
  console.log("The content of the asyncFile.txt is:");
  console.log(data.toString());
});
