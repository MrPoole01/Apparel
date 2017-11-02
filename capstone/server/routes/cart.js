const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/cart_queries');

const router = express.Router()

var my_amount = {amount: 12.34, currency: "USD"};

router.get("/", (req, res) =>
res.render("index.pug", {keyPublishable, my_amount}));

router.post("/charge", (req, res) => {
  let amount = my_amount.amount * 100;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: my_amount.currency,
         customer: customer.id
    }))
  .then(charge => res.render("charge.pug", {my_amount}));
});

module.exports = router
