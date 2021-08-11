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
