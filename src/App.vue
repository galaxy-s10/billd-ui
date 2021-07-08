<template>
  <div>
    <!-- <div style="height:300px;width:400px;overflow:scroll;background:red" @scroll="xxx">
      <div style="height:600px;width:200px;background:yellow"></div>
    </div> -->
    <div v-for="(item,index) in theme" :key="index">{{item}},{{index}}222</div>
    <!-- <directive-cpt></directive-cpt> -->
    <!-- <div v-auth="'a'">sdg</div> -->
    <!-- <div v-for="(item, index) in obj" :key="index">{{ item }},{{ index }}</div> -->
    <h-checkbox></h-checkbox>
    <h-table></h-table>
    hello billd-ui
    <vue-cpt></vue-cpt>
    <vue-render-cpt></vue-render-cpt>
    <tsx-cpt></tsx-cpt>
    <jsx-cpt></jsx-cpt>
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
import HCheckbox from "./components/checkbox";

// import Dashboard from '../lib/dashboard'

import VueCpt from "./components/VueCpt";
import VueRenderCpt from "./components/VueRenderCpt";
import TsxCpt from "./components/TsxCpt/index";
import JsxCpt from "./components/JsxCpt/index";
import DirectiveCpt from "./components/DirectiveCpt/index";

// import { Switch } from "../dist";
// import "../dist/switch/style/index.css";

// import { Message } from "../dist";
// import "../dist/message/style/index.css";

// import { Modal } from "../dist";
// import "../dist/modal/style/index.css";

export default {
  components: {
    // Dashboard,
    VueCpt,
    VueRenderCpt,
    TsxCpt,
    JsxCpt,
    DirectiveCpt,
    HTable,
    HCheckbox,
    // HSwitch: Switch,
    // HModal: Modal,
  },
  data() {
    return {
      theme: {
        default: {
          sss: 123,
          sgg: 3425,
        },
        default1: {
          sss: 3545,
          sgg: 9789,
        },
      },
      obj: {
        name: "hss",
        age: 22,
        sex: "男",
      },
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    // Message({
    //   content: "hello1111111111",
    //   closeAble: true,
    //   duration: 1000,
    // });
    console.log('fsfsdfsf');
    console.log(Object.keys(this.theme))
    Object.keys(this.theme).map(item=>{
      console.log(this.theme[item])
    })
  },
  methods: {
    xxx(){
      console.log('234324')
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
    },
  },
};
</script>

<style scoped></style>
