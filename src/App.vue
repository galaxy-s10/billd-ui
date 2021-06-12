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
  </div>
</template>

<script>
import HssModal from "./components/hss-ui-cpt/modal/index";

export default {
  components: {
    HssModal,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
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
