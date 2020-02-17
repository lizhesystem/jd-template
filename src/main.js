import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 公共样式
import '@/assets/styles/reset.scss'

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
