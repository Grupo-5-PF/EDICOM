const router = require('express').Router();
const express = require('express');

const loggingIn = require("../controllers/loggings/loggingInController");      
const changePassword = require("../controllers/loggings/changePasswordController");
const sendEmail = require("../controllers/loggings/sendEmailController");

router.use(express.json());
router.post("/loggingIn", loggingIn);                   //      http://localhost:3001/loggings/add
router.put("/changepassword", changePassword);
router.post("/sendEmail", sendEmail);

router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /spendings")
})


module.exports = router;