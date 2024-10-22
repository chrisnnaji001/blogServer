const express = require('express');
const User = require('../models/User');
const router = express.Router();

// fetch all user endpoint
router.get(' /user', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({sucess:true, data: user });
    }catch (error){
        res.status(500).json({
            sucess:false,
            message:'failed to get user data',
            error:error.message
        })
    }

});

module.exports = router;