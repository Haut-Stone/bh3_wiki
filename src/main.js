// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import * as snowFall from './common/js/snowfall'
// 引入echarts
import echarts from 'echarts'

// 自适应方案
import 'amfe-flexible'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.prototype.$snowFall = snowFall
// 上线部署主机域名
Vue.prototype.HOST = 'http://www.gamepaper.cn/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
