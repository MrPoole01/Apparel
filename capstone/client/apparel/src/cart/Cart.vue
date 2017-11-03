<template>
  <div class="">
    <div class="container">
      <app-Nav></app-Nav>
      <div class="main">
        <nav class="well well-sm">
          <div class="text-right pull-right">
            <span class="stats">
              {{ cart.items.length }}
              <template v-if="cart.items.length == 1">item</template>
              <template v-else>items</template>
              in cart, totalling {{ cartTotal | currency }}
              <b-btn class="btn btn-primary cartbtn" @click="isShowingCart = true">View Cart</b-btn>
            </span>
          </div>
          <a @click.prevent="isShowingCart = false"><strong>return to items</strong></a>
          <div class="btn-group">
            <a id="list" @click="listWrapper" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-th-list"></span>

            </a>
            <a @click="gridWrapper" id="grid" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-th"></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="container">
        <div v-if="!isShowingCart" id="products" class="row">
          <div v-for="product in products" :class="groupWrapper" class=" col-xs-4 col-lg-4">
            <div class="thumbnail">
              <img class="group list-group-image" :src="product.portrait1_url" alt="" />
                <div class="caption">
                  <h4 class="group inner list-group-item-heading">
                    {{product.title}}
                  </h4>
                  <p class="group inner list-group-item-text">
                    {{product.description}}
                  </p>
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <p class="lead">
                      {{product.price | currency}}
                    </p>
                  </div>
                  <div class="col-xs-8 flex flex-row align-center justify-right fade">
                    <div class="number-in-stock" v-model="selected" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }">
                      {{ product.selected }} {{ product.inStock }} in stock
                    </div>
                    <b-dropdown id="dropDownId" text="Shirt Sizes" variant="primary" class="m-md-2 flex flex-row align-center justify-right">
                      <b-dropdown-item v-for="s in size" :value="s.id" @click="sizeQuantity(s.t_size, product)" :data="s" :key="s.t_size">{{ s.t_size }}</b-dropdown-item>
                    </b-dropdown>
                    <button class="btn btn-success" @click="addProductToCart(product, size)" :disabled="size.available == 0">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h1>Cart</h1>
          <table v-if="cart.items.length > 0" class="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.items">
                <td>
                  <img class="cartImage" :src="item.product.portrait1_url" alt="">
                  {{ item.product.title }} {{ item.product.selected }}

                </td>
                <td>
                  {{ item.quantity }} &nbsp;
                  <button class="btn btn-success" @click="increaseQuantity(item)" :disabled="item.product.inStock == 0">+</button>
                  <button class="btn btn-danger" @click="decreaseQuantity(item)">-</button>
                </td>
                <td>{{ item.quantity * item.product.price | currency }}</td>
              </tr>
              <tr>
                <td class="text-right" colspan="2">
                  <strong>Subtotal</strong>
                </td>
                <td>{{ cartTotal | currency }}</td>
              </tr>
              <tr>
                <td class="text-right" colspan="2">
                  <strong>Taxes</strong>
                </td>

                <td>{{ taxAmount | currency }}</td>
              </tr>
              <tr>
                <td class="text-right" colspan="2">
                  <strong>Grand total</strong>
                </td>

                <td>{{ cartTotal + taxAmount | currency }}</td>
              </tr>
              <tr>
                <td colspan="2"></td>
                <td>
                  <app-Cash
                    :cartTotal="cartTotal"
                    :taxAmount="taxAmount"
                    :cart="cart"></app-Cash>
                </td>
              </tr>
            </tbody>
          </table>
          <p v-else>Your cart is currently empty.</p>
        </div>
      </div>
    </div>
    <app-Bottom class="footer"></app-Bottom>
  </div>
</template>

