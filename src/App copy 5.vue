<template>
  <div>
    <b-loading></b-loading>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from 'vue';
import { Loading, Switch } from '../es';
import '../dist/billd.css'; // 仍需导入全局样式

Vue.component(Loading.name, Loading);
Vue.component(Switch.name, Switch);

// 上述写法约等于：
// Vue.use(Loading);
// Vue.use(Switch);

export default {};
</script>
