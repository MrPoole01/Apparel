// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { StripeCheckout } from 'vue-stripe'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component('Stripe', '@/cart/Stripe');
Vue.component('stripe-checkout', StripeCheckout);

Vue.http.options.root = 'https://miles-carter.herokuapp.com/'
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('X-CSRF-TOKEN', Laracasts.csrf.Token)
//     next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
