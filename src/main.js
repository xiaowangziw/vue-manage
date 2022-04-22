import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'

import '../api/mock'

import router from '../router'
import store from '../store'
import http from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http=http

//路由监听
router.beforeEach((to,from,next) =>{
  store.commit('getToken')
  const token = store.state.user.token
  console.log('token',token)
  if (!token && to.name !=='login'){
    next({name:'login'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
