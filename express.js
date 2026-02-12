const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Home page");
});

// app.get("/about", (req, res) => {
//   return res.send(`Hello ${req.query.name}`);
// });
app.get("/about", (req, res) => {
  console.log(req.query); // 👈 Add this line
  return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => {
  console.log("server started ");
});
