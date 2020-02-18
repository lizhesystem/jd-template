import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Money from '@/view/money'
import Iou from '@/view/iou'
import Raise from '@/view/raise'
import Download from '@/view/download'

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
        },
        {
            path: "/iou",
            name: 'iou',
            component: Iou
        },
        {
            path: '/raise',
            name: 'raise',
            component: Raise
        },
        {
            path: '/download',
            name: 'download',
            component: Download
        }
    ]
})
