import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import Mint from 'mint-ui'
import "mint-ui/lib/style.css"

Vue.config.productionTip = false
Vue.use(Mint);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')