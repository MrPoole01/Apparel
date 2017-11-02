<template>
  <div class="">
    <div class="container">
      <b-container fluid>
        <app-Nav></app-Nav>
        <h1>MILES CARTER COLLECTION</h1>
        <p>Please send us your questions, concerns and PRAISES!</p>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3"><label :for="`type-${type}`"> {{ type }}:</label></b-col>
          <b-col sm="9"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
        </b-row>
      </b-container>
      <b-btn class="sm" variant="outline" >Submit</b-btn>
    </div>
  <app-Bottom class="footer"></app-Bottom>
  </div>
</template>

<script>
  import Nav from '@/main/Nav'
  import Footer from '@/main/Footer'

export default {
    data () {
      return {
        name: true,
        types: [
          'Name', 'Email', 'Tel', 'Date', 'Reason'
        ]
      }
    },
    components: {
      appNav: Nav,
      appBottom: Footer
    }
}
</script>

<style scoped>

  .container {
    margin-bottom: 10em;
  }

  p {
    margin-bottom: 10em;
  }

  .sm  {
    margin-top: 1em;
  }

  .my-1 {
    margin-left: -30%;
  }

  .container {
    margin-top: 10em;
    max-width: 50%;
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
  }
</style>
