exports.up = function(knex, Promise) {
  return knex.schema.createTable('inventory', (table) => {
    table.increments()
    table.integer('quantity').notNullable()
    table.integer('product_id').references('product.id');
    table.integer('size_id').references('size.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('inventory')
};
