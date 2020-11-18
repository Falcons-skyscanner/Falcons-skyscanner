const express = require('express')
const router = express.Router()
const Card = require('../models/Card')
const stripe = require('stripe')('sk_test_dz1CxU2WW8F7M8jPi3MTbyb100bjEBXtdD')


router.post('/payment', (req, res) => {
    console.log(req.body)
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    const card = new Card({
        cardUser: req.body.userId,
        amount: req.body.amount,
        currency: 'usd',
        stripeToken: req.body.token.id
    })




    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            console.log(stripeErr)
            res.status(500).send({ success: false });
        } else {
            console.log('success')
            card.save((err, card) => console.log(err))
            res.status(201).json({ success: stripeRes });
        }
    });
});

module.exports = router