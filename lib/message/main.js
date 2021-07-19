"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../icon/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    icon: String,
    msg: String,
    time: Number
  },
  components: {
    HssIcon: _index.default
  },
  data: function data() {
    return {
      list: [],
      timerList: [],
      timerID: 1,
      bool: true
    };
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", [h("div", {
      "class": "hss-message"
    }, [h("transition-group", {
      "attrs": {
        "name": "list"
      }
    }, [this.list.map(function (item, index) {
      return h("div", {
        "style": "margin: 10px 0",
        "key": index
      }, [h("div", {
        "class": "content"
      }, [h("div", {
        "style": "display: flex; align-items: center"
      }, [h("div", {
        "style": "margin-right: 5px"
      }, [!item.icon && h("hss-icon", {
        "attrs": {
          "type": item.type
        }
      }), _this.renderDom("icon", item.icon), _this.$slots.icon]), _this.renderDom("content", item.content), _this.$slots.content, item.closeAble && h("img", {
        "attrs": {
          "src": require("../assets/img/close.png"),
          "alt": ""
        },
        "class": "close-btn",
        "on": {
          "click": function click() {
            return _this.close(item);
          }
        }
      })])])]);
    })])])]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    transition: function transition() {
      var _this2 = this;

      // if (this.bool == false) {
      //   this.bool = true;
      // }
      setTimeout(function () {
        _this2.bool = false;
      }, 100);
      return this.bool;
    },
    isVNode: function isVNode(v) {
      var h = this.$createElement;
      var vnode = this.$createElement(h("div"));
      var VNode = vnode.constructor;
      return v instanceof VNode;
    },
    close: function close(v) {
      var index = this.list.findIndex(function (item) {
        return item.id == v.id;
      });
      this.list.splice(index, 1);
      clearTimeout(this.timerList[index].timer);
      this.timerList.splice(index, 1);
    },
    closeAll: function closeAll() {
      var length = this.list.length;

      for (var i = length - 1; i >= 0; i--) {
        this.close(this.list[i]);
      }
    },
    handle: function handle(_ref) {
      var _this3 = this;

      var type = _ref.type,
          icon = _ref.icon,
          content = _ref.content,
          closeAble = _ref.closeAble,
          duration = _ref.duration;
      var id = this.timerID++;
      var temp = {
        id: id,
        type: type,
        icon: icon,
        content: content,
        closeAble: closeAble,
        duration: duration
      };
      this.list.push(temp);
      var timer = setTimeout(function () {
        _this3.close(temp);
      }, duration);
      this.timerList.push({
        id: id,
        timer: timer
      });
    },
    success: function success(v) {
      this.handle(v);
    },
    warning: function warning(v) {
      this.handle(v);
    },
    error: function error(v) {
      this.handle(v);
    },
    info: function info(v) {
      this.handle(v);
    },
    renderDom: function renderDom(slot, node) {
      var h = this.$createElement;

      if (this.isVNode(node)) {
        this.$slots[slot] = node;
      } else {
        this.$slots[slot] = h("span", [node]);
      }
    }
  }
};
exports.default = _default;