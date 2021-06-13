import Vue from 'vue'
import App from './App.jsx'
// import App from './App1.jsx'
import 'normalize.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
