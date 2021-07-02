"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 返回值匹配别名，兼容别名key_value及直接使用value两种方式
 * @param key
 * @param value
 * @param alias
 */
var getAliaValue = function getAliaValue(key, value, alias) {
  var keyLowerCase = key.toLowerCase();
  var k = "".concat(keyLowerCase, "_").concat(value);
  return alias ? alias[k] ? alias[k] : value : value;
};

var _default = getAliaValue;
exports.default = _default;