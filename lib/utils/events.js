"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
exports.dispatch = dispatch;
exports.default = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 注册事件监听
 * @param el
 * @param event
 * @param fn
 * @param options
 */
function on(el, event, fn, options) {
  el.addEventListener(event, fn, options);
}
/**
 * 删除事件监听
 * @param el
 * @param event
 * @param fn
 * @param options
 */


function off(el, event, fn, options) {
  el.removeEventListener(event, fn, options);
}
/**
 * 触发事件
 * @param el
 * @param eventName
 * @param options
 */


function dispatch(el, eventName, options) {
  if (document.createEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);

    _extends(event, options);

    el.dispatchEvent(event);
  } else if (el.createEventObject) {
    el.fireEvent("on".concat(eventName));
  }
}

var _default = {
  on: on,
  off: off,
  dispatch: dispatch
};
exports.default = _default;