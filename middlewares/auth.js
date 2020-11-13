const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    try {
        const token = req.header('auth-sky')
        if (token) {
            const decoded = await jwt.verify(token, 'secret')
            // console.log(userId)
            const user = await User.findOne({_id: decoded._id})
            // console.log(user)
            req.user = user
            next()

        }
    }catch{
        res.status(404).json({ success : false })
    }
    
}


module.exports = auth