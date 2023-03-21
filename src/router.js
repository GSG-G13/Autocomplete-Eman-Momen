const handler = require("./handler");

const path = require("path");

const router = (req, res) => {
  const url = req.url;

  if (url === "/") {
    handler(
      `${path.join(__dirname, "..", "public", "index.html")}`,
      "text/html",
      res
    );
  } else if (url === "/style.css") {
    handler(
      `${path.join(__dirname, "..", "public", "style.css")}`,
      "text/css",
      res
    );
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 server error");
  }
};

module.exports = router;
