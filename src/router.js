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
  } else if (url === "/index.js") {
    handler(
      `${path.join(__dirname, "..", "public", "index.js")}`,
      "text/js",
      res
    );
  } else if (url === "/data/food.json") {
    handler(
      `${path.join(__dirname, "..", "data", "food.json")}`,
      "text/json",
      res
    );
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 server error");
  }
};

module.exports = router;
