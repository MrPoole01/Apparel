const knex = require('./knex')
const bodyParser = require('body-parser')

module.exports = {

  getCustomerInfo: function () {
    return knex('customer').select()
  },

  postToken: function (result) {
    return knex('customer').insert(result).returning('*')
  }
}
