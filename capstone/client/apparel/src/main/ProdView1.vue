<template>
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top" :src=productImage1 alt="Card image cap">
      <!-- <img class="card-img-top" :src="this.product[0].portrait1_url" alt="Card image cap"> -->
      <div class="card-body">
        <h4 class="card-title">{{ shirt1() }}</h4>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" :src=productImage2 alt="Card image cap">
      <!-- <img class="card-img-top" :src="this.product[1].portrait1_url" alt="Card image cap"> -->
      <div class="card-body">
        <h4 class="card-title">{{ shirt2() }}</h4>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" :src=productImage3 alt="Card image cap">
      <!-- <img class="card-img-top" :src="this.product[2].portrait1_url" alt="Card image cap"> -->
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
        productImage1: "http://bit.ly/2ZhqRuZ"
        productImage2: "http://bit.ly/32XA3a4"
        productImage3: "http://bit.ly/2ZiVBLW"
      }
    },
    mounted() {

    },
    methods: {
      shirt1() {
        return this.product[0].title
      },
      shirt2() {
        return this.product[1].title
      },
      shirt3() {
        return this.product[2].title
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
