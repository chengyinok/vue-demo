import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/views/login/Common'

Vue.use(Router)

let constRouter = [
  {
    path: '/login',
    name: '登录页',
    component: LoginView
  },
  {
    path: '/index',
    name: '首页',
    redirect: '/home'
  }
]

let router = new Router({
  routes: constRouter
})

export default router


