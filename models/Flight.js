const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema({
flightNo: {
    required:true, type: String
  },
  departureTime: {
    required:true, type: String
  },
  arrivalTime: {
    required:true, type: String
  },
  departureAirport: {
    required:true, type: String
  },
  destinationAirport: {
    required:true, type: String
  },
  price: {
    required:true, type: String
  },
  typeOfFlight: {
    required:true, type: String
  },
  creditCard:  {        type : mongoose.Schema.Types.ObjectId,        ref: 'Credit'    },
  users:  {        type : mongoose.Schema.Types.ObjectId,        ref: 'User'    }
}, {timestamps: true})
const Ticket = mongoose.model('Ticket', ticketSchema);