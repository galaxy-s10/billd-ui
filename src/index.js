import Vue from 'vue';
import App from './App.vue';
// import App from "./Appx";
import auth from './plugins';

Vue.use(auth);

// const a = 234;

// import './index.css';

// console.log(a214);
console.log('sdf');
new Vue({
  render: h => h(App),
}).$mount('#app');
// console.log(1);
// import { hi } from "aaaa/a";
// console.log(hi);
// hi(111);
