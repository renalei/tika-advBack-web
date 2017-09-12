import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login.vue'
import Index from '@/components/Index/index.vue'
import addNews from '@/components/addNews/addNews.vue'
import Preserve from '@/components/preserve/preserve.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/index',
      component: Index,
      name: 'Index'
    },
    {
      path: '/addnews',
      component: addNews,
      name: 'addNews'
    },
    {
      path: '/preserve',
      component: Preserve,
      name: 'preserve'
    }
  ]
})
