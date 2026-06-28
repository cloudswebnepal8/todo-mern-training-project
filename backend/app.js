// // const express = require("express");
// // const app = express();

// // const userRoute = require("./routes/userRoute");

// // app.use("/", userRoute);

// // app.listen(3000, () => {
// //     console.log("Server running on port 3000");
// // });

// const express = require("express");
// const app = express();
// // const Student=require("./models/Student")

// const userRoutes = require("./routes/userRoutes");

// // app.use("/", userRoutes);
// require("./db")
// app.use(express.json())
// // app.post("/students",async(req,res)=>{
// //     const data=await Student.create(req.body);
// //     res.json(data)
// // })


// // app.get("/students",async(req,res)=>{
// //     const data=await Student.find();
// //     res.json(data)
// // })

// app.use("/",userRoutes)
// app.listen(3001, () => {
//     console.log("Server running on port 3000");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const fileRoute = require("./routes/fileRoute");

// const app = express();
// app.use(express.static("public"));

// require("./db")
// app.use("/", fileRoute);

// app.listen(3000, () => console.log("Server Running"));


const express = require("express");
const mongoose = require("mongoose");
const fileRoutes = require("./routes/fileRoutes");

const app = express();
app.use(express.static("public"))


require("./db")
app.use("/", fileRoutes);
app.use("/uploads", express.static("uploads"));

app.listen(3000, () => console.log("Server Running"));

