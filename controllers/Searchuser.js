const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const searchuser = asyncHandler(async(req,res) => {
    try {
        const user = await User.find({
            "$or":[
                {name:{$regex:req.params.key}},
                {email:{$regex:req.params.key}},
                {dob:{$regex:req.params.key}},
                {loaction:{$regex:req.params.key}},
                {gender:{$regex:req.params.key}},
                {address:{$regex:req.params.key}}
            ]
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    searchuser
}