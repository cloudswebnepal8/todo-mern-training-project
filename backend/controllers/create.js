const Student = require("../models/Student")
// const addStudent = async () => {
//     const data = await Student.create({
//         name: "ajay",
//         age: 22,
//         course: "mern"
//     })
//     console.log(data)
// }
// addStudent()
const addStudent=async(req,res)=>{
    try{
        const data =await Student.create(req.body);
        res.json(data)
    }
    catch(err){
        res.status(500).json({error:error.message})
    }
}
// const getStudent=async(req,res)=>{
//     try{
//         const data =await Student.find();
//         res.json(data)
//     }
//     catch(err){
//         res.status(500).json({error:error.message})
//     }
// }

// const updateStudent = async (req, res) => {
//   const data = await Student.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );
//   res.json(data);
// };

module.exports={addStudent}
// module.exports={addStudent,getStudent,updateStudent}