const router = require("express").Router();


//REGISTER

router.post("/register",(req,res) =>{
    res.send("hey it's auth route");
})

module.exports = router