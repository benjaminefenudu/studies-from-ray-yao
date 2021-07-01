// Syntax
// fs.stat(path/filename, callback);

// Stats class has two important methods:
// Stats.isFile() checks an item if it is a file.
// Stats.isDirectory() checks an item if it is a directory.

var fs = require("fs");
fs.stat("dir/file.txt", function (err, stats) {
  if (err) {
    return console.err(err);
  }
  console.log("The file information was retrieved successfully!");
  console.log("This item is a file? " + stats.isFile());
  console.log("This item is a directory? " + stats.isDirectory());
});
