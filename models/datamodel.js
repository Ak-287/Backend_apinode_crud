const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({

    name:{
        type : String, 
        required: true,
    },
        
    email:{
        type : String , 
        required : true, 
        unique : true,
    },
        
    phone:{
        type : Number, 
        required : true, 
        unique : true
    },
        
    image:{
        type : String, 
        required : true, 
        unique : true,
    },
        
    dob:{
        type : String, 
        required: true,
    },
        
    location:{
        type : String, 
        required : true,
    },
        
    gender:{
        type : String, 
        required : true,
    },
        
    address:{
        type : String, 
        required : true,
    }
},
{
    timestamps: true
}
)

const User = mongoose.model('User', dataSchema);

module.exports = User;