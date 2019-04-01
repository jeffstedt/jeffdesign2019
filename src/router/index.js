import Vue from 'vue'
import Router from 'vue-router'

//Views
import Home from '@/views/Home'
import Development from '@/views/Development'
import Design from '@/views/Design'

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
      path: '/development',
      name: 'Development',
      component: Development
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    }
  ]
})
