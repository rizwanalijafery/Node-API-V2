 const Product = require("../models/productmodel");
const express = require('express');
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require("../controller/productController")

//fetch or get data from database to client
router.get("/", getProducts)
//now fetch data for specific id from database to client
router.get('/:id',getProduct)
router.post('/',createProduct)
// how to update and edit data in database
// put and patch or used for update and edit
router.put('/:id',updateProduct)
// how to remove or delete date from database
router.delete("/:id",deleteProduct )
module.exports = router;