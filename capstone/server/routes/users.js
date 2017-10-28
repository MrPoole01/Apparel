const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/user_queries');

const router = express.Router()

router.get('/', (req, res) => {
  queries.getAllUser().then((users) => {
    res.json(users)
  })
})

router.get('/fname/:first_name', (req, res) => {
  queries.getUserByFirstName(req.params.first_name)
    .then((users) => {
      res.json(users)
  })
})

router.get('/lname/:last_name', (req, res) => {
  queries.getUserByLastName(req.params.last_name)
    .then((users) => {
      res.json(users)
  })
})

router.get('/email/:email', (req, res) => {
  queries.getUserByEmail(req.params.email)
    .then((users) => {
      res.json(users)
  })
})

router.get('/pic/:pic', (req, res) => {
  queries.getUserByPic(req.params.pic)
    .then((users) => {
      res.json(users)
  })
})

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id)
    .then((result) => {
      res.json(result)
  })
})

router.post('/', (req, res) => {
  queries.postNewUser(req.body)
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

router.delete('/:name', (req, res) => {
  queries.deleteIntry(req.params.name)
    .then((result) => {
      res.json({message: "Deleted!"})
  })
})

module.exports = router
