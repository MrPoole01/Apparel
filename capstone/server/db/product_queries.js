const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getProduct: function () {
    return knex('product').select()
  },

  getProductById: function (id) {
    return knex('product').select().where('id', id)
  },

  getProductByTitle: function (title) {
    return knex('product').select().where('title', title)
  },

  getProductByColor: function (color) {
    return knex('product').select().where('color', color)
  },

  getProductByPrice: function (price) {
    return knex('product').select().where('price', price)
  },

  getProductByPic1: function (pic) {
    return knex('product').select().where('portrait1_url', pic)
  },

  getProductByPic2: function (pic) {
    return knex('product').select().where('portrait2_url', pic)
  },

  getProductByPic3: function (pic) {
    return knex('product').select().where('portrait3_url', pic)
  },

  postNewProduct: function (result) {
    return knex('product').insert(result).returning('*')
  },

  putNewField: function (product, id) {
    let info = {
      title: product.title,
      color: product.color,
      price: product.price,
      pic1: product.portrait1_url,
      pic2: product.portrait2_url,
      pic3: product.portrait3_url
    }
    return knex('product').where('id', id).update(info).returning('*')
  },

  deleteIntry: function (title) {
    return knex('product').where('title', title).del()
  }
}
