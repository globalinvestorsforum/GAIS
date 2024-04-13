const express = require("express");
const router = new express.Router();
const bodyParser = require("body-parser");

const { sendEmail } = require("../controllers/emailControllers");



router.post("/sendEmail", (req , res)=>{
    console.log(req.body);
    router.post("/sendEmail", sendEmail);
});

module.exports = router;