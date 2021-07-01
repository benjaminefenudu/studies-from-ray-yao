// Syntax
// fs.rmdir(path, callback) // remove empty folder only

var fs = require("fs");
console.log("The sample to remove a folder 'newDir'");
fs.rmdir("C:/Users/HP/myNode/DSIHUB/PRACTICE/Ray-Yao/newDir", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("The folder 'newDir' is removed successfully!");
});
