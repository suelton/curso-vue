import Vue from 'vue'
import App from './App.vue'
import funcoesMixin from './funcoesMixin.js'

Vue.config.productionTip = false

// Register global filter
Vue.filter('tamanhoDasPalavras', funcoesMixin.filters.tamanhoDasPalavras);

new Vue({
	render: h => h(App),
}).$mount('#app')
