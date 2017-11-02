<template>
  <form action="/charge" method="POST">
    <input type="hidden" name="stripeToken" value="" v-model="stripeToken">
    <input type="hidden" name="stripeEmail" value="" v-model="stripeEmail">
    <button  class="btn btn-primary" @click.prevent="purchase" type="submit">Purchase Your Items</button>
  </form>
</template>

<script>

  const serverUrl = 'http://localhost:8080'

  export default {
    props: [
      'cartTotal',
      'taxAmount'
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
        image: "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/23131930_10155858130673748_7174259592997433101_n.jpg?oh=c619e67ba1ec1bbad367abfacbfde71c&oe=5A6DF12B",
        locale: "auto",
        token: (token) => {
          this.stripeEmail = token.email
          this.stripeToken = token.id
          this.$http.post(serverUrl + '/charge', this.$data)
            .then(response => alert('Complete! Thanks for your payment!'))
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
