// Syntax
// var obj = fs.createReadStream("myFile.txt");

var fs = require("fs");

var data = "Read the File Stream: "; // initialize the data
var obj = fs.createReadStream("./myFile.txt");
obj.setEncoding("utf8"); // reading and encoding with utf8
obj.on("data", function (datas) {
  // bind data event to callback
  data += datas; // keep reading data
});
obj.on("end", function () {
  //bind end event to callback
  console.log(data);
});
obj.on("error", function (e) {
  // bind error event to callback
  console.log(e.stack); //show error messages
});
console.log("An example of reading a file stream");





