const User = require('../models/datamodel')
const asyncHandler = require('express-async-handler')

const updateUser = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            res.status(404);
            throw new Error(`cannot find any user with ID ${id}`);
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports ={
    updateUser
}