const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/shopping_cart_queries');

const router = express.Router()

router.get('/', (req, res) => {
  queries.getItems().then((inventory) => {
    let result = inventory
    let keys = Object.keys(req.query)
    keys.forEach((key) => {
      result = result.filter((element) => {
        let sum = ''
        for (var variable in element) {
          sum += `${element[variable]}`
        }
        return (sum).toLowerCase().includes(req.query[key].toLowerCase())
      })
    })
    res.json(result)
  })
})

router.get('/:id', (req, res) => {
  queries.getItemsById(req.params.id).then((items) => {
    res.json(items)
  })
})

router.post('/', (req, res) => {
  queries.postNewProduct(req.body)
    .then((result) => {
      res.json(result)
  })
})

router.put('/:id', (req, res) => {
    queries.putNewField(req.body, req.params.id)
      .then((result) => {
        res.json({message: "Updated!"})
  })
})

router.put('/:id', (req, res) => {
  queries.updateCart(req.body, req.params.id)
    .then((items) => {
      res.json(items)
  })
})

router.delete('/cart/:item', (req, res) => {
queries.deleteIntry(req.params.item)
  .then((result) => {
    res.json({message: "Deleted!"})
})
})


module.exports = router
