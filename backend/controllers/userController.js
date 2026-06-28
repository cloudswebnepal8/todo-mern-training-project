const users = require("../models/userModel");

// exports.getUsers = (req, res) => {
//     res.json(users);
// };

const getUsers=(req,res)=>{
    res.json(users)
}

const deleteuser=(req,res)=>{
    const id=Number(req.params.id)
    const index=users.findIndex(user=>user.id===id)

    if(index===-1){
        return res.send("user not found")
    }
    users.splice(index,1)
    res.send("user deleted")
}

const getUserById = (req, res) => {
    console.log(req.params.id)
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send("User not found");
    }

    res.send(user);
};

module.exports = { getUserById,deleteuser,getUsers };