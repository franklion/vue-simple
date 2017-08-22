import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Posts from '@/page/Posts'
import Bike from '@/page/Bike'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/bike',
      name: 'Bike',
      component: Bike,
    },
  ],
})
