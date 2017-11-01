<template>
  <form >

    <input type="hidden" name="stripeToken" value="" v-model="stripeToken">
    <input type="hidden" name="stripeEmail" value="" v-model="stripeEmail">
    <button  class="btn btn-success" @click.prevent="purchase" type="submit">Purchase Your Items</button>

  </form>
</template>

<script>
  export default {
    data () {
      return {
        stripeEmail: '',
        stripeToken: ''
      }
    },
    created() {
      this.stripe = StripeCheckout.configure({
        key: pk_test_K1WiKB6RSgYb0yiAOpnPgHRj,
        image: "https://stripe.com/img/documentation/checkout/marketplace.png",
        locale: "auto",
        token: () => {
          this.stripeEmail = token.email
          this.stripeToken = token.id
          // document.querySelector('#stripeEmail').value = token.email
          // document.querySelector('#stripeToken').value = token.id

          this.$http.post('/purchases', this.$data)
            .then(response => alert('Complete! Thanks for your payment!'))
          // document.querySelector('#form-checkout').submit()
        }
      })
    },
    methods: {
      purchase() {
        this.stripe.open({
          name: 'MCC',
          description: 'red',
          zipcode: true,
          amount: 2500
        })
      }
    }
  }
</script>

<style>

</style>
