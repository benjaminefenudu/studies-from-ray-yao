// Syntax
// fs.unlink(file.txt, callback)

var fs = require("fs");
console.log("This is a sample to delete a file!");
fs.unlink("myFile.txt", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("myFile.txt has been deleted successfully!");
});
