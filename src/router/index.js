import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Money from '@/view/money'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/money",
            name: "money",
            component: Money
        }
    ]
})