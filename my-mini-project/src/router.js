import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Brand from './views/Brand.vue'
import SignUp from './views/Signup.vue'
import ProductDetail from './views/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productdetail',
      name: 'productdetail',
      component: ProductDetail
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
