import Vue from 'vue';
import App from './App.vue';
// import App from "./Appx";
import auth from './plugins';

// const path = require('path');

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

// const cpts = require('./cpts');
// const cpts = require.context('./cpts', true, /\.js$/, 'sync');
const cpts = require.context('./', true, /\.js$/);
console.log('------1--');
console.log(cpts);
cpts.keys().forEach(item => {
  console.log(item);
  console.log(`${item}`);
  // require(item);
});
