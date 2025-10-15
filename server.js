const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const studentRoutes = require("./studentRoutes"); //import router

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/studentsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connnected to mongoDB"))
.catch((err) => console.error(" Mongo connection error:", err));

app.use("/students", studentRoutes); //use router

app.listen(3000, () => console.log("Server is running on https://localhost:3000"));


