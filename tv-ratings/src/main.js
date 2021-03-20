import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  shows: mock,
  favorites: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
