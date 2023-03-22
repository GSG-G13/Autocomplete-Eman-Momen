const fs = require("fs");
const myHandler = (path, contentType, res) => {
  fs.readFile(path, "utf8", (err, file) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("server error");
    } else {
      res.writeHead(200, { "content-type": `${contentType}` });
      res.end(file);
    }
  });
};

module.exports = myHandler;
