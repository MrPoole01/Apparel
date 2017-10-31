const knex = require('./knex')
const bodyParser = require('body-parser')


module.exports = {

  getInventory: function () {
    return knex('inventory').select()
  },

  getInventoryById: function (id) {
    return knex('inventory').select().where('id', id).first()
  },

  getInventoryByQuantity: function (itemId, itemSize) {
    console.log(itemId);
    return knex('inventory')
    .join('product', 'product.id', '=', 'inventory.product_id')
    .join('size', 'size.id', '=', 'inventory.size_id')
    .select('inventory.product_id',
            'product.title',
            'inventory.id as inventory_id',
            'size.id as size_id',
            'size.available',
            'size.t_size'
            )
    .where('product_id', itemId)
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
