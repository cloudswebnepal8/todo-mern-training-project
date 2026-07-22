require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connect = require("./config/db");

const app = express();
app.get("/", (req, res) => {
    res.send("Backend is running successfully on Render!");
});

connect();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/todo", require("./routes/todoRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});