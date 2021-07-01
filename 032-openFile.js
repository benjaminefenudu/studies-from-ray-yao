// Syntax
// fs.open(path/filename, mode, callback);
// "mode" sets how to open a file.
// Please see the chart at the end for mode descriptions.

var fs = require("fs");
console.log("A sample of opening a file.");
fs.open("./myFile.txt", "r+", function (err) {
  if (err) {
    return console.err(err);
  }
  console.log("The file is opened successfully!");
});

// Mode Description
// r    Open the file in read mode.
//      An exception occurs if the file does not exist.
// r+   Open the file in read or write mode.
//      An exception occurs if the file does not exist.
// w    Open the file in write mode.
//      If the file does not exist, it will be created.
// w+   Open the file in write or read mode.
//      If the file does not exist, it will be created.
// a    Open the file in append mode.
//      If the file does not exist, it will be created.
// a+   Open the file in append or read mode.
//      If the file does not exist, it will be created.
