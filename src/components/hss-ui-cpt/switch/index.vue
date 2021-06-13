<script>
export default {
  inheritAttrs: false, //将自定义组件的attrs不显示在渲染的html元素上，防止冲突（比如title）
  components: {},
  props: {
    switchVal: {
      default: undefined,
    },
  },
  model: {
    prop: "switchVal",
    event: "input",
  },
  watch: {
    switchVal(newVal) {
      console.log("switchVal变了");
      this.isChecked = newVal;
      this.$emit("changeSwitch", this.isChecked);
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  mounted() {
    // 如果defaultChecked和v-model绑定的值冲突，则v-model的优先级高，defaultChecked不生效。
    if (
      this.$attrs["defaultChecked"] &&
      (this.switchVal == undefined || this.switchVal == true)
    ) {
      this.isChecked = true;
    }
  },
  render() {
    // 如果有插槽，就使用插槽，如果没有插槽，就使用openText，如果openText没有，就代表没有文字
    return (
      <div
        class={{ "hss-switch": true, "hss-switch-checked": this.isChecked }}
        vOn:click={(e) => this.clickSwitch(e)}
      >
        <span class="hss-switch-inner">
          {this.isChecked
            ? this.$scopedSlots.openSlot
              ? this.$scopedSlots.openSlot({})
              : this.$attrs.openText
              ? this.$attrs.openText
              : " "
            : this.$scopedSlots.closeSlot
            ? this.$scopedSlots.closeSlot({})
            : this.$attrs.closeText
            ? this.$attrs.closeText
            : ""}
        </span>
      </div>
    );
  },
  computed: {},
  created() {},

  methods: {
    clickSwitch(event) {
      if (this.switchVal == undefined) {
        // 如果没有使用v-model或者switchVal，则手动回调事件
        console.log("ssss");
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event
        this.isChecked = !this.isChecked;
        this.$emit("changeSwitch", this.isChecked);
      } else {
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event
        this.$emit("input", !this.isChecked);
      }

      // this.$emit("clickSwitch", { checked: !this.isChecked, event });  //最终拿到一个形参，即:{}
    },
  },
};
</script>

<style lang="less" scoped>
.hss-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 42px;
  height: 22px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.25);
  vertical-align: middle;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  &.hss-switch-checked {
    background-color: #1890ff;
    font-size: 10px;
    &:after {
      left: 100%;
      margin-left: -2px;
      transform: translate(-100%, -50%);
    }
    .hss-switch-inner {
      margin-right: 24px;
      margin-left: 6px;

      user-select: none;
    }
  }
  .hss-switch-inner {
    display: block;
    margin-right: 6px;
    margin-left: 24px;
    color: white;
    font-size: 12px;
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);

    user-select: none;
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #fff;
    content: " ";
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transform: translate(0, -50%);
  }
}
</style>
