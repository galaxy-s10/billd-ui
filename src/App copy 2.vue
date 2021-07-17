<template>
  <div>

    <h-table></h-table>
    <!-- <h-switch></h-switch>
    <h-modal
      v-model="visible"
      title="tip"
      cancelText="no"
      confirmText="ok"
      :mask="true"
      :maskClosable="false"
      @on-cancel="cancelClick"
      @on-confirm="confirmClick"
      @on-close="closeClick"
      @visible-change="visibleChange"
    >
      hello world
    </h-modal> -->
    <br />
    <span @click="changeModal">点击显示modal1</span>
    <br />
    <img src="./assets/img/author.jpg" style="width:200px" alt="" />
  </div>
</template>

<script>
import HTable from "./components/table";

// import Dashboard from '../lib/dashboard'



// import { Modal } from "../dist";
// import "../dist/modal/style/index.css";

export default {
  components: {
    // Dashboard,
    HTable,
    // HModal: Modal,
  },
  data() {
    return {
      theme: {
        default: {
          sss: 123,
          sgg: 3425
        },
        default1: {
          sss: 3545,
          sgg: 9789
        }
      },
      obj: {
        name: "hss",
        age: 22,
        sex: "男"
      },
      visible: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log("fsfsdfsf");
    console.log(Object.keys(this.theme));
    Object.keys(this.theme).map(item => {
      console.log(this.theme[item]);
    });
  },
  methods: {
    clickSwitch(v) {
      console.log(v);
    },
    xxx() {
      console.log("234324");
    },
    changeModal() {
      this.visible = true;
    },
    visibleChange(v) {
      console.log("visibleChange", v);
    },
    cancelClick() {
      console.log("cancelClick,app组件里modal的cancel回调");
    },
    confirmClick() {
      console.log("cancelClick,app组件里modal的confirm回调");
    },
    closeClick() {
      console.log("closeClick,app组件里modal的close回调");
    }
  }
};
</script>

<style lang="less" scoped>
// 下面的less样式会有作用域
@import "./index.less";
</style>

<style scoped>
/* 下面的css样式不会有作用域 */
@import "./index.css";
</style>
