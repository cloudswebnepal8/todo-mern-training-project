// const mongoose = require("mongoose");

// const connection = async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017/backend");
//   console.log("Database Connected");
// };

// module.exports = connection;


const mongoose=require("mongoose");

const connect=()=>{
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"));
}

module.exports=connect;