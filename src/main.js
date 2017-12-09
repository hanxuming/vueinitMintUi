// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由
import router from './router'

//引入vuex
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex);

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//重置css
import 'minireset.css'

//es6-promise的兼容性搭配
var Promise = require('es6-promise').Promise;

Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
