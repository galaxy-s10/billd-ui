"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  inheritAttrs: false,
  components: {},
  props: {
    switchVal: {
      default: undefined
    }
  },
  model: {
    prop: "switchVal",
    event: "input"
  },
  watch: {
    switchVal: function switchVal(newVal) {
      // console.log("switchVal变了");
      this.isChecked = newVal;
      this.$emit("changeSwitch", this.isChecked);
    }
  },
  data: function data() {
    return {
      isChecked: this.switchVal
    };
  },
  mounted: function mounted() {
    /**
     * 如果defaultChecked和v-model绑定的值冲突，则v-model的优先级高，defaultChecked不生效。
     * 即switchVal是false，那么就是isChecked就是false。
     * 其次，如果defaultChecked是true且swtichVal也是开或者没设置，最终结果就是开启
     */
    // console.log(this.$attrs, this.switchVal);
    if (this.switchVal != undefined) {
      this.isChecked = this.switchVal;
      return;
    }

    if (this.$attrs["defaultChecked"] && (this.switchVal == undefined || this.switchVal == true)) {
      this.isChecked = true;
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    // 如果有插槽，就使用插槽，如果没有插槽，就使用openText，如果openText没有，就代表没有文字
    return h("div", {
      "class": {
        bar: true,
        "hss-switch": true,
        "hss-switch-checked": this.isChecked
      },
      on: {
        "click": function click(e) {
          return _this.clickSwitch(e);
        }
      }
    }, [h("span", {
      "class": "hss-switch-inner"
    }, [this.isChecked ? this.$scopedSlots.openSlot ? this.$scopedSlots.openSlot({}) : this.$attrs.openText ? this.$attrs.openText : " " : this.$scopedSlots.closeSlot ? this.$scopedSlots.closeSlot({}) : this.$attrs.closeText ? this.$attrs.closeText : ""])]);
  },
  computed: {},
  created: function created() {},
  methods: {
    clickSwitch: function clickSwitch(event) {
      if (this.switchVal == undefined) {
        // 如果没有使用v-model或者switchVal，则手动回调事件
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event

        this.isChecked = !this.isChecked;
        this.$emit("changeSwitch", this.isChecked);
      } else {
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event

        this.$emit("input", !this.isChecked);
      } // this.$emit("clickSwitch", { checked: !this.isChecked, event });  //最终拿到一个形参，即:{}

    }
  }
};
exports.default = _default;