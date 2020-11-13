const mongoose = require('mongoose')


//Scheema

const userSchema = mongoose.Schema({

    name :{type:String, required:true},
    email :{type:String, required:true, unique: true},
    password :{type:String, required:true},
    token :{type:String, required:true},
    mobile :{type:Number, required:true, unique: true},
    address :{type:String, required:true},
    note :{type:String, required:true}

}, {timestamps: true})


const User = mongoose.model('User', userSchema);


