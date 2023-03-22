const handler = require("./handler");
const https = require("https");
const path = require("path");
const food = require("../data/food.json");

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
  } else if (url === "/fetch.js") {
    handler(
      `${path.join(__dirname, "..", "public", "fetch.js")}`,
      "text/js",
      res
    );
  } else if (url.includes("/search")) {
    const data = url.split("?q=")[1];
    const myData = food.ingredients.filter((e) => e.startsWith(data));
    res.writeHead(200), res.end(JSON.stringify(myData));
  } else if (url.includes("/result")) {
    const data = url.split("?q=")[1];
    https.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${data}&app_id=aa0ecd38&app_key=%20faaaf58a1de94869c3e7173cc85c005d%09&imageSize=REGULAR&random=true`,
      (resps) => {
        let allData = "";
        resps.on("data", (chunck) => {
          allData += chunck;
        });
        resps.on("end", () => {
          let mydata = JSON.parse(allData);
          res.writeHead(200);
          res.end(JSON.stringify(mydata.hits));
        });
      }
    );
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 server error");
  }
};

module.exports = router;
