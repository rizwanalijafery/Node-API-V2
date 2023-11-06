const mongoose = require("mongoose")
const productSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "please enter Name"]
        },
        FatherName: {
            type:String,
            required: [true, "please enter Father Name"]
        },
        EmailAddress: {
            type:String,
            required: [true ,"please enter Email Address"]
        },
        Password: {
            type:Number,
            required:true
        },
      MobileNumber: {
            type:Number,
            required:true
        },
        Address: {
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)
const Product = mongoose.model("Product",productSchema)
module.exports = Product;