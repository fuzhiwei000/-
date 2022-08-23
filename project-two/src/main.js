import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
// import eslintrc from '../.eslintrc.js'
import service from './service'
import echarts from 'echarts'
// Vue.prototype.axios = axios//挂在在原型(axios二次封装前用封装后不用了)
Vue.use(ElementUI);
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
//将封装的axios-service挂载在prototype上，以后请求数据就通过
// this.service进行
// Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('username')) {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } next()
})
new Vue({
  router,
  // eslintrc,
  render: h => h(App),
}).$mount('#app')
