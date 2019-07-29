
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      var products = [{
        id: 1,
        title: 'Nuthin But A G Thang',
        description: 'As a member of the g55 cohort at Galvanize, this shirt represents the hard work my classmates and I put in to become Full Stack Developers!',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/2ZhqRuZ',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 2,
        title: 'Monkey Business',
        description: 'A fun ,colorful, creative t-shirt that will go with any casual wear.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/32XA3a4',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 3,
        title: 'JIMI',
        description: 'The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music".',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/2ZiVBLW',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 4,
        title: 'Legendary Miles',
        description: 'Miles Davis is synonymous with great Jazz. Here we are highlighting his signature hand position.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/2YyyXSC',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 5,
        title: 'Mile Carter Collection',
        description: 'A clean elegant design that clearly identifies the owner and communicates class!',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/2ylwZ9v',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 6,
        title: 'Native Detroiter',
        description: 'I wanted to design something that would represent the pride and love that Detroiters have for their beloved city.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'http://bit.ly/2K8ZsF7',
        portrait2_url: '',
        portrait3_url: ''



      }];
    return knex('product').insert(products);
  });
};
