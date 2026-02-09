const fs = require("fs");

// sync file write

// const res = fs.writeFileSync("./test.txt", "Hello World");
// console.log(res);

//async file write

// fs.writeFile("./test.txt", "Hello Arham ", (err) => {});

//sync file read

// const result =(fs.readFileSync("./contacts.txt", "utf-8"));
// console.log(result);

// async file read

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// sync append on file

// const res = fs.appendFileSync(
//   "./test.txt",
//   new Date().getDate().toLocaleString(),
// );
// console.log(res);

// async append on file

// fs.appendFile("./test.txt",)

//copy file sync

fs.cpSync("./test.txt", "./cp.txt");

// delete sync file

// fs.unlinkSync("./copy.txt");
