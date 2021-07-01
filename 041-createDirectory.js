// Syntax
// fs.mkdir(path, callback)

var fs = require("fs");
console.log("Create a new directory 'newDir'");
fs.mkdir("C:/Users/HP/myNode/DSIHUB/PRACTICE/Ray-Yao/newDir", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("The directory 'newDir' is created successfully!");
});
