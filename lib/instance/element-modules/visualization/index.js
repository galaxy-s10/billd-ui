"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("./bar"));

var _stripe = _interopRequireDefault(require("./stripe"));

var _line = _interopRequireDefault(require("./line"));

var _area = _interopRequireDefault(require("./area"));

var _pie = _interopRequireDefault(require("./pie"));

var _funnel = _interopRequireDefault(require("./funnel"));

var _radar = _interopRequireDefault(require("./radar"));

var _table = _interopRequireDefault(require("./table"));

var _card = _interopRequireDefault(require("./card"));

var _chartType = require("../../../enum/chart-type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(chart, modules) {
  var chartModules;

  switch (chart.type) {
    case _chartType.ElementType.BAR:
      chartModules = new _bar.default(chart, modules);
      break;

    case _chartType.ElementType.STRIPE:
      chartModules = new _stripe.default(chart, modules);
      break;

    case _chartType.ElementType.LINE:
      chartModules = new _line.default(chart, modules);
      break;

    case _chartType.ElementType.AREA:
      chartModules = new _area.default(chart, modules);
      break;

    case _chartType.ElementType.PIE:
      chartModules = new _pie.default(chart, modules);
      break;

    case _chartType.ElementType.FUNNEL:
      chartModules = new _funnel.default(chart, modules);
      break;

    case _chartType.ElementType.RADAR:
      chartModules = new _radar.default(chart, modules);
      break;

    case _chartType.ElementType.TABLE:
      chartModules = new _table.default(chart, modules);
      break;

    case _chartType.ElementType.CARD:
      chartModules = new _card.default(chart, modules);
      break;

    default:
      break;
  }

  return chartModules;
};

exports.default = _default;