import Vue from "vue";
import App from "./App.vue";
// import App from "./Appx";
import auth from "./plugins";
Vue.use(auth)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
