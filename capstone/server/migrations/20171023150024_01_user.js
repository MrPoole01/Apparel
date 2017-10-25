
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.text('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('address').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.integer('zip_code').notNullable()
    table.date('date_created').notNullable()
    table.string('portrait_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
