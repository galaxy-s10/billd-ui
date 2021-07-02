"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = regexp;

/**
 * 常用的正则公式
 */
var regexps = {
  NUMBER: '^-?(\\.|(0|\\d+))?(\\.?\\d{0,4})?$'
};
/**
 * 正则匹配
 * @param type regexps的类型或者正则表达式
 * @param val  匹配值
 * @param empty 是否允许为空字符串
 */

function regexp(type, val) {
  var empty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return val === '' && empty ? true : new RegExp(typeof type === 'string' ? regexps[type] : type).test(val);
}