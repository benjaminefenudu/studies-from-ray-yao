// Syntax
// var obj = fs.createWriteStream("newfile.txt");

var fs = require("fs");

var data = "Write the File Stream: NodeJS in 8 Hours"; // contents
var obj = fs.createWriteStream("newfile.txt");
obj.write(data, "utf8"); // writing and encoding with utf8
obj.end(); // mark the end of the file
obj.on("finish", function () {
  // bind finsh event to callback
  console.log("Finished writing. Please check the new file.");
});
obj.on("error", function (e) {
  // bind error event to callback
  console.log(e.stack); // show error message
});

