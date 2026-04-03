const express = require("express");
const app = express();
const db = require("./utils/db_connection");
const studentRoute = require("./routes/studentRoutes");
//models
const studentModel = require("./models/students");

app.use(express.json());
app.use("/students", studentRoute);

db.sync()
  .then(() => {
    app.listen(3000, (err) => {
      console.log("Server is running in port no 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
