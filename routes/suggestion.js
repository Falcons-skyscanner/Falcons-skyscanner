const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion')
const auth = require('../middlewares/auth')


router.post('/addSuggestion', auth, (req, res) => {
    req.body.map((el) => {
        console.log(">>", el)
        const suggestion = new Suggestion(el)
        suggestion.save((err, suggestion) => {
            if (err) return res.status(404).json({ success: false })
        })
    })
    console.log(req.body.length)
    res.status(201).json({ success: true })
})

router.get('/getSuggestion', auth, (req, res) => {
    Suggestion.find()
        .exec((err, suggested) => {
            if (err) return res.status(404).json({ success: false })
            res.status(201).json({ success: true, suggested})
        })
})

module.exports = router