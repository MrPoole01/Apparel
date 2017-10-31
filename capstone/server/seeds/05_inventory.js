
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "inventory"; ALTER SEQUENCE inventory_id_seq RESTART WITH 73;')
    .then(function () {
      // Inserts seed entries
      var quantities = [{
        id: 1,
        product_id: 1,
        size_id: 1
      },{
        id: 2,
        product_id: 1,
        size_id: 2
      },{
        id: 3,
        product_id: 1,
        size_id: 3
      },{
        id: 4,
        product_id: 1,
        size_id: 4
      },{
        id: 5,
        product_id: 1,
        size_id: 5
      },{
        id: 6,
        product_id: 1,
        size_id: 6
      },{
        id: 7,
        product_id: 1,
        size_id: 7
      },{
        id: 8,
        product_id: 1,
        size_id: 8
      },{
        id: 9,
        product_id: 1,
        size_id: 9
      },{
        id: 10,
        product_id: 1,
        size_id: 10
      },{
        id: 11,
        product_id: 1,
        size_id: 11
      },{
        id: 12,
        product_id: 1,
        size_id: 12
      },{
        id: 13,
        product_id: 2,
        size_id: 1
      },{
        id: 14,
        product_id: 2,
        size_id: 2
      },{
        id: 15,
        product_id: 2,
        size_id: 3
      },{
        id: 16,
        product_id: 2,
        size_id: 4
      },{
        id: 17,
        product_id: 2,
        size_id: 5
      },{
        id: 18,
        product_id: 2,
        size_id: 6
      },{
        id: 19,
        product_id: 2,
        size_id: 7
      },{
        id: 20,
        product_id: 2,
        size_id: 8
      },{
        id: 21,
        product_id: 2,
        size_id: 9
      },{
        id: 22,
        product_id: 2,
        size_id: 10
      },{
        id: 23,
        product_id: 2,
        size_id: 11
      },{
        id: 24,
        product_id: 2,
        size_id: 12
      },{
        id: 25,
        product_id: 3,
        size_id: 1
      },{
        id: 26,
        product_id: 3,
        size_id: 2
      },{
        id: 27,
        product_id: 3,
        size_id: 3
      },{
        id: 28,
        product_id: 3,
        size_id: 4
      },{
        id: 29,
        product_id: 3,
        size_id: 5
      },{
        id: 30,
        product_id: 3,
        size_id: 6
      },{
        id: 31,
        product_id: 3,
        size_id: 7
      },{
        id: 32,
        product_id: 3,
        size_id: 8
      },{
        id: 33,
        product_id: 3,
        size_id: 9
      },{
        id: 34,
        product_id: 3,
        size_id: 10
      },{
        id: 35,
        product_id: 3,
        size_id: 11
      },{
        id: 36,
        product_id: 3,
        size_id: 12
      },{
        id: 37,
        product_id: 4,
        size_id: 1
      },{
        id: 38,
        product_id: 4,
        size_id: 2
      },{
        id: 39,
        product_id: 4,
        size_id: 3
      },{
        id: 40,
        product_id: 4,
        size_id: 4
      },{
        id: 41,
        product_id: 4,
        size_id: 5
      },{
        id: 42,
        product_id: 4,
        size_id: 6
      },{
        id: 43,
        product_id: 4,
        size_id: 7
      },{
        id: 44,
        product_id: 4,
        size_id: 8
      },{
        id: 45,
        product_id: 4,
        size_id: 9
      },{
        id: 46,
        product_id: 4,
        size_id: 10
      },{
        id: 47,
        product_id: 4,
        size_id: 11
      },{
        id: 48,
        product_id: 4,
        size_id: 12
      },{
        id: 49,
        product_id: 5,
        size_id: 1
      },{
        id: 50,
        product_id: 5,
        size_id: 2
      },{
        id: 51,
        product_id: 5,
        size_id: 3
      },{
        id: 52,
        product_id: 5,
        size_id: 5
      },{
        id: 53,
        product_id: 5,
        size_id: 5
      },{
        id: 54,
        product_id: 5,
        size_id: 6
      },{
        id: 55,
        product_id: 5,
        size_id: 7
      },{
        id: 56,
        product_id: 5,
        size_id: 8
      },{
        id: 57,
        product_id: 5,
        size_id: 9
      },{
        id: 58,
        product_id: 5,
        size_id: 10
      },{
        id: 59,
        product_id: 5,
        size_id: 11
      },{
        id: 60,
        product_id: 5,
        size_id: 12
      },{
        id: 61,
        product_id: 4,
        size_id: 1
      },{
        id: 62,
        product_id: 6,
        size_id: 2
      },{
        id: 63,
        product_id: 6,
        size_id: 3
      },{
        id: 64,
        product_id: 6,
        size_id: 4
      },{
        id: 65,
        product_id: 6,
        size_id: 5
      },{
        id: 66,
        product_id: 6,
        size_id: 6
      },{
        id: 67,
        product_id: 6,
        size_id: 7
      },{
        id: 68,
        product_id: 6,
        size_id: 8
      },{
        id: 69,
        product_id: 6,
        size_id: 9
      },{
        id: 70,
        product_id: 4,
        size_id: 10
      },{
        id: 71,
        product_id: 6,
        size_id: 11
      },{
        id: 72,
        product_id: 6,
        size_id: 12

      }];

    return knex('inventory').insert(quantities);
  });
};
