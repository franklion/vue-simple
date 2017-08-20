import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Posts from '@/page/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
