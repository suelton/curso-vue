import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function (value) {
	if (!value) return ''
	if (typeof value !== 'string') return value
	return value.split('').reverse().join('')
})

Vue.mixin({
	created() {
		console.log('Mixin created hook called')
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
