// Syntax
// fs.readdir(path, function (err, files));
// path: the directory and files that will be read.
// files: all files in the path.

var fs = require("fs");
fs.readdir(
  "C:/Users/HP/myNode/DSIHUB/PRACTICE/Ray-Yao/newDir",
  function (err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach(function (file) {
      console.log(file);
    });
  }
);
