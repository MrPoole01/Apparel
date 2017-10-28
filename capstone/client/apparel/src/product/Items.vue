<template>
  <div>
    <app-Nav></app-Nav>
    <sub-Nav></sub-Nav>
    <app-Body></app-Body>
    <app-Bottom></app-Bottom>
  </div>
</template>

<script>
  import Nav from '@/main/Nav'
  import Body from '@/product/Body'
  import SubNav from '@/product/SubNav'
  import Footer from '@/main/Footer'

  export default {
    name: 'Items',
    data () {
      return {

      }
    },
    components: {
      appNav: Nav,
      appBody: Body,
      subNav: SubNav,
      appBottom: Footer
    }
  }
</script>

<style scoped>


</style>
