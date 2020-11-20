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
const connect = mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/skyscan?retryWrites=true&w=majority',
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
app.use('/api/suggestion', require('./routes/suggestion'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
      })
}

app.use((req,res) => {
    res.send('not found')
})


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})


