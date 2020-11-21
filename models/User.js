const mongoose = require('mongoose')


//Scheema
const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength : 6
    },
    token: {
        type: String
    },
    mobile: {
        type: Number
    },
    address: {
        type: String
    }

}, { timestamps: true })


//Create the model according to Scheema
const User = mongoose.model('User', userSchema);


//exporting the model to use mongoose functions 
module.exports = User