"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _designer = _interopRequireDefault(require("./designer"));

var _dashboard = _interopRequireDefault(require("./dashboard"));

var _singleChart = _interopRequireDefault(require("./single-chart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dashboard.default.Designer = _designer.default;
_dashboard.default.SingleChart = _singleChart.default;
window.rx_report = '3.2.61';
var _default = _dashboard.default;
exports.default = _default;