<template>
  <div>
    <app-Nav></app-Nav>
    <lg-View></lg-View>
    <pd-View1></pd-View1>
    <pd-View2></pd-View2>
    <app-Bottom></app-Bottom>
  </div>
</template>

<script>
  import Nav from "@/main/Nav"
  import LView from '@/main/LargeView'
  import PView1 from '@/main/ProdView1'
  import PView2 from '@/main/ProdView2'
  import Footer from '@/main/Footer'

  export default {
    name: 'Home',
    data () {
      return {

      }
    },
    components: {
      appNav: Nav,
      lgView: LView,
      pdView1: PView1,
      pdView2: PView2,
      appBottom: Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
