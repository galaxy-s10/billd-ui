import Vue from 'vue';

// import Billd from '../es';
import Billd from '../components/index';
import App from './App.vue';
import '../components/style';

Vue.use(Billd);

const vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');

console.log(vm);
