// https

const http = require("http");
const fs = require("fs")
const myServer = http.createServer((req, res) => {
  console.log("New req res");
  res.end("Hello from server");
});

// myServer.listen(8000, () => {
//   console.log("server started");
// });
