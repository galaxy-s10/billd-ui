import Vue from 'vue';
import App from './App.vue';
// import App from "./Appx";
import auth from './plugins';

Vue.use(auth);

// const a = 234;

const a23 = '34345';

// import './index.css';
const a214 = {
  a: 1,
  b: 333333333333333333333,
  c: '235',
};

// console.log(a214);
console.log('sdf');
new Vue({
  render: h => h(App),
}).$mount('#app');
// console.log(1);
// import { hi } from "aaaa/a";
// console.log(hi);
// hi(111);
