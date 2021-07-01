// Path Module contains many small tools to process the file path
// var path = require("path");

var path = require("path");
console.log("The result to process path are as follows:");

console.log("Join the path names:");
console.log(path.join("/app", "ban", "cat/egg", "myfolder"));
// Output: \app\ban\cat\egg\myfolder

console.log("Search the absolute path from left to right:");
console.log(path.resolve("/foo/bar", "/ray/baz"));
// Output: C:\ray\baz

console.log();
console.log("Make the first absolute path from left to right:");
console.log(path.resolve("/foo/bar", "baz"));
// Output: C:\foo\bar\baz

console.log("Check whether it is an absolute path:");
console.log(path.isAbsolute("/ray/baz"));
// Output: true

console.log("Convert to relative path:");
console.log(path.relative("/foo/bar", "/ray/baz"));
// Output: ..\..\ray\baz

// --- --- ---
console.log("Return the last portion of a path:");
console.log(path.basename("/foo/bar/myFolder"));
// Output: myFolder
console.log(path.basename("foo/bar/baz/asdf/quuz.html"));
// Output: quuz.html
console.log(path.basename("foo/bar/baz/asdf/quuz.html", ".html"));
// Output: quuz
// --- --- ---

console.log("Returns the directory name of a path");
console.log(path.dirname("foo/bar/baz/asdf/quuz"));
// Output: foo/bar/baz/asdf


console.log("Return the extension name of a file:");
console.log(path.extname("/foo/bar/myFolder/myFile.txt"));
// Output: .txt

console.log("Return the folder path, not include file:");
console.log(path.dirname("/foo/bar/myFolder/myFile.txt"));
// Output: /for/bar/myFolder
