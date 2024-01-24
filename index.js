const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.write("hello..");
  res.end();
});

server.listen(8080, () => {
  console.log("server is running..");
});
