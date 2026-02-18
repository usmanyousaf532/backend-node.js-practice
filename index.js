const express = require("express");
// const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const { error } = require("console");
const { type } = require("os");

const app = express();

const PORT = 8000;

//connection
mongoose
  .connect("mongodb://127.0.0.1:27017/practice1")
  .then(() => console.log("MongoDb connected "))
  .catch((err) => console.log("Mongo Error", err));

//schema

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("user", userSchema);

// middleWare

app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));

// get all users
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});
// for html
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
      ${allDbUsers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join("")}
    </ul>
  `;

  res.send(html);
});

// get user with id

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);

    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "M Yousaf" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
  });

// post create new user

app.post("/api/users", async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Fields are required..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  // console.log("result", result);

  return res.status(201).json({
    msg: "success",
  });
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "Success", id: users.length });
  // });
});

// //edit user
// app.patch("/api/users/:id", (res,req)=>{
//     return res.json({status: "pending" })
// })

// // delete user
// app.delete("/api/users/:id", (res,req)=>{
//     return res.json({status: "pending" })
// })
