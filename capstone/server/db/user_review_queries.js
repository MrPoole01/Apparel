const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getReview: function () {
    return knex('customer_review').select()
  },

  getReviewById: function (id) {
    return knex('customer_review').select().where('id', id).first()
  },

  getReviewByScore: function (score) {
    return knex('customer_review').select().where('score', score)
  },

  getReviewByTitle: function (title) {
    return knex('customer_review').select().where('title', title)
  },

  getReviewByProduct: function (review) {
    return knex('customer_review').select().where('review', review)
  },

  getReviewByProduct: function (productId) {
    return knex('customer_review')
      .join('user', 'customer_review.product_user_id' , '=', 'user.id')
      .select('customer_review.id', 'user.first_name', 'customer_review.review')
      .where('customer_review.product_id', productId)
  },

  postNewReview: function (result) {
    return knex('customer_review').insert(result).returning('*')
  },

  putNewField: function (customer_review, id) {
    let info = {
      score: customer_review.score,
      title: customer_review.title,
      review: customer_review.review
    }
    return knex('customer_review').where('id', id).update(info).returning('*')
  },

  updateReview: (review, id) => {
    return knex('customer_review').where('id', id).update(review).returning('*');
  },

  deleteIntry: function (review) {
    return knex('customer_review').where('review', review).del()
  }

}
