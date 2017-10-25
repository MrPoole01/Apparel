exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_cart', (table) => {
    table.increments()
    table.integer('user_id').references('user.id');
    table.integer('inventory_id').references('inventory.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shopping_cart')
};
