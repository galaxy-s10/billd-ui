<template>
  <div>
    <HLoading
      type="CheckCircleFilled"
      :spin="true"
      :rotate1="100"
      :customStyle="{ color: 'red' }"
    ></HLoading>
    <appx></appx>
    <LoadingOutlined
      :spin="true"
      :rotate1="100"
      :custom-style="{ color: '', 'font-size': '36px' }"
    ></LoadingOutlined>
    <!-- <class-cpt></class-cpt> -->
    <span class="myfont">加载字体</span>
    <prettier></prettier>
    <div @click="showMessage">点击显示message</div>
    <div @click="closeAll">关闭所有</div>
  </div>
</template>

<script>
import Vue from 'vue';
import { LoadingOutlined } from '@huangshuisheng/icons-vue';
import hicon from '../components/icon';
import Hswitch from '../components/switch';
import Hmodal from '../components/modal';
import '../components/switch/style/index';
// import sds from './App';
// import classCpt from './components/classCpt'; // 翻车
import HssMessage from '../components/message/index';
import './components/message/style/index';
import prettier from './pretter';
import { sayHello } from './hi';

import appx from './Appx.jsx';

Vue.component('HLoading', hicon);

console.log(LoadingOutlined, 22211);

// console.log(classCpt);

console.log(sayHello('ts !'));

export default {
  // inheritAttrs:false,
  components: {
    LoadingOutlined,
    appx,
    // sds
    prettier,
    // classCpt,
    // HssMessage,
  },
  data() {
    return {
      asdg: '5345',
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    closeAll() {
      HssMessage.closeAll();
    },
    showMessage() {
      HssMessage({
        content: 'default:info',
        closeAble: true,
        duration: 30000,
      });
      HssMessage({
        content: 'error',
        closeAble: true,
        duration: 30000,
        type: 'error',
      });
      HssMessage.success({
        content: 'success',
        type: 'success', // 覆盖不了，不生效
        duration: 30000,
      });
      HssMessage.loading({
        content: 'loading',
        // type: 'loading', // 覆盖不了，不生效
        duration: 30000,
      });
      // HssMessage.warning({
      //   content: 'warning',
      //   type: 'warning', // 覆盖不了，不生效
      //   duration: 30000,
      // });
    },
  },
};
</script>

<style src="./index.css"></style>
