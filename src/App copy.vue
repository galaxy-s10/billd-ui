<template>
  <div>
    <hss-modal
      v-model="visible"
      title="tip"
      cancelText="no"
      confirmText="ok"
      :mask="true"
      :maskClosable="true"
      @on-cancel="cancelClick"
      @on-confirm="confirmClick"
      @on-close="closeClick"
      @visible-change="visibleChange"
    >
      <!-- <div slot="foot" slot-scope="aaa">
        <span>自定义foot</span>
      </div> -->
      hello world
    </hss-modal>

    <span @click="changeModal">点击显示modal</span>

    <hss-switch
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
    </hss-switch>
  </div>
</template>

<script>
import HssModal from "./components/hss-ui-cpt/modal/index";
import HssSwitch from "./components/hss-ui-cpt/switch/index";

export default {
  components: {
    HssModal,
    HssSwitch,
  },
  data() {
    return {
      switchVal: false,
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickSwitch(v, e) {
      console.log("点击了switch", v);
      // this.switchVal = v;
    },
    changeSwitch(v) {
      console.log("switch值变化了", v);
      // this.switchVal = checked;
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
