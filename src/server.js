const http = require("http");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;

let router = require("./router");

const server = http.createServer(router);

server.listen(port);

console.log("server running on: http://" + host + ":" + port);

module.exports = {
  server: server,
};
