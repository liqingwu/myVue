import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Rating from '@/components/rating/rating'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/Rating',
      name: 'Rating',
      component: Rating
    }, {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    }, {
      path: '/',
      redirect: '/Goods'
    }
  ],
  linkActiveClass: 'active'
})
