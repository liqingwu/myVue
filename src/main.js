// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'axios'
import App from './App'
import router from './router'
Vue.config.productionTip = false
VueAxios.defaults.timeout = 5000;                        //响应时间
VueAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';    
Vue.prototype.$ajax = VueAxios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
