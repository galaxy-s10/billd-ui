"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectDeepCopy = objectDeepCopy;
exports.compare = compare;
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 对象深拷贝
 * @param obj
 */
function objectDeepCopy(obj) {
  var deep = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
        deep[key] = objectDeepCopy(obj[key]);
      } else {
        deep[key] = obj[key];
      }
    }
  }

  return deep;
}
/**
 * 对象比较赋值
 * @param baseObj 基准对象
 * @param compObj 赋值对象
 */


function compare(baseObj, compObj) {
  if (compObj instanceof Object) {
    for (var key in compObj) {
      if (compObj.hasOwnProperty(key) && baseObj[key]) {
        if (compObj[key] instanceof Object) {
          compare(baseObj[key], compObj[key]);
        } else {
          baseObj[key] = compObj[key];
        }
      }
    }
  }
}

var _default = {
  objectDeepCopy: objectDeepCopy,
  compare: compare
};
exports.default = _default;