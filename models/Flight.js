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
        type: String,
        unique : true
    },
    outboundDate: {
        type: String
    },
    inboundDate: {
        type: String
    },
    carrierOutboundLeg: {
        required: true,
        type: String
    },
    originOutboundLeg: {
        required: true,
        type: String
    },
    destinationOutboundLeg: {
        required: true,
        type: String
    },
    carrierInboundLeg: {
        required: true,
        type: String
    },
    originInboundLeg: {
        required: true,
        type: String
    },
    destinationInboundLeg: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    }
}, { timestamps: true })

//Create the model according to Scheema
const Ticket = mongoose.model('Ticket', ticketSchema)

//exporting the model to use mongoose functions 
module.exports = Ticket