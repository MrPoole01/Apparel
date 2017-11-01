<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <img src="../assets/MCCLogo-01.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Home', params: {} }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Cart', params: {} }">Shop</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <span class="navbar-text">
        <b-button @click="showModal">
            Login
        </b-button>
        <b-modal ref="myModalRef" hide-footer title="⚠️ Miles Carter Collection">
          <div class="d-block text-center">
            <b-form-input class="input"
                          type="text"
                          placeholder="User Name">
            </b-form-input>
            <p>{{ text1 }}</p>
            <b-form-input class="input"
                          type="text"
                          placeholder="Password">
            </b-form-input>
            <p>{{ text2 }}</p>
          </div class="btn">
          <b-btn class="sm" variant="outline"  @click="hideModal">Sign In</b-btn>
          <b-btn class="sm" variant="outline"  @click="hideModal">Sign Up</b-btn>
        </b-modal>
      </span>
    </div>
  </nav>
</template>

<script>

  export default {
    data () {
      return {
        text1: '',
        text2: ''
      }
    },
    methods: {
      showModal() {
            this.$refs.myModalRef.show();
        },
      hideModal() {
            this.$refs.myModalRef.hide();
        }
      },
    }

</script>

<style scoped>

  #navbarText {
    margin-left: 3%;
    margin-right: 10%;
  }

  .navbar {
    height: 10em;
    background-color: rgba(255, 255, 255, .8);
  }

  img {
    width: 9em;
    height: 9em;
  }

  p {
    text-align: left;
  }

  .input {
    margin-bottom: 1em;
  }

  .btn {
    text-align: right;
  }

</style>
