const knex = require('../db/knex');
const express = require('express')
const bodyParser = require('body-parser');
const queries = require('../db/user_review_queries');

const router = express.Router()

router.get('/', (req, res) => {
  queries.getReview().then((inventory) => {
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

router.get('/:id', (rep, res) => {
  queries.getReviewById().then((comments) => {
    res.json(comments)
  })
})

router.get('/:score', (rep, res) => {
  queries.getReviewByScore().then((comments) => {
    res.json(comments)
  })
})

router.get('/:title', (rep, res) => {
  queries.getReviewByTitle().then((comments) => {
    res.json(comments)
  })
})

router.get('/:review', (rep, res) => {
  queries.getReviewByProduct().then((comments) => {
    res.json(comments)
  })
})

router.post('/', (req, res) => {
  queries.postNewReview(req.body)
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
  console.log(req.params.id);
  console.log(req.body.review);
  if (req.body.review == ''){
    res.json({
      message: 'update fail'
    })
  }else{
    let review2update = {
      review: req.body.review,
      review_user_id: undefined
    }
    console.log(review2update);
    updateComment(review2update, req.params.id).then((data) => {
      res.json({
        message: 'update success',
        user: data
      })
    })
  }
})

router.delete('/:title', (req, res) => {
  queries.deleteIntry(req.params.title)
    .then((result) => {
      res.json({message: "Deleted!"})
  })
})



module.exports = router
