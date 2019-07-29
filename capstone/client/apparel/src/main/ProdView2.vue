<template>
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top" :src=productImage1 alt="Card image cap">
      <!-- <img class="card-img-top" :src="product[3].portrait1_url" alt="Card image cap"> -->
      <div class="card-body">
        <h4 class="card-title">{{ shirt1() }}</h4>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" :src=productImage2 alt="Card image cap">
      <!-- <img class="card-img-top" :src="product[4].portrait1_url" alt="Card image cap"> -->
      <div class="card-body">
        <h4 class="card-title">{{ shirt2() }}</h4>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" :src=productImage3 alt="Card image cap">
      <!-- <img class="card-img-top" :src="product[5].portrait1_url" alt="Card image cap"> -->
      <div class="card-body">
        <h4 class="card-title">{{ shirt3() }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'product'
    ],
    data () {
      return {
        productImage1: "http://bit.ly/2ylwZ9v",
        productImage2: "http://bit.ly/2YyyXSC",
        productImage3: "http://bit.ly/2K8ZsF7"
      }
    },
    mounted() {

    },
    methods: {
      shirt1() {
        return this.product[3].title
      },
      shirt2() {
        return this.product[4].title
      },
      shirt3() {
        return this.product[5].title
      }
    }
  }
</script>

<style scoped>

  .card-deck {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2em;
  }

  .card-img-top {
    height: 30em;
    margin-top: 3em;
  }

  .card {
    border-style: none;
  }


</style>
