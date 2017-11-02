const knex = require('./knex')
const bodyParser = require('body-parser')

module.exports = {

  getAllUser: function () {
    return knex('customer').select()
  },

  postNewUser: function (result) {
    return knex('customer').insert(result).returning('*')
  }
}
