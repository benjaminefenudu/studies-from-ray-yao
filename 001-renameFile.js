// => Check how to create files and folders in windows

const fs = require("fs");

console.log("This is a sample to rename a file!");

oldName = "aaa.txt";
newName = "bbb.txt";

fs.rename(oldName, newName, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log(
    `The file ${oldName} has been renamed as ${newName} successfully!`
  );
});
