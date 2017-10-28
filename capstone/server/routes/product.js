const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/product_queries');

const router = express.Router()

router.get('/', (req, res) => {
  queries.getProduct().then((inventory) => {
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
  queries.getProductById(req.params.id)
    .then((items) => {
      res.json(items)
  })
})

router.get('/title/:title', (req, res) => {
  queries.getProductByTitle(req.params.title)
    .then((items) => {
      res.json(items)
  })
})

router.get('/color/:color', (req, res) => {
  queries.getProductByColor(req.params.color)
    .then((items) => {
      res.json(items)
  })
})

router.get('/price/:price', (req, res) => {
  queries.getProductByPrice(req.params.price)
    .then((items) => {
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

router.delete('/:title', (req, res) => {
  queries.deleteIntry(req.params.title)
    .then((result) => {
      res.json({message: "Deleted!"})
  })
})



module.exports = router
