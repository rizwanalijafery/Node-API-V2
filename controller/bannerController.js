const Banner = require("../models/bannerModel");
const asyncHandler = require('express-async-handler')

const getBanner = asyncHandler(async (req, res) => {
    try {
        const banner = await Banner.find({})
        res.status(200).json(banner[0])
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const createBanner = asyncHandler(async (req, res) => {
    try {
        await Banner.deleteMany({});
        const banner = await Banner.create(req.body)
        res.status(200).json(banner);
    } catch (error) {
        res.status(500).json({
            "message": "Could Not Save Banner"
        })
        throw new Error(error.message)
    }
})
const editBanner = asyncHandler(async (req, res) => {
    try {
        const banner = await Banner.find({})
        res.status(200).json(banner)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteBanner = asyncHandler(async (req, res) => {
    try {
        const banner = await Banner.find(req.body)
        res.status(200).json(banner);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
//get single product
// const getBanner=  asyncHandler(async (req,res)=>{
//     try {
//         const {id}= req.params;
//         const banner = await Banner.findById(id)
//         res.status(200).json(banner)
//     }catch (error){
//         res.status(500)
//         throw new Error(error.message)
// console.log(error.message)
// res.status(500).json({message:error.message})
//     }
// })
//create a product

// const updateBanner = asyncHandler(async (req,res)=>{
//     try {
//         const {id}= req.params;
//         const product = await Product.find(id,req.body,{new: true});
//         if(!product){
//             //     //we cannot find a product with that id
//             res.status(404)
//             throw new Error(`cannot find your id ${id}`);
//             //return res.status(404).json({})
//         }
//         // const updatedProduct=await Product.findById(id);
//         return res.status(200).json(product);
//     }catch (error){
//         res.status(500)
//         throw new Error(error.message)
//     }
// })
// const deleteBanner =asyncHandler( async (req,res)=>{
//     try {
//         const {id} = req.params
//         const  product = await Product.findByIdAndDelete(id)
//         if(!product)
//         {
//             res.status(404)
//             throw new Error( `cant find your product id ${id}`)
//             //return res.status(404).json({message: `cant find your product id ${id}`})
//         }
//         return res.send(200).json(product);
//
//     } catch (error) {
//         res.status(500)
//         throw new Error(error.message)
//     }
// })
module.exports = {
    getBanner, createBanner, editBanner, deleteBanner,
}
