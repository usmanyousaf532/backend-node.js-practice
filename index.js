const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));

// get all users
app.get("/api/users", (req, res) => {
  return res.json(users);
});
// for html
// app.get("/users", (req, res) => {
//   const html = `
//     <ul>
//       ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//   `;

//   res.send(html);
// });

// get user with id

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((res, req) => {
    return res.json({ status: "pending" });
  })
  .delete((res, req) => {
    return res.json({ status: "pending" });
  });

// post create new user

app.post("/api/users", (res, req) => {
  return res.json({ status: "pending" });
});

// //edit user
// app.patch("/api/users/:id", (res,req)=>{
//     return res.json({status: "pending" })
// })

// // delete user
// app.delete("/api/users/:id", (res,req)=>{
//     return res.json({status: "pending" })
// })
