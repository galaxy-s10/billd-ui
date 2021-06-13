<template>
  <div>
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
import HssSwitch from "./components/hss-ui-cpt/switch/index";

export default {
  components: {
    HssSwitch,
  },
  data() {
    return {
      switchVal: true,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickSwitch(v, e) {
      console.log("点击了switch", v, e);
    },
    changeSwitch(v) {
      console.log("switch值变化了", v);
    },
  },
};
</script>
