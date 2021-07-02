"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = exports.recursion = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var recursion = function recursion(obj, fn, recor, baseObj, compObj) {
  var key, cur;

  if (obj && _typeof(obj) === "object") {
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      recor.push(key);
      cur = obj[key];

      if (cur && _typeof(obj) === "object") {
        recursion(cur, fn, recor, baseObj, compObj);
      } // 将记录的层级关系数组传入回调


      fn(baseObj, compObj, recor);
      recor.pop();
    }
  }
};

exports.recursion = recursion;

var compare = function compare(baseObj, compObj, keyArr) {
  var base = baseObj,
      comp = compObj,
      i,
      len,
      key;
  console.log('i ' + i + len);

  for (var _i = 0, _len = keyArr.length; _i < _len; _i++) {
    key = keyArr[_i]; // 如果比较对象没有基准对象对应的key，将基准对象的值赋值给比较对象
    // 并跳出循环

    if (!comp.hasOwnProperty(key)) {
      comp[key] = base[key];
      break;
    } // 比较下一个


    comp = comp[key];
    base = base[key];
  }
};

exports.compare = compare;