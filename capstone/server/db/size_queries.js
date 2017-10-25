const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getSize: function () {
    return knex('size').select()
  },

  getSizeById: function (id) {
    return knex('size').select().where('id', id)
  },

  getSizeByName: function (fit) {
    return knex('size').select().where('size', fit)
  },

  postNewSize: function (result) {
    return knex('size').insert(result).returning('*')
  },

  putNewField: function (size, id) {
    let info = {
      size: size.t_size,
      avaialble: size.avaialble
    }
    return knex('size').where('id', id).update(info).returning('*')
  },

  deleteIntry: function (size) {
    return knex('size').where('t_size', size).del()
  }
}
