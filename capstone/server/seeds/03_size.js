
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "size"; ALTER SEQUENCE size_id_seq RESTART WITH 13;')
    .then(function () {
      // Inserts seed entries
      var sizes = [{
        id: 1,
        t_size: 'XS Mens',
        avaialble: 20
      },{
        id: 2,
        t_size: 'SM Mens',
        avaialble: 20
      },{
        id: 3,
        t_size: 'M Mens',
        avaialble: 20
      },{
        id: 4,
        t_size: 'L Mens',
        avaialble: 20
      },{
        id: 5,
        t_size: 'XL Mens',
        avaialble: 20
      },{
        id: 6,
        t_size: 'XXL Mens',
        avaialble: 20
      },{
        id: 7,
        t_size: 'XXXL Mens',
        avaialble: 20
      },{
        id: 8,
        t_size: 'XL Mens',
        avaialble: 20
      },{
        id: 9,
        t_size: 'XL Mens',
        avaialble: 20
      },{
        id: 10,
        t_size: 'XS Womens',
        avaialble: 20
      },{
        id: 11,
        t_size: 'M Womens',
        avaialble: 20
      },{
        id: 12,
        t_size: 'L Womens',
        avaialble: 20
      

    }];
    return knex('size').insert(sizes);
  });
};
