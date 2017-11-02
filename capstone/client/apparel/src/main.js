// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import { StripeCheckout } from 'vue-stripe'


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAxios, axios)
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
