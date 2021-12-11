import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import PositionItem from '@/views/position/PositionItem'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$messgae=Message

axios.defaults.baseURL='http://localhost:8080'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')