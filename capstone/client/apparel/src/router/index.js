import Vue from 'vue'
import swal from 'sweetalert'
import Home from '@/main/Home'
import Cart from '@/cart/Cart'
import Router from 'vue-router'
import Items from '@/product/Items'
import Contact from '@/product/Contact'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Items',
      component: Items
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/product',
      name: 'Contact',
      component: Contact
    }

  ]
})
