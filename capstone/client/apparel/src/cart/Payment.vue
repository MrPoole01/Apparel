<template>
  <div class="">
    <form action="/charge" method="post" id="payment-form">
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <div id="card-element">
          <!-- a Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display Element errors -->
        <div id="card-errors" role="alert"></div>
      </div>s
      <button>Submit Payment</button>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>



</style>
