"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
exports.elementIndex = elementIndex;
exports.css = css;
exports.default = exports.offSet = void 0;

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

/**
 * 通过选择器获取element的父元素节点
 * @param el
 * @param selector
 */
function closest(el, selector) {
  var matchesSelector = el.matches;

  if (!matchesSelector) {
    var tEl = el;

    matchesSelector = tEl.matchesSelector || tEl.mozMatchesSelector || tEl.msMatchesSelector || tEl.oMatchesSelector || tEl.webkitMatchesSelector || function (s) {
      // @ts-ignore
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length; // @ts-ignore

      while ((_readOnlyError("i"), --i) >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  while (el) {
    if (matchesSelector.call(el, selector)) {
      break;
    }

    el = el.parentElement;
  }

  return el;
}
/**
 * 获取元素index
 * @param el
 */


function elementIndex(el) {
  var current = el.parentElement || {};
  return Array.prototype.indexOf.call(current.children, el);
}
/**
 * 设置元素css
 * @param el
 * @param prop  属性名称 例如: width height..
 * @param val  属性值 如果不传值就是获取对应属性的值。传值就是赋值
 */


function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      var ret = null;

      if (document.defaultView && document.defaultView.getComputedStyle) {
        ret = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        ret = el.currentStyle;
      }

      if (ret) {
        return prop === void 0 ? ret : ret[prop];
      }
    } else {
      if (prop && !(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }

      if (prop) {
        style[prop] = val + (typeof val === "string" ? "" : "px");
      }
    }
  }
}

var offSet = function offSet(curEle, targetClassName) {
  var totalLeft = null,
      totalTop = null,
      par = curEle.offsetParent; //首先加自己本身的左偏移和上偏移

  totalLeft += curEle.offsetLeft;
  totalTop += curEle.offsetTop;
  var tip = false; //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加

  while (par && !tip) {
    if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
      //累加父级参照物的边框
      totalLeft += par.clientLeft;
      totalTop += par.clientTop;
    } //累加父级参照物本身的偏移


    totalLeft += par.offsetLeft;
    totalTop += par.offsetTop;

    if (targetClassName) {
      tip = par.className === targetClassName;
    }

    par = par.offsetParent;
  }

  return {
    left: totalLeft,
    top: totalTop
  };
};

exports.offSet = offSet;
var _default = {
  closest: closest,
  elementIndex: elementIndex,
  css: css
};
exports.default = _default;