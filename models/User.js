const mongoose = require('mongoose')


//Scheema

const postSchema = mongoose.Schema({

    userid :{type:'Number', required:'required'},
    name :{type:'String', required:'required'},
    email :{type:'String', required:'required'},
    password :{type:'String', required:'required'},
    token :{type:'String', required:'required'},
    dateCreated :{type:'String', required:'required'},
    mobile :{type:'Number', required:'required'},
    address :{type:'String', required:'required'},
    note :{type:'String', required:'required'}

}, {timestamps: true})


const Post = mongoose.model('Post', postSchema);


