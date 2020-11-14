const mongoose = require('mongoose')


//Scheema
const creditSchema = mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cardNo: {
        required: true,
        type: String,
        unique: true
    },
    cvv: {
        required: true,
        type: String
    },
    expiryDate: {
        required: true,
        type: String
    }

}, { timestamps: true })

//Create the model according to Scheema
const Credit = mongoose.model('Credit', creditSchema)

//exporting the model to use mongoose functions 
module.exports = Credit