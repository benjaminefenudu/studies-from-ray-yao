// Syntax
// fs.close(fd, callback)
// fd: using fd.open().
// callback: a function will be called when an error occurs.

var fs = require("fs");
var buf = new Buffer.alloc(1024);
fs.open("myFile.txt", "w+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("myFile.txt is opened successfully!");
  fs.close(fd, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("myFile.txt is closed successfully!");
  });
});
