const express = require('express');
const mongoose = require("mongoose");
const app = express();
const Product = require('./models/productmodel')
const {json} = require("express");
app.use(express.json());

//routes
app.get('/',(req,res)=>{
       res.send("Hello Node API")
})
app.get("/blog",(req,res)=>{
     res.send('HELLO BLOGS')
})
//send data from client(client creat) to database
app.post('/products',async (req,res)=>{
    try{
    const product = await Product.create(req.body)
    res.status(200).json(product);
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
})
//fetch or get data from database to client
app.get("/products",async (req,res)=>{
    try {
 const product = await Product.find({})
        res.status(200).json(product)
    }catch (error){
        res.status(500).json({message:error.message})
    }
})
//now fetch data for specific id from database to client
app.get('/products/:id',async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch (error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})
// how to update and edit data in database
// put and patch or used for update and edit
app.put('/products/:id',async (req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body,{new: true});
         if(!product){
        //     //we cannot find a product with that id
            return res.status(404).json({message: `cannot find your id ${id}`})
        }
         // const updatedProduct=await Product.findById(id);
        return res.status(200).json(product);
    }catch (error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
})
// how to remove or delete date from database

app.delete("/products/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const  product = await Product.findByIdAndDelete(id)
        if(!product)
        {
            return res.status(404).json({message: `cant find your product id ${id}`})
        }
        return res.send(200).json(product);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})
// console.log(req.body);
// res.send(req.body)
mongoose.connect("mongodb+srv://admin:AZ5121472az@cluster0.djp8f0f.mongodb.net/")
    .then(()=>{
        console.log("Connected to mongoDB")
        app.listen(3000,()=>{
            console.log("Node API App is running on port 3000")
        })

    }).catch((error)=>{
        console.log(error)
})

