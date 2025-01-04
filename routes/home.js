const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {

    res.render("home" , {
        layout:undefined,
    })
})


module.exports = router