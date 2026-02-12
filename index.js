// https

const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.method} ${req.url}New req received\n`;

  //   console.log("New req res");
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    //  res.end("Hello from server again");

    switch (myUrl.pathname) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("search page" + search);
        break;
      default:
        res.end("404 error page not found ");
    }
  });
});

myServer.listen(8000, () => {
  console.log("server started");
});
