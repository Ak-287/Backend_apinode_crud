const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const deleteUser = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    deleteUser
}