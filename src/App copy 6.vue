<template>
  <div>
    <b-switch
      v-model="switchVal"
      openText="开"
      closeText="关"
      :defaultChecked="true"
      @clickSwitch="clickSwitch"
      @changeSwitch="changeSwitch"
    >
      <template slot="openSlot">
        <b>开启</b>
      </template>
      <span slot="closeSlot">关闭</span>
    </b-switch>
  </div>
</template>

<script>
// import Vue from 'vue';
// import Switch from '../es/switch';
// import '../es/switch/style'; // 引入的是less源文件（未经过postcss）
// import '../es/switch/style/css'; // 引入的是编译好的css（经过postcss）

// Vue.component(Switch.name, Switch);

export default {
  data() {
    return {
      switchVal: false,
    };
  },
  methods: {
    clickSwitch(a, b) {
      console.log(a, b);
    },
    changeSwitch(a) {
      console.log(a);
    },
  },
};
</script>
