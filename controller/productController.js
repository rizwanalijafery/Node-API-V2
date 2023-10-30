const Product = require("../models/productmodel");
const asyncHandler = require('express-async-handler')

const getProducts =  asyncHandler(async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    }catch (error){
        res.status(500)
        throw new Error(error.message)
    }
})
//get single product
const getProduct=  asyncHandler(async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch (error){
        res.status(500)
        throw new Error(error.message)
        // console.log(error.message)
        // res.status(500).json({message:error.message})
    }
})
//create a product
const createProduct = asyncHandler(async (req  ,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error){
        res.status(500)
        throw new Error(error.message)
    }
})
const updateProduct = asyncHandler(async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body,{new: true});
        if(!product){
            //     //we cannot find a product with that id
            res.status(404)
            throw new Error(`cannot find your id ${id}`);
            //return res.status(404).json({})
        }
        // const updatedProduct=await Product.findById(id);
        return res.status(200).json(product);
    }catch (error){
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteProduct =asyncHandler( async (req,res)=>{
    try {
        const {id} = req.params
        const  product = await Product.findByIdAndDelete(id)
        if(!product)
        {
            res.status(404)
            throw new Error( `cant find your product id ${id}`)
            //return res.status(404).json({message: `cant find your product id ${id}`})
        }
        return res.send(200).json(product);

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
module.exports = {
    getProducts,getProduct,createProduct,updateProduct,deleteProduct,
}