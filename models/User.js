const mongoose = require('mongoose')


//Scheema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }

}, { timestamps: true })


//Create the model according to Scheema
const User = mongoose.model('User', userSchema);


//exporting the model to use mongoose functions 
module.exports = User


