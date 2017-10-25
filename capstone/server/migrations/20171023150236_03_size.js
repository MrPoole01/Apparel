exports.up = function(knex, Promise) {
  return knex.schema.createTable('size', (table) => {
    table.increments()
    table.string('t_size').notNullable()
    table.integer('avaialble').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('size')
};
