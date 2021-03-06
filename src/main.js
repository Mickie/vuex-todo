import Vue from 'vue'
import {store} from './store/index'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',//**************
    components: {App} //**************
})
