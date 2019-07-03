import Vue from 'vue'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'
import request from './utils/request'
import db from './utils/localstorage'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(db)

Vue.use({
    install (Vue){
        Vue.prototype.$db = db
    }
})

Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
Vue.prototype.$put = request.put
Vue.prototype.$delete = request.delete
Vue.prototype.$export = request.export
Vue.prototype.$download = request.download
Vue.prototype.$upload = request.upload

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
