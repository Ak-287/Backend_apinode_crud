const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const addUser =asyncHandler(async(req,res) =>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    addUser
}