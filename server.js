require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const {json} = require("express");

app.use(express.json());
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const productRoute = require("./routes/productRoutes.JS")
const userRoute = require("./routes/userRoutes")
//routes
app.use('/api/products',productRoute);
app.use('/api/users',userRoute);
app.get('/',(req,res)=>{
       res.send("Hello Node API")
})
app.get("/blog",(req,res)=>{
     res.send('HELLO BLOGS')
})
//send data from client(client creat) to database

// console.log(req.body);
// res.send(req.body)
mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("Connected to mongoDB")
        app.listen(PORT,()=>{
            console.log(`Node API App is running on port ${PORT}`)
        })

    }).catch((error)=>{
        console.log(error)
})

