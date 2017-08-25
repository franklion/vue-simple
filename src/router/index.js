import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Posts from '@/page/Posts'
import Bike from '@/page/Bike'
import Counter from '@/page/Counter'
import Todos from '@/page/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
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
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/Todos',
      name: 'Todos',
      component: Todos,
    },
  ],
})
