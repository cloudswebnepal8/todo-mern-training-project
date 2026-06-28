require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connect = require("./config/db");

const app = express();

connect();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/todo", require("./routes/todoRoutes"));

app.listen(process.env.PORT);