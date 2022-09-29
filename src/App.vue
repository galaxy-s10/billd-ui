<template>
  <div>
    <b-icon></b-icon>
    <b-loading></b-loading>
    <b-switch openText="开" closeText="关" :defaultChecked="true">
      <template slot="openSlot">
        <b>开启</b>
      </template>
      <span slot="closeSlot">关闭</span>
    </b-switch>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
