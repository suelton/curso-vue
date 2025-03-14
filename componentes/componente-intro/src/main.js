/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import AppContador from './components/AppContador.vue'
import AppContadores from './components/AppContadores.vue'

Vue.config.productionTip = false
Vue.component('app-contador', AppContador)
Vue.component('app-contadores', AppContadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
