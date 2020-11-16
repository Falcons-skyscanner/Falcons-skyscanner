const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// express initializations
const app = express()


// MiddleWares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Connecting with MongoDB
const connect = mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/skyscan?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))






// setting up my routs 
app.use('/api/users', require('./routes/users'));
app.use('/api/flights', require('./routes/flights'));
app.use('/api/card', require('./routes/card'));



app.use((req,res) => {
    res.send('not found')
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})


