const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getItems: function () {
    return knex('shopping_cart').select()
  },

  getItemsById: function (id) {
    return knex('shopping_cart').select().where('id', id).first()
  },

  getItemsByUser: function (user) {
    return knex('shopping_cart')
      .join('user', 'shopping_cart.inventory_user.id', '=', 'user.id')
      .select('user',
              'user.first_name',
              'inventory.product_id',
              'inventory.size_id',
              'inventory.quantity'
            )
      .where('shopping_cart.user_id', user)
  },

  updateCart: (cart, id) => {
    return knex('shopping_cart').where('id', id).update(cart).returning('*');
  },

  deleteIntry: function (item) {
    return knex('shopping_cart').where('item', item).del()
  }
}
