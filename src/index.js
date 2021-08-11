import Vue from 'vue';
import Billd from '../es';
import App from './App.vue';
import '../dist/billd.css';

Vue.use(Billd);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// const vm = new Vue({
//   render: (h) => h(App),
// }).$mount('#app');

// console.log(vm);
