const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/auth')



router.get('/auth' , auth , (req,res) => {
    res.json({
        id : req.user._id,
        name : req.user.name,
        email: req.user.email,
        success: true
    })
})

router.post('/signup', async (req, res) => {
    console.log(req.body)
    try {
        const hashedPw = await bcrypt.hash(req.body.password, 10) // hasing the pw
        console.log(hashedPw)
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPw
        })
        await user.save()  // storing hashedpw to db
        const token = await jwt.sign({ _id: user._id }, 'secret') // generate token
        console.log(token)
        res.header('auth-sky', token).status(201).json({
            success: true,
            token,
            userId : user._id
        }) // send token as a res and header

    } catch {
        res.status(404).json({
            success: false
        })

    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }) // find user  in db
        const match = await bcrypt.compare(req.body.password, user.password) // compare given password with hashed db password
        console.log(match)
        if (match) {
            const token = await jwt.sign({ _id: user._id }, 'secret') // generate token in password match
            res.header('auth-sky', token).status(201).json({ // sending token as a res and header
                success: true,
                token,
                userId : user._id
            })
        }
    } catch {
        res.status(404).json({ success: false })
    }
})



module.exports = router