<script>
  import Nav from '@/main/Nav'
  import Cash from '@/cart/Stripe'
  import Footer from '@/main/Footer'

  export default {
    data () {
      return {
        groupWrapper: "list-group-item",
        isShowingCart: false,
        cart: {
          items: []
        },
        name: true,
        products: [],
        size: [],
        selected: []
      }
    },
    components: {
      appNav: Nav,
      appCash: Cash,
      appBottom: Footer
    },
    mounted() {
      this.fetchItems(),
      this.fetchSizes()
    },
    computed:{
      cartTotal: function() {
        var total = 0;
        this.cart.items.forEach(function(item) {
          total += item.quantity * item.product.price
        });
        return total;
      },
      taxAmount: function() {
        return this.cartTotal * 10 / 1000;
      }
    },
    filters: {
      currency: function(value) {
        var formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2
        });
        return formatter.format(value);
      }
    },
    methods:{
    sizeQuantity(size, product){
      if (! product.selected) {
        this.$set(product, "selected", [])
      }
      product.selected.push(size)
    },
    fetchItems() {
      this.$http.get('https://miles-carter.herokuapp.com/')
      // this.$http.get('http://localhost:8080/')
        .then(response => {
          return response.json()
        })
        .then(data => {
          for (let key in data) {
            this.products.push(data[key])
          }
        })
      },
      fetchSizes() {
        this.$http.get('https://miles-carter.herokuapp.com/size')
          .then(response => {
            return response.json()
          })
          .then(data => {
            for (let key in data) {
              this.size.push(data[key])
            }
          })
        },
      removeItemFromCart(cartItem) {
        var index = this.cart.items.indexOf(cartItem)

        if (index !== -1) {
          this.cart.items.splice(index, 1)
        }
      },
      checkout() {
        if (confirm('Are you sure that you want to purchase these products?')) {
          this.cart.items.forEach(function(item) {
            item.product.inStock += item.quantity
            item.product.selected += item.quantity
          });
          // this.cart.items = []
        }
      },
      addProductToCart(product, size) {
        var cartItem = this.getCartItem(product)
        if (cartItem != null) {
          cartItem.quantity++
        } else {
          this.cart.items.push({
            size: size,
            product: product,
            quantity: 1
          })
        }
        product.inStock--
      },
      increaseQuantity(cartItem) {
        cartItem.product.inStock--
        cartItem.quantity++
      },
      decreaseQuantity(cartItem) {
        cartItem.quantity--
        cartItem.product.inStock++;
        if (cartItem.quantity == 0) {
          this.removeItemFromCart(cartItem)
        }
      },
      getCartItem(product) {
        for (var i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].product.id === product.id) {
            return this.cart.items[i]
          }
        }
        return null
      },
      listWrapper(){
        this.groupWrapper = "list-group-item"
      },
      gridWrapper(){
        this.groupWrapper = "grid-group-item"
      }
    }
  }
</script>

<style scoped>

  .fade {
    opacity: 1;
  }

  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*width: 100%;*/
    /*margin-left: 13%;*/
    text-align: left;
    color: #2c3e50;
    margin-top: 15em;
    margin-bottom: 10em;
  }

  .footer {
    /*position: fixed;*/
    /*bottom: 0;*/
    width: 100%;
    /*z-index: 1000;*/
  }

  strong {
    margin-left: 1em;
  }

  .btn {
    margin-left: .5em;
  }

  .cartImage {
    width: 5em;
    height: 5em;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0em;
    margin-left: 0em;
  }

  .main {
    margin-top: 1em
  }

  .well {
    position: fixed;
    margin-top: -5em;
    background-color: rgba(255, 255, 255, .8);
    width: 70%;
    z-index: 1000;
  }

  .cartbtn {
    margin-left: 2em;
  }

  .glyphicon {
    /*margin-left: 5em;*/
  }

  .lead {
    margin-left: -.8em;
  }

  .flex-row {
    margin-left: -.8em;
  }

  .number-in-stock {
    margin-left: 1em;
  }

  .thumbnail {
    margin-bottom: 3em;
    padding: 1em;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
  }

  .list-group-item {
    float: none;
    width: 100em;
    background-color: #fff;
    margin-bottom: 3em;
    border-style: none;
  }


  .list-group-item .list-group-image {
    display: flex;
    flex-flow: row;
  }

  .list-group-item, .thumbnail {
    margin-bottom: 1em;
  }

  .caption  {
    padding: 1em 1em 0 1em;
  }


  .list-group-item:before, .list-group-item:after {
    display: table;
    content: " ";
  }

  .list-group-item img {
    float: left;
    margin-bottom: 2em;
    width: 100%;
  }

  .list-group-item:after {
    clear: both;
  }

  .list-group-item-text {
    margin: 0 0 1em;
    height: 8em;
  }


</style>
