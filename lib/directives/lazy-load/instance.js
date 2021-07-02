"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lazyLoad = _interopRequireDefault(require("../../utils/lazy-load"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directive = {
  bind: function bind(el, _bind, vnode) {},
  inserted: function inserted(el, bind, vnode) {
    new _lazyLoad.default(el, bind.value);
  },
  unbind: function unbind() {}
};
var _default = directive;
exports.default = _default;