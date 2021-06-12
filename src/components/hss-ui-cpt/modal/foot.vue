<template>
  <div>
    <div class="modal-foot">
      <slot name="footer" v-bind="$attrs">
        <span class="cancel-btn" @click="cancel">{{
          $attrs.cancelText || "取消"
        }}</span>
        <span class="confirm-btn" @click="confirm">{{
          $attrs.okText || "确定"
        }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    console.log("footattrs", this.$attrs);
    console.log("footlisteners", this.$listeners);
  },
  methods: {
    cancel() {
      console.log("h-foot组件里面emit cancel事件");
      this.$emit("foot-cancel");
    },
    confirm() {
      console.log("h-foot组件里面emit confirm事件");
      this.$emit("foot-confirm");
    },
  },
};
</script>

<style lang="less" scoped>
.modal-foot {
  padding: 10px 20px;
  text-align: right;
  .confirm-btn,
  .cancel-btn {
    display: inline-block;
    padding: 5px 15px;
    background-color: red;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
  }
  .cancel-btn {
    border: 1px solid #d9d9d9;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  }
  .confirm-btn {
    background-color: #1890ff;
    color: white;
    margin-left: 10px;
  }
}
</style>