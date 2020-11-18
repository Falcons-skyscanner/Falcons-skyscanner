const mongoose = require('mongoose')


//Scheema
const creditSchema = mongoose.Schema({

    cardUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number
    },
    currency: {
        type: String
    },
    stripeToken: {
        type: String
    }
}, { timestamps: true })

//Create the model according to Scheema
const Credit = mongoose.model('Credit', creditSchema)

//exporting the model to use mongoose functions 
module.exports = Credit