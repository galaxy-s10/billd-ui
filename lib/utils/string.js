"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChineseCharacter = isChineseCharacter;
exports.subStr = subStr;
exports.getStrLen = getStrLen;
exports.makeStr = makeStr;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isChineseCharacter(str) {
  if (Object.prototype.toString.call(str) !== "[object String]") {
    return false;
  } //只允许传入一个字符


  var flag = true;

  var _iterator = _createForOfIteratorHelper(str),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      console.log(i);

      if (flag) {
        flag = false;
      } else {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var testCases = [["\u4E00", "\u9FEF"], ["\u3400", "\u4DB5"], ["\uD840\uDC00", "\uD869\uDED6"], ["\uD869\uDF00", "\uD86D\uDF34"], ["\uD86D\uDF40", "\uD86E\uDC1D"], ["\uD86E\uDC20", "\uD873\uDEA1"], ["\uD873\uDEB0", "\uD87A\uDFE0"] //扩展F
  ];

  for (var _i = 0, _testCases = testCases; _i < _testCases.length; _i++) {
    var t = _testCases[_i];

    if (t[0] <= str && t[1] >= str) {
      return true;
    }
  }

  return false;
}

function subStr(str, length) {
  var ellipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var count = 0;
  var res = "";

  var _iterator2 = _createForOfIteratorHelper(str),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _char = _step2.value;

      if (length > count) {
        if (isChineseCharacter(_char)) {
          count += 2;
        } else {
          count++;
        }

        res += _char;
      } else {
        ellipsis && res.length < str.length && (res += "...");
        break;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return res;
}
/**
 * 获取字符串长度
 * @param str
 */


function getStrLen(str) {
  var count = 0;

  var _iterator3 = _createForOfIteratorHelper(str),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _char2 = _step3.value;

      if (isChineseCharacter(_char2)) {
        count += 2;
      } else {
        count++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return count;
}
/**
 * 补全0
 * @param str
 * @param key  补全的字符
 * @param length  长度
 */


function makeStr(str, key, length) {
  return (str + Array(length).join(String(key))).slice(0, length);
}