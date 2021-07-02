"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("./bar"));

var _pileBar = _interopRequireDefault(require("./pile-bar"));

var _stripe = _interopRequireDefault(require("./stripe"));

var _line = _interopRequireDefault(require("./line"));

var _area = _interopRequireDefault(require("./area"));

var _pie = _interopRequireDefault(require("./pie"));

var _funnel = _interopRequireDefault(require("./funnel"));

var _radar = _interopRequireDefault(require("./radar"));

var _scatter = _interopRequireDefault(require("./scatter"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  bar: _bar.default,
  pileBar: _pileBar.default,
  stripe: _stripe.default,
  line: _line.default,
  area: _area.default,
  pie: _pie.default,
  funnel: _funnel.default,
  radar: _radar.default,
  scatter: _scatter.default,
  map: _map.default
};
exports.default = _default;