 const Banner = require("../models/bannerModel");
const express = require('express');
const router = express.Router();
const {getBanner, createBanner, editBanner, deleteBanner,} = require("../controller/bannerController")
//fetch or get data from database to client
router.get("/",  getBanner)
//now fetch data for specific id from database to client
// router.get('/:id',getProduct)
router.post('/',createBanner)
// how to update and edit data in database
// put and patch or used for update and edit
router.put('/',editBanner)
// how to remove or delete date from database
router.delete("/",deleteBanner )
module.exports = router;
