const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const searchbydob = asyncHandler(async(req,res) => {
    try {
        const user = await User.find({
            "$or":[
                {dob:{$regex:req.params.key}}
            ]
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    searchbydob
}