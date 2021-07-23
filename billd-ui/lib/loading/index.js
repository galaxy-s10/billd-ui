"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _switch = _interopRequireDefault(require("../switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  components: {
    HSwitch: _switch.default
  },
  render: function render() {
    var h = arguments[0];
    h("div", [h("h-switch", {
      "attrs": {
        "a": "23",
        "b": "sdgh"
      }
    }), h("img", {
      "attrs": {
        "src": "./loading.png",
        "alt": ""
      }
    }), "\u52A0\u8F7D\u4E2D"]);
  }
};
exports.default = _default;