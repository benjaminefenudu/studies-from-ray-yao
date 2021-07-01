// Syntax
// readstream.pipe(writestream);
// gets data from one stream and passes it to another stream.
// reads the contents of one file and writes them to another file.

var fs = require("fs");

// create an object of reading stream
var readstream = fs.createReadStream("infile.txt");
// create an object of writing stream
var writestream = fs.createWriteStream("outfile.txt");

// read the contents of the infile.txt and write to outfile.txt
readstream.pipe(writestream);

console.log("The example of piping stream.");
console.log("Please check the outfile.txt.");
