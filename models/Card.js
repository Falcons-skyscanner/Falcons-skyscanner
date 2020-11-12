const mongoose = require('mongoose')


//Scheema

const creditSchema = mongoose.Schema({

    cardNo: {
        required:true, type:String, unique: true
      },
      cvv: {
        required:true, type:String
      },
      expiryDate: {
        required:true, type:String
      },
      users:  {        type : mongoose.Schema.Types.ObjectId,        ref: 'User'    }

}, {timestamps: true})


const Credit = mongoose.model('Credit', creditSchema);


