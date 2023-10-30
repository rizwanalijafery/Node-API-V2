const mongoose = require("mongoose");
const userSchema = mongoose.Schema
(
    {
        name:{
            type:String,
            required:[true,"please enter the user name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,

        },
            image:{
            type:String,
            required:false,
        },
    },
    {
        timestamps:true
    }
)
const User = mongoose.model("User",userSchema)
module.exports = User;