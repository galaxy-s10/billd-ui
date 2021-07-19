"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  components: {},
  data: function data() {
    return {};
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  render: function render() {
    var h = arguments[0];
    return h("div", [h("div", {
      "class": "modal-foot"
    }, [this.$scopedSlots.footer != undefined && (this.$scopedSlots.footer(Object.assign({}, this.$attrs)) == undefined ? h("div", [h("span", {
      "class": "cancel-btn",
      "on": {
        "click": this.cancel
      }
    }, [this.$attrs.cancelText || "取消"]), h("span", {
      "class": "confirm-btn",
      "on": {
        "click": this.confirm
      }
    }, [this.$attrs.confirmText || "确定"])]) : this.$scopedSlots.footer(Object.assign({}, this.$attrs)))])]);
  },
  methods: {
    cancel: function cancel() {
      // console.log("h-foot组件里面emit cancel事件");
      this.$emit("foot-cancel");
    },
    confirm: function confirm() {
      // console.log("h-foot组件里面emit confirm事件");
      this.$emit("foot-confirm");
    }
  }
};
exports.default = _default;