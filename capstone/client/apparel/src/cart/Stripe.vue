<template>
  <form action="/charge" method="POST">
    <input type="hidden" name="stripeToken" value="" v-model="stripeToken">
    <input type="hidden" name="stripeEmail" value="" v-model="stripeEmail">
    <button  class="btn btn-primary" @click.prevent="purchase" type="submit">Purchase Your Items</button>
  </form>
</template>

<script>

  const serverUrl = 'https://miles-carter.herokuapp.com'

  export default {
    props: [
      'cartTotal',
      'taxAmount',
      'cart'
    ],
    data () {
      return {
        stripeEmail: '',
        stripeToken: '',
        amount: this.cartTotal * 1000 / 10 + this.taxAmount * 1000 / 10
      }
    },
    mounted() {
      this.stripe = StripeCheckout.configure({
        key: 'pk_test_K1WiKB6RSgYb0yiAOpnPgHRj',
        image: "http://bit.ly/2yhV69a",
        locale: "auto",
        token: (token) => {
          this.stripeEmail = token.email
          this.stripeToken = token.id
          this.$http.post(serverUrl + '/charge', this.$data)
            .then(response => swal({
              title: "Your Purchase on the way!",
              text: "Thank you for shopping with Miles Carter Collection!",
              icon: "success",
              button: "Have a great day!",
            }))
            this.cart.items = []
        }
      })
    },
    methods: {
      purchase() {
        this.stripe.open({
          name: 'Miles Carter Collection',
          description: 'Designer T-Shirts',
          zipCode: true,
          amount: this.cartTotal * 1000 / 10 + this.taxAmount * 1000 / 10
        })
      }
    }
  }
</script>

<style>

</style>
