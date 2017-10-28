<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light">
    <img src="../assets/MCCLogo-01.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </nav>
</template>

<script>
  export default {

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
</style>
