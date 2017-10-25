const encrypt = require('../security/encrypt/encrypt.js')
const Rick = process.env.RECARDO_PASSWORD

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      var users = [{
        id: 1,
        first_name: 'Recardo',
        last_name: 'Poole',
        email: 'recardo.poole@gmail.com',
        address: '2300 Hudson St',
        city: 'Denver',
        state: 'CO',
        zip_code: 80207,
        date_created: new Date,
        portrait_url: '',
        password: encrypt(Rick)
      }];

    return knex('user').insert(users);
  });
};
