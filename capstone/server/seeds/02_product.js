
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      var products = [{
        id: 1,
        title: 'Nice Shirt',
        description: 'Red',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FT-Shirt-PNG-Image.png&f=1',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 2,
        title: 'Sweet Shirt',
        description: 'Blue',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pitico.com%2Fout%2Fpictures%2Fmaster%2Fproduct%2F2%2Fpitico_shirt_m_27_backside_png.png&f=1',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 3,
        title: 'Big Shirt',
        description: 'Yellow',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs71%2Ff%2F2012%2F328%2F4%2F0%2Fblank_t_shirt__yellow__by_theoneandonly_k-d5m03ai.png&f=1',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 4,
        title: 'Small Shirt',
        description: 'Black',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftshirt%2Ftshirt_PNG5427.png&f=1',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 5,
        title: 'MEEE Shirt',
        description: 'Violet',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftshirt%2Ftshirt_PNG5427.png&f=1',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 6,
        title: 'DAD Shirt',
        description: 'Tan',
        price: 23.00,
        inStock: 20,
        portrait1_url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Ftshirt%2Ftshirt_PNG5427.png&f=1',
        portrait2_url: '',
        portrait3_url: ''



      }];
    return knex('product').insert(products);
  });
};
