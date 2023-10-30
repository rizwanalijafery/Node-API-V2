const express = require('express')
const {Router} = require("express");
const router = express.Router();
const {getUsers,getUser,createUser,updateUser,deleteUser} = require("../controller/userController")
//get users
router.get("/",getUsers);
//get data from single user
router.get("/:id", getUser);
//create data of single user
router.post("/",createUser);
//update or edit data
router.put("/:id", updateUser);
//delete data from dashboard
router.delete("/:id",deleteUser);
module.exports = router;

