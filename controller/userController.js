const User = require("../models/userModel");

const getUsers = async (req,res)=>{
    try
    {
        const user = await User.find({})
        res.status(200).json(user)
    }
    catch (error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}
//get single user data from data base


const getUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById({id});
        res.status(200).json(user)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }

}
//enter new data in database
const createUser = async (req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
}
//update user by id
const updateUser = async (req,res)=>
{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!user){
        return res.status(404).json({message: `cannot find your id ${id}`})
    }
    res.status(500).json(user)
    }
    catch (error)
    {
        res.status(500).json({message:error.message})
    }
}
 const deleteUser = async (req,res)=>{
    try{
    const {id} = req.params;
    const user = await User.findByIdAndDelete({id})
     if(!user){
         res.status(404).json({message: `cannot find user by ${id}`})
     }
     res.status(500).json(user);
    }
    catch (error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
 }

module.exports = {
    getUsers,getUser,createUser,updateUser,deleteUser
}