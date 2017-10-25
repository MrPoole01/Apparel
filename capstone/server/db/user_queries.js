const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getAllUser: function () {
    return knex('user').select()
  },

  getUserById: function (id) {
    return knex('user').select().where('id', id).first()
  },

  getUserByFirstName: function (first_name) {
    return knex('user').select().where('first_name', first_name)
  },

  getUserByLastName: function (last_name) {
    return knex('user').select().where('last_name', last_name)
  },

  getUserByEmail: function (email) {
    return knex('user').select().where('email', email)
  },

  getUserByPass: function (password) {
    return knex('user').select().where('password', password)
  },

  getUserByDate: function (date) {
    return knex('user').select().where('date_created', date)
  },

  getUserByPic: function (pic) {
    return knex('user').select().where('portrait_url', pic)
  },

  postNewUser: function (result) {
    return knex('user').insert(result).returning('*')
  },

  putNewField: function (user, id) {
    let info = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      address: user.address,
      city: user.city,
      state: user.state,
      zip_code: user.zip_code,
      date: user.date_created,
      pic: user.portrait_url
    }
    return knex('user').where('id', id).update(info).returning('*')
  },

  deleteIntry: function (name) {
    return knex('user').where('first_name', name).del()
  }
}
