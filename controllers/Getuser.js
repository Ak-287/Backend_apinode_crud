const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const getUser = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getUser
}