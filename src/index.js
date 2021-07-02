import Vue from "vue";
import App from "./App.vue";
import auth from "./plugins";
Vue.use(auth)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
