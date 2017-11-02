const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const keySecret = process.env.SECRET_KEY;
const keyPublishable = process.env.PUBLISHABLE_KEY;
const stripe = require("stripe")(keySecret);

const router = express.Router()

router.post("/", (req, res) => {
  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount: req.body.amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => {
    res.json({message: "Success!"})
  })
    .catch(function (err) {
      res.json(err)
  })

});


module.exports = router
