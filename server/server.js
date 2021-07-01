const http = require("http");
const fs = require("fs");

port = 3000;

const server = http
  .createServer((req, res) => {
    let path = "./";
    if (req.url === "/") {
      path = path + "index.html";
    } else if (req.url === "/about") {
      path = path + "about.html";
    } else if (req.url === "/contact") {
      path = path + "contact.html";
    } else if (req.url !== "/" || "/about" || "contact") {
      path = path + "error.html";
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        return console.error(err)
      };
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(port);
console.log(`Server listening on port ${port}...`);
