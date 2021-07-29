<template>
  <div>
    <span class="myfont">加载字体</span>
    <prettier></prettier>
    <div @click="showMessage">点击显示message</div>
    <div @click="closeAll">关闭所有</div>
  </div>
</template>

<script>
// import sds from './App';
import HssMessage from './components/message/index';
import './components/message/style/index';
import prettier from './pretter';
import { sayHello } from './hi';

console.log(sayHello('ts !'));

export default {
  components: {
    // sds
    prettier,
    // HssMessage: Message,
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
      HssMessage.warning({
        content: 'warning',
        type: 'warning', // 覆盖不了，不生效
        duration: 30000,
      });
    },
  },
};
</script>

<style src="./index.css"></style>
