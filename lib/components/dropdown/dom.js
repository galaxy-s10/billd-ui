"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setStyle = setStyle;
exports.isInContainer = exports.getScrollContainer = exports.isScroll = exports.getStyle = exports.once = exports.off = exports.on = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isServer = _vue.default.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([:-_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);
/* istanbul ignore next */

var trim = function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* istanbul ignore next */


var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, "Moz$1");
};
/* istanbul ignore next */


var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */


exports.on = on;

var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */


exports.off = off;

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
/* istanbul ignore next */


exports.once = once;

function hasClass(el, cls) {
  if (!el || !cls) return false;

  if (cls.indexOf(" ") !== -1) {
    throw new Error("className should not contain space.");
  }

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
/* istanbul ignore next */


function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
/* istanbul ignore next */


function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
/* istanbul ignore next */


var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  var cacheStyleName = camelCase(styleName);

  if (cacheStyleName === "float") {
    cacheStyleName = "styleFloat";
  }

  try {
    switch (cacheStyleName) {
      case "opacity":
        try {
          return element.filters.item("alpha").opacity / 100;
        } catch (e) {
          return 1.0;
        }

      default:
        return element.style[cacheStyleName] || element.currentStyle ? element.currentStyle[cacheStyleName] : null;
    }
  } catch (e) {
    return element.style[cacheStyleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  var cacheStyleName = camelCase(styleName);

  if (cacheStyleName === "float") {
    cacheStyleName = "cssFloat";
  }

  try {
    var computed = document.defaultView.getComputedStyle(element, "");
    return element.style[cacheStyleName] || computed ? computed[cacheStyleName] : null;
  } catch (e) {
    return element.style[cacheStyleName];
  }
};
/* istanbul ignore next */

exports.getStyle = getStyle;

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (_typeof(styleName) === "object") {
    for (var sprop in styleName) {
      if (Object.prototype.hasOwnProperty.call(styleName, sprop)) {
        setStyle(element, sprop, styleName[sprop]);
      }
    }
  } else {
    var cacheStyleName = camelCase(styleName);

    if (cacheStyleName === "opacity" && ieVersion < 9) {
      element.style.filter = isNaN(value) ? "" : "alpha(opacity=" + value * 100 + ")";
    } else {
      element.style[cacheStyleName] = value;
    }
  }
}

var isScroll = function isScroll(el, vertical) {
  if (isServer) return;
  var determinedDirection = vertical !== null || vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x") : getStyle(el, "overflow");
  return overflow.match(/(scroll|auto)/);
};

exports.isScroll = isScroll;

var getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;
  var parent = el;

  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }

    if (isScroll(parent, vertical)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return parent;
};

exports.getScrollContainer = getScrollContainer;

var isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;
  var elRect = el.getBoundingClientRect();
  var containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

exports.isInContainer = isInContainer;