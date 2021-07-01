// Syntax
// buf.indexOf("String");
// Returns the index of the string.

const buf = Buffer.from("Linux Shell in 8 Hours");
console.log(buf.toString());
console.log("The index of Shell is: " + buf.indexOf("Shell"));
console.log("The index of Hours is: " + buf.indexOf("Hours"));
