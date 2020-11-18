const express = require('express')
const router = express.Router()
const Ticket = require('../models/Flight')
const auth = require('../middlewares/auth')


router.post('/addTicket', auth, (req, res) => {
    console.log(req.body)
    const ticket = new Ticket(req.body)
    ticket.save((err, ticket) => {
        if (err) return res.status(404).json({ success: false })
        res.status(201).json({ success: true })
    })
})

router.post('/userTickets', auth, (req, res) => {
    Ticket.find({ 'userID': req.body.userId }).sort({ '_id': -1 })
        .populate('userID')
        .exec((err, tickets) => {
            if (err) return res.status(404).json({ success: false })
            res.status(201).json({ success: true, tickets })
        })
})


router.post('/removeTicket', (req, res) => {
    console.log(req.body)
    Ticket.findOneAndDelete({ '_id': req.body.id })
        .then((status) => res.status(200).json({ success: true }))
        .catch((err) => res.status(404).json({ success: false, err }))
})

router.post('/removeAllTickets', (req, res) => {
    console.log(req.body)
    Ticket.deleteMany({ 'userID': req.body.userId })
        .then((status) => res.status(200).json({ success: true }))
        .catch((err) => res.status(404).json({ success: false, err }))
})

module.exports = router