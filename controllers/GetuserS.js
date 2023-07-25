const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler( async(req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getUsers,
}