<template>
  <div>
    hello billd-ui
    <vue-cpt></vue-cpt>
    <vue-render-cpt></vue-render-cpt>
    <tsx-cpt></tsx-cpt>
    <jsx-cpt></jsx-cpt>
    <h-switch></h-switch>
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
    </h-modal>
    <br />
    <span @click="changeModal">点击显示modal1</span>
    <br>
    <img src="./assets/img/author.jpg" style="width:200px" alt="" />
  </div>
</template>

<script>
import VueCpt from "./components/VueCpt";
import VueRenderCpt from "./components/VueRenderCpt";
import TsxCpt from "./components/TsxCpt/index";
import JsxCpt from "./components/JsxCpt/index";

import { Switch } from "../dist";
import "../dist/switch/style/index.css";

import { Message } from "../dist";
import "../dist/message/style/index.css";

import { Modal } from "../dist";
import "../dist/modal/style/index.css";

export default {
  components: {
    VueCpt,
    VueRenderCpt,
    TsxCpt,
    JsxCpt,
    HSwitch: Switch,
    HModal: Modal,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    Message({
      content: "hello1111111111",
      closeAble: true,
      duration: 1000,
    });
  },
  methods: {
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
    },
  },
};
</script>

<style scoped></style>
