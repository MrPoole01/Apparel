<template>
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
            List
          </a>
          <a @click="gridWrapper" id="grid" class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-th"></span>Grid
          </a>
        </div>
      </nav>
    </div>
    <div class="container">
      <div v-if="!isShowingCart" id="products" class="row">
        <div v-for="product in products" :class="groupWrapper" class=" col-xs-6 col-lg-6">
          <div class="thumbnail">
            <img class="group list-group-image" src="http://placehold.it/250x400/000/fff" alt="" />
              <div class="caption">
                <h4 class="group inner list-group-item-heading">
                  {{product.name}}
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
                <div class="col-xs-8 flex flex-row align-center justify-right">
                  <div class="number-in-stock" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }">
                    {{ product.inStock }} in stock
                  </div>
                  <button class="btn btn-success" @click="addProductToCart(product)" :disabled="product.inStock == 0">Add to cart</button>
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
              <td>{{ item.product.name }}</td>
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
              <td><button class="btn btn-success" @click="checkout">Checkout</button></td>
            </tr>
          </tbody>
        </table>
        <p v-else>Your cart is currently empty.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from "@/main/Nav"

  export default {
    data () {
      return {
        groupWrapper: "list-group-item",
        isShowingCart: false,
        cart: {
          items: []
        },
        products: [
          {
            id: 1,
            name: "MacBook Pro (15 inch)",
            description:
            "This laptop has a super crisp Retina display. Yes, we know that it's overpriced...",
            price: 2999,
            inStock: 50
          },
          {
            id: 2,
            name: "Samsung Galaxy Note 7",
            description:
            "Unlike the overpriced MacBook Pro, we're selling this one a bit cheap, as we heard it might explode...",
            price: 299,
            inStock: 755
          },
          {
            id: 3,
            name: "HP Officejet 5740 e-All-in-One-printer",
            description:
            "This one might not last for so long, but hey, printers never work anyways, right?",
            price: 149,
            inStock: 5
          },
          {
            id: 4,
            name: "iPhone 7 cover",
            description:
            "Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?",
            price: 49,
            inStock: 42
          },
          {
            id: 5,
            name: "iPad Pro (9.7 inch)",
            description:
            "We heard it's supposed to be pretty good. At least that's what people say.",
            price: 599,
            inStock: 0
          },
          {
            id: 6,
            name: "OnePlus 3 cover",
            description:
            "Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!",
            price: 19,
            inStock: 81
          }
        ]
      }
    },
    components: {
      appNav: Nav
    },
    computed:{
      cartTotal: function() {
        var total = 0;
        this.cart.items.forEach(function(item) {
          total += item.quantity * item.product.price;
        });
        return total;
      },
      taxAmount: function() {
        return this.cartTotal * 10 / 100;
      }
    },
    filters: {
      currency: function(value) {
        var formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        });
        return formatter.format(value);
      }
    },
    methods:{
      removeItemFromCart: function(cartItem) {
        var index = this.cart.items.indexOf(cartItem);

        if (index !== -1) {
          this.cart.items.splice(index, 1);
        }
      },
      checkout: function() {
        if (confirm('Are you sure that you want to purchase these products?')) {
          this.cart.items.forEach(function(item) {
            item.product.inStock += item.quantity;
          });

          this.cart.items = [];
        }
      },
      addProductToCart: function(product) {
        var cartItem = this.getCartItem(product);

        if (cartItem != null) {
          cartItem.quantity++;
        } else {
          this.cart.items.push({
            product: product,
            quantity: 1
          });
        }
        product.inStock--;
      },
      increaseQuantity: function(cartItem) {
        cartItem.product.inStock--;
        cartItem.quantity++;
      },
      decreaseQuantity: function(cartItem) {
        cartItem.quantity--;
        cartItem.product.inStock++;
        if (cartItem.quantity == 0) {
          this.removeItemFromCart(cartItem);
        }
      },
      getCartItem: function(product) {
        for (var i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].product.id === product.id) {
            return this.cart.items[i];
          }
        }
        return null;
      },
      listWrapper:function(){
        this.groupWrapper = "list-group-item"
      },
      gridWrapper:function(){
        this.groupWrapper = "grid-group-item"
      }
    }
  }
</script>

<style scoped>

  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*width: 100%;*/
    /*margin-left: 13%;*/
    text-align: left;
    color: #2c3e50;
    margin-top: 2em;
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
    margin-top: 10em
  }

  .cartbtn {
    margin-left: 2em;
  }

  .glyphicon {
    /*margin-left: 5em;*/
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
  }

  .list-group-item:nth-of-type(odd):hover,.list-group-item:hover {
    background: #428bca;
  }

  .list-group-item, .list-group-image {
    margin-right: 1em;
  }

  .list-group-item, .thumbnail {
    margin-bottom: 1em;
  }

  .caption  {
    padding: 9px 9px 0px 9px;
  }

  .list-group-item:nth-of-type(odd)
  {
    background: #eeeeee;
  }

  .list-group-item:before, .list-group-item:after {
    display: table;
    content: " ";
  }

  .list-group-item img {
    float: left;
    width: 100%;
  }

  .list-group-item:after {
    clear: both;
  }

  .list-group-item-text {
    margin: 0 0 1em;
  }

</style>
