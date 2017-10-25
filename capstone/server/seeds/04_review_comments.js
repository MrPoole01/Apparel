
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "customer_review"; ALTER SEQUENCE customer_review_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      var reviews = [{
        id: 1,
        score: 3,
        title: 'Nice digs',
        review: 'Man.. I love the design and the feel of the shirt. Will definitly be back for more!',
        user_id: 1,
        product_id: 1
      },{
        id: 2,
        score: 4,
        title: 'Nice digs',
        review: 'MORE! MORE! ... Love your designs!',
        user_id: 1,
        product_id: 2
      },{
        id: 3,
        score: 2,
        title: 'NAh!',
        review: 'Its cool, but I wouldnt wear it outside the house.',
        user_id: 1,
        product_id: 3
      },{
        id: 4,
        score: 4,
        title: 'Love my new shirt',
        review: 'I wear this eveywhere and get so many compliments, Thanks!',
        user_id: 1,
        product_id: 4


      }];

    return knex('customer_review').insert(reviews);
  });
};
