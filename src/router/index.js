import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register/Register.vue'
import Login from '@/components/Login/Login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})