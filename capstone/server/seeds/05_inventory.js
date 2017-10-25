
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "inventory"; ALTER SEQUENCE inventory_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      var quantities = [{
        id: 1,
        quantity: 1,
        product_id: 4,
        size_id: 4
      },{
        id: 2,
        quantity: 1,
        product_id: 2,
        size_id: 1
      },{
        id: 3,
        quantity: 1,
        product_id: 3,
        size_id: 3


      }];

    return knex('inventory').insert(quantities);
  });
};
