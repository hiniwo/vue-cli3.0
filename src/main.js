import Vue from 'vue'
import App from '@/components/HelloWorld.vue'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
