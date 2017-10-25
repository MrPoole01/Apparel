exports.up = function(knex, Promise) {
  return knex.schema.createTable('customer_review', (table) => {
    table.increments()
    table.integer('score').notNullable()
    table.string('title').notNullable()
    table.text('review').notNullable()
    table.integer('user_id').references('user.id').onDelete('CASCADE');
    table.integer('product_id').references('product.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customer_review')
};
