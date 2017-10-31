<template>
  <div>
    <app-Nav></app-Nav>
    <lg-View></lg-View>
    <pd-View1
      :product="product">
    </pd-View1>
    <lg2-View></lg2-View>
    <pd-View2
      :product="product">
    </pd-View2>
    <app-Bottom></app-Bottom>
  </div>
</template>

<script>
  import Nav from "@/main/Nav"
  import LView from '@/main/LargeView'
  import LView2 from '@/main/LargeView2'
  import PView1 from '@/main/ProdView1'
  import PView2 from '@/main/ProdView2'
  import Footer from '@/main/Footer'
  const baseURL = 'https://miles-carter.herokuapp.com/'
  // const baseURL = 'http://localhost:8080/'

  export default {
    name: 'Home',
    data () {
      return {
        product: []
      }
    },
    async mounted() {
    const data = await fetch(`${baseURL}`)
    const response = await data.json()
    for (let key in response) {
      this.product.push(response[key])
    }
  },
    components: {
      appNav: Nav,
      lgView: LView,
      lg2View: LView2,
      pdView1: PView1,
      pdView2: PView2,
      appBottom: Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
