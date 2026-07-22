require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connect = require("./config/db");

const app = express();
app.get("/", (req, res) => {
    res.send("Backend is running on Render!");
});

connect();

app.use(cors({
    origin: "https://frontendweb-m9iq.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/todo", require("./routes/todoRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});