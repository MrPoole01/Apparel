const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getInventory: function () {
    return knex('inventory').select()
  },

  getInventoryById: function (id) {
    return knex('inventory').select().where('id', id).first()
  },

  getInventoryByQuantity: function (items) {
    return knex('inventory')
    .join('product', 'inventory.size_product_id', '=', 'product.id')
    // .join('size', 't_size.size_id', '=', 'size.id')
    .select('title.product.id',
            'color.product.id',
            'size.t_size',
            'inventory.quantity'
            )
    .where('inventory.size_id', items)
  },

  postNewInventory: function (result) {
    return knex('inventory').insert(result).returning('*')
  },

  putNewField: function (inventory, id) {
    let info = {
      inventory: inventory.quantity
    }
    return knex('inventory').where('id', id).update(info).returning('*')
  },

  deleteIntry: function (item) {
    return knex('inventory').where('inventory', item).del()
  }
}
