const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET Requests are disabled");
//   } else {
//     next();
//   }
// });

//Site Under Maintenance
// app.use((req, res, next) => {
//   res.status(503).send("Sorry site under maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse");

  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse", {
    expiresIn: "7 days"
  });

  console.log(data);
};

myFunction();
