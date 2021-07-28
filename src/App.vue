<template>
  <div>
    <span class="myfont">加载字体</span>
    <prettier></prettier>
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
  mounted() {
    HssMessage({
      content: 'infoinfo',
      closeAble: true,
      duration: 30000,
    });
    HssMessage.success({
      content: 'successsuccess',
      type: 'error', // 覆盖不了，不生效
      duration: 30000,
    });
  },
  methods: {},
};
</script>

<style src="./index.css"></style>
