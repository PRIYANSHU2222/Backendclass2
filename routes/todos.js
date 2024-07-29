//route ko define karna hoga or controllers k sath map karana hoga .. so phle hm controller ko import krayengey or uske bad route define karengey.......
const express = require("express");
const router = express.Router();


//import controller 
const {createTodo} = require("../contollers/createTodo");

//define api route
//post ka route isliye kar rahe hai kyuki hameycreete krna hai


router.post("/createTodo",createTodo);//path ko controller sey map karadiya 

module.exports = router;
