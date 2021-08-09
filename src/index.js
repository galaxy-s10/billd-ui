import Vue from 'vue';
import App from './App.vue';
// import App from "./Appx";
import auth from './plugins';

// const { optimize } = require('svgo');

// const result = optimize(svgString, {
//   path: 'path-to.svg',
//   multipass: true,
// });
// const optimizedSvgString = result.data;
// console.log(optimizedSvgString);

Vue.use(auth);

const vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');

console.log(vm.$options.components, 333);

// const cpts = require('./cpts');
const cpts = require.context('./cpts', true, /\.js$/);
// const cpts = require.context('./', true, /\.js$/);
console.log('------1--');
console.log(cpts);
console.log(cpts.keys);
// const adsa = '345435';
cpts.keys().forEach((item) => {
  // console.log(item);
  console.log(`${item}`);
  // const aaa = require(item);
});
