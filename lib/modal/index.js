"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _vueFragment = require("vue-fragment");

var _foot = _interopRequireDefault(require("./foot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  inheritAttrs: false,
  props: {
    // cancelText: String,
    // confirmText: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HFoot: _foot.default,
    HVueFragment: _vueFragment.Fragment
  },
  data: function data() {
    return {
      modalvisible: this.visible
    };
  },
  watch: {
    visible: function visible(newVal) {
      this.modalvisible = newVal;
      this.$emit("visible-change", newVal);
    }
  },
  model: {
    prop: "visible",
    // event: "change",
    event: "input"
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "modal-mask",
      "style": [(this.$attrs.mask == true || this.$attrs.mask == undefined) && {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }, {
        display: this.modalvisible ? "block" : "none"
      }],
      "on": {
        "click": function click($event) {
          if ($event.target !== $event.currentTarget) return null;
          return _this.maskClose($event);
        }
      }
    }, [h("div", {
      "class": "modal-wrap"
    }, [h("div", {
      "class": "modal-head"
    }, [h("span", [this.$attrs.title || "标题"]), h("span", {
      "on": {
        "click": this.close
      },
      "class": "modal-close-btn"
    }, ["x"])]), h("div", {
      "class": "modal-content"
    }, [this.$slots.default]), h("h-foot", (0, _babelHelperVueJsxMergeProps.default)([{}, {
      "attrs": this.$attrs
    }, {
      "on": {
        "foot-cancel": this.footCancel,
        "foot-confirm": this.footConfirm
      },
      "scopedSlots": {
        footer: function footer(props) {
          return _this.$scopedSlots.foot ? _this.$scopedSlots.foot(Object.assign({}, props)) : undefined;
        }
      }
    }]))])]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {// console.log(this.$attrs, this.visible);
  },
  methods: {
    footCancel: function footCancel() {
      this.$emit("input", false);
      this.$emit("on-cancel");
    },
    footConfirm: function footConfirm() {
      this.$emit("input", false);
      this.$emit("on-confirm");
    },
    close: function close() {
      // console.log("点击了modal的关闭按钮，隐藏modal");
      this.$emit("input", false);
      this.$emit("on-close");
    },
    // 如果未定义maskClosable或者手动设置maskClosable为true，点击遮罩都是会隐藏modal；即只有手动设置maskClosable为false才会点击遮罩层不隐藏modal
    maskClose: function maskClose() {
      // console.log("点击了遮罩层，判断maskClosable属性觉得是否隐藏modal");
      if (this.$attrs.maskClosable == undefined || this.$attrs.maskClosable == true) {
        // console.log("判断结果:隐藏modal");
        this.$emit("input", false);
      } else {// console.log("判断结果:不隐藏modal");
      }
    }
  }
};
exports.default = _default;