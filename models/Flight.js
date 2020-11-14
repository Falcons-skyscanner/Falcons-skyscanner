const mongoose = require('mongoose')

//Scheema
const ticketSchema = mongoose.Schema({
    creditCardID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credit'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    flightNo: {
        required: true,
        type: String
    },
    departureTime: {
        required: true,
        type: String
    },
    arrivalTime: {
        required: true,
        type: String
    },
    departureAirport: {
        required: true,
        type: String
    },
    destinationAirport: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    typeOfFlight: {
        required: true,
        type: String
    }
}, { timestamps: true })

//Create the model according to Scheema
const Ticket = mongoose.model('Ticket', ticketSchema)

//exporting the model to use mongoose functions 
module.exports = Ticket