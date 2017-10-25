const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/inventory_queries');

const router = express.Router()

router.get('/', (req, res) => {
  queries.getInventory().then((inventory) => {
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

router.get('/:inventoryId', (req, res) => {
  queries.getInventoryByQuantity(req.params.inventoryId)
    .then((result) => {
      res.json(result)
  })
})

router.get('/:id', (rep, res) => {
  queries.getInventoryById().then((items) => {
    res.json(items)
  })
})

router.post('/', (req, res) => {
  queries.postNewInventory(req.body)
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

router.delete('/:item', (req, res) => {
  queries.deleteIntry(req.params.item)
    .then((result) => {
      res.json({message: "Deleted!"})
  })
})



module.exports = router
