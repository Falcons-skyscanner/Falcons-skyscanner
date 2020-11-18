const mongoose = require('mongoose')


//Scheema
const suggestionSchema = mongoose.Schema({
    name: {
        type: String
    },
    placeId: {
        type: String
    },
    imgUrl: {
        type: String
    }
}, { timestamps: true })

//Create the model according to Scheema
const Suggestion = mongoose.model('Suggestion', suggestionSchema)

//exporting the model to use mongoose functions 
module.exports = Suggestion