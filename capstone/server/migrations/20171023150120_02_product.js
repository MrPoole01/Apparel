exports.up = function(knex, Promise) {
  return knex.schema.createTable('product', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.integer('price').notNullable()
    table.integer('inStock').notNullable()
    table.string('portrait1_url').notNullable();
    table.string('portrait2_url')
    table.string('portrait3_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('product')
};
