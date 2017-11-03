
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
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23131940_10155859147168748_6559088587689980013_n.jpg?oh=6b9e47b81c03250fccd9b15f0d9b8f17&oe=5AA1D0A3',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 2,
        title: 'Monkey Business',
        description: 'A fun ,colorful, creative t-shirt that will go with any casual wear.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22885923_10155859147173748_6131228126796314514_n.jpg?oh=6155830f99d2dc2a52dfaf6ad0d0ef5e&oe=5AAB9FFF',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 3,
        title: 'JIMI',
        description: 'The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music".',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22894325_10155859147108748_6202913189106914146_n.jpg?oh=032e83a703b99e87d3ba027f1047e66f&oe=5AA0E883',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 4,
        title: 'Legendary Miles',
        description: 'Miles Davis is synonymous with great Jazz. Here we are highlighting his signature hand position.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23032388_10155859147088748_4237818319702161896_n.jpg?oh=7d48723f37f0a708b35226a7cccb6414&oe=5A778732',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 5,
        title: 'Mile Carter Collection',
        description: 'A clean elegant design that clearly identifies the owner and communicates class!',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22886079_10155859147083748_2513273925417262028_n.jpg?oh=22d66c6bc636369948828cad966ea10a&oe=5AA6A318',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 6,
        title: 'Native Detroiter',
        description: 'I wanted to design something that would represent the pride and love that Detroiters have for their beloved city.',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23167888_10155859147103748_8860916604472817923_n.jpg?oh=ccf0d53b6410ccaddf529ec89dbc84b1&oe=5AA12A9C',
        portrait2_url: '',
        portrait3_url: ''



      }];
    return knex('product').insert(products);
  });
};
