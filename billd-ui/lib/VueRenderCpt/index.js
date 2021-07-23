"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  components: {},
  data: function data() {
    return {};
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", [h("div", ["\u6211\u662FvueRenerCpt"]), h("div", {
      "on": {
        "click": this.clickme
      }
    }, ["click me"]), h("input", {
      "on": {
        "keyup": function keyup($event) {
          if (!("button" in $event) && _this._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _this.enterClick($event);
        }
      }
    }), h("div", (0, _babelHelperVueJsxMergeProps.default)([{}, {
      "attrs": {
        key: 2323
      }
    }, {
      "attrs": {
        "abc": "23"
      }
    }]), ["attrskey"]), h("div", {
      "attrs": _objectSpread({}, {
        key: 234333333333333,
        xga: 34111112
      })
    }, ["key22"]), h("img", {
      "attrs": {
        "src": require("./wechat123.jpg")
      },
      "style": "width:100px;"
    })]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    clickme: function clickme() {
      console.log("clickmeclickmeclickme");
    },
    enterClick: function enterClick(v) {
      console.log("enter!!!");
    }
  }
};
exports.default = _default;