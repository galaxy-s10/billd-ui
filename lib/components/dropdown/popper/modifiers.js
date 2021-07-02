"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setZIndex = exports.sameWidth = exports.resetTransformOrigin = void 0;
var resetTransformOrigin = {
  name: "resetTransformOrigin",
  enabled: true,
  phase: "beforeWrite",
  requires: ["flip"],
  options: {
    transformOrigin: true
  },
  fn: function fn(params) {
    var state = params.state,
        options = params.options;
    var _options$transformOri = options.transformOrigin,
        transformOrigin = _options$transformOri === void 0 ? true : _options$transformOri;

    if (!transformOrigin) {
      return;
    }

    var placementMap = {
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    };
    var placement = state.placement.split("-")[0];
    var origin = placementMap[placement];
    state.styles.popper.transformOrigin = typeof transformOrigin === "string" ? transformOrigin : ["top", "bottom"].indexOf(placement) > -1 ? "center ".concat(origin) : "".concat(origin, " center");
  }
};
exports.resetTransformOrigin = resetTransformOrigin;
var sameWidth = {
  name: "sameWidth",
  enabled: true,
  requires: ["computeStyles"],
  phase: "beforeWrite",
  fn: function fn(params) {
    var state = params.state;
    state.styles.popper.width = "".concat(state.rects.reference.width, "px");
  },
  effect: function effect(params) {
    var state = params.state;
    state.elements.popper.style.width = "".concat(state.elements.reference.offsetWidth, "px");
  }
};
exports.sameWidth = sameWidth;
var hasInitZIndex = false;
var zIndex;
var PopupManager = {
  nextZIndex: function nextZIndex() {
    return this.zIndex++;
  }
};
Object.defineProperty(PopupManager, "zIndex", {
  configurable: true,
  get: function get() {
    if (!hasInitZIndex) {
      zIndex = zIndex || 2000;
      hasInitZIndex = true;
    }

    return zIndex;
  },
  set: function set(value) {
    zIndex = value;
  }
});
var setZIndex = {
  name: "setZIndex",
  enabled: true,
  requires: ["computeStyles"],
  phase: "beforeWrite",
  fn: function fn(params) {
    var state = params.state;
    state.styles.popper.zIndex = "".concat(PopupManager.nextZIndex());
  }
};
exports.setZIndex = setZIndex;