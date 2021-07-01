// Syntax
// var json = buf.toJSON(buf);
// "json" is a Json object, "buf" is a Buffer object

const buf = Buffer.from("Ray Yao");
var json = buf.toJSON(buf); // convert to Json object
console.log(json); // show data in json format