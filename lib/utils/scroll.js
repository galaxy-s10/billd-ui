"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTop = scrollTop;
exports.default = void 0;

var _raf = require("./raf");

function scrollTop(el) {
  var targetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var time = arguments.length > 2 ? arguments[2] : undefined;

  if (!time) {
    el.scrollTop = targetTop;
    return targetTop;
  }

  var spacingTime = 1000 / 60;
  var spacingIndex = time / spacingTime; // 计算循环的次数

  var nowTop = el.scrollTop; // 获取当前滚动条位置

  var everTop = (targetTop - nowTop) / spacingIndex; // 计算每次滑动的距离

  (0, _raf.setInterval)(function () {
    if (spacingIndex > 0) {
      spacingIndex--;
      el.scrollTop = nowTop += everTop;
    } else {
      return true; // 返回true，停止
    }
  }, spacingTime);
}

var _default = {
  scrollTop: scrollTop
};
exports.default = _default;