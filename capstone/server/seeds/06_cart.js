
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "shopping_cart"; ALTER SEQUENCE shopping_cart_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      var cart = [{
        id: 1,
        user_id: 1,
        inventory_id: 2
      },{
        id: 2,
        user_id: 1,
        inventory_id: 3

      }];

      return knex('shopping_cart').insert(cart);
    });
};
