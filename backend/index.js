const express = require("express")
const app = express()
app.use(express.json()); // Parse JSON request body

const jwt = require("jsonwebtoken");
const connection = require("./db");

connection();

app.post("/signup", async (req, res) => {
    const userData = req.body;
    if (userData.email && userData.password) {
        const db = await connection();
        const collection = await db.collection('users')
        const result = await collection.insertOne(userData)
        if (result) {
            jwt.sign(userData, "Google", { expiresIn: '5d' }, (error, token) => {
                res.send({
                    success: true,
                    msg: 'signup done',
                    token
                })

            })

        }



    }

    else {
        res.send({
            success: false,
            msg: 'signup not done',
        })

    }



    res.send("api in run")
})
app.listen(4002, () => console.log("Server Running"))