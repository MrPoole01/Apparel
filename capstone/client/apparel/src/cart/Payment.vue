<template lang="html">

  <form action="/charge" method="post" id="payment-form">
    <div class="form-row">
      <label for="card-element">
        Credit or debit card
      </label>
      <div id="card-element">
        <!-- a Stripe Element will be inserted here. -->
      </div>

      <!-- Used to display form errors -->
      <div id="card-errors" role="alert"></div>
    </div>
    <button>Submit Payment</button>
  </form>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
  
  .StripeElement {
  background-color: white;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
  border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
  }

</style>
