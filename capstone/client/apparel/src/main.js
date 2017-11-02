// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { StripeCheckout } from 'vue-stripe'

window.moment = require(‘moment’);
window.axios = require(‘axios’);
window.axios.defaults.headers.common[‘X-Requested-With’] = ‘XMLHttpRequest’;

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component('Stripe', '@/cart/Stripe');
Vue.component('stripe-checkout', StripeCheckout);

Vue.http.options.root = 'https://miles-carter.herokuapp.com/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
