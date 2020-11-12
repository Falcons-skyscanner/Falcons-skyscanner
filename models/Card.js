const mongoose = require('mongoose')


//Scheema

const postSchema = mongoose.Schema({

    cardNo: {
        required:'required', type: 'string'
      },
      cvv: {
        required:'required', type: 'string'
      },
      expiryDate: {
        required:'required', type: 'string'
      },
      users: {
        required:'required', type: 'objectId'
      }

}, {timestamps: true})


const Post = mongoose.model('Post', postSchema);


