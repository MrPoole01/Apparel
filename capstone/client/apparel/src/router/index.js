import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/main/Home'
import Items from '@/product/Items'

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
    // {
    //   path: '/login',
    //   name: 'Auth',
    //   component: Auth
    // },
    // {
    //   path: '/cart',
    //   name: 'Cart',
    //   component: Cart
    // }

  ]
})
