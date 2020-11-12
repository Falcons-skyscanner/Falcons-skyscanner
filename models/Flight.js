const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
flightNo: {
    required:'required', type: 'string'
  },
  departureTime: {
    required:'required', type: 'string'
  },
  arrivalTime: {
    required:'required', type: 'string'
  },
  departureAirport: {
    required:'required', type: 'string'
  },
  destinationAirport: {
    required:'required', type: 'string'
  },
  price: {
    required:'required', type: 'string'
  },
  typeOfFlight: {
    required:'required', type: 'array'
  },
  creditCard: {
    required:'required', type: 'objectId'
  },
  users: {
    required:'required', type: 'objectId'
  }
}, {timestamps: true})
const Post = mongoose.model('Post', postSchema);