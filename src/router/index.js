import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/views/login/Common'

Vue.use(Router)

let constRouter = [
    {
        path: '/login',
        name: '登录页',
        component: LoginView
    }
]

let router = new Router({
    routes: constRouter
})

export default router


