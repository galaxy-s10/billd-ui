<template>
  <span class="hss-checkbox">
    <input
      type="checkbox"
      :class="{
        'hss-checkbox-input': true,
      }"
      v-model="tableIsSelectAll"
    />
    <span
      :class="{
        'hss-checkbox-inner': true,
        'no-all': !tableIsSelectAll,
      }"
    ></span>
  </span>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableIsSelectAll: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

//
在style标签src样式文件，如less，需要添加对应的lang，如果没有这个lang会报错（实测写了lang=""也不会报错，但一定要有lang）。
<style lang="less" scoped src="./style/index.less"></style>
