"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bar", {
  enumerable: true,
  get: function get() {
    return _bar.default;
  }
});
Object.defineProperty(exports, "line", {
  enumerable: true,
  get: function get() {
    return _line.default;
  }
});
Object.defineProperty(exports, "pileBar", {
  enumerable: true,
  get: function get() {
    return _pileBar.default;
  }
});
Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function get() {
    return _area.default;
  }
});
Object.defineProperty(exports, "funnel", {
  enumerable: true,
  get: function get() {
    return _funnel.default;
  }
});
Object.defineProperty(exports, "pie", {
  enumerable: true,
  get: function get() {
    return _pie.default;
  }
});
Object.defineProperty(exports, "radar", {
  enumerable: true,
  get: function get() {
    return _radar.default;
  }
});
Object.defineProperty(exports, "scatter", {
  enumerable: true,
  get: function get() {
    return _scatter.default;
  }
});
Object.defineProperty(exports, "stripe", {
  enumerable: true,
  get: function get() {
    return _stripe.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.default;
  }
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("./bar"));

var _line = _interopRequireDefault(require("./line"));

var _pileBar = _interopRequireDefault(require("./pile-bar"));

var _area = _interopRequireDefault(require("./area"));

var _funnel = _interopRequireDefault(require("./funnel"));

var _pie = _interopRequireDefault(require("./pie"));

var _radar = _interopRequireDefault(require("./radar"));

var _scatter = _interopRequireDefault(require("./scatter"));

var _stripe = _interopRequireDefault(require("./stripe"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  bar: _bar.default,
  line: _line.default,
  pileBar: _pileBar.default,
  area: _area.default,
  funnel: _funnel.default,
  pie: _pie.default,
  radar: _radar.default,
  scatter: _scatter.default,
  stripe: _stripe.default,
  map: _map.default
};
exports.default = _default;