"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chartType = require("../../../enum/chart-type");

var _bar = _interopRequireDefault(require("../../../instance/element-modules/analysis/bar"));

var _line = _interopRequireDefault(require("../../../instance/element-modules/analysis/line"));

var _pileBar = _interopRequireDefault(require("../../../instance/element-modules/analysis/pile-bar"));

var _stripe = _interopRequireDefault(require("../../../instance/element-modules/analysis/stripe"));

var _area = _interopRequireDefault(require("../../../instance/element-modules/analysis/area"));

var _pie = _interopRequireDefault(require("../../../instance/element-modules/analysis/pie"));

var _funnel = _interopRequireDefault(require("../../../instance/element-modules/analysis/funnel"));

var _radar = _interopRequireDefault(require("../../../instance/element-modules/analysis/radar"));

var _table = _interopRequireDefault(require("../../../instance/element-modules/analysis/table"));

var _card = _interopRequireDefault(require("../../../instance/element-modules/analysis/card"));

var _scatter = _interopRequireDefault(require("../../../instance/element-modules/analysis/scatter"));

var _biax = _interopRequireDefault(require("../../../instance/element-modules/analysis/biax"));

var _map = _interopRequireDefault(require("../../../instance/element-modules/analysis/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
 * ChartModules 对于所有的图表类型做统一处理
 * @param chart
 * @param oldChart
 */
var _default = function _default(chart, oldChart, defaultOptions) {
  var chartModules;
  var modules;

  if (oldChart) {
    modules = {
      data: oldChart.data,
      styles: oldChart.styles
    };
  }

  switch (chart.type) {
    case _chartType.ElementType.BAR:
      chartModules = new _bar.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.PILEBAR:
      chartModules = new _pileBar.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.STRIPE:
      chartModules = new _stripe.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.LINE:
      chartModules = new _line.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.AREA:
      chartModules = new _area.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.PIE:
      chartModules = new _pie.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.FUNNEL:
      chartModules = new _funnel.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.RADAR:
      chartModules = new _radar.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.TABLE:
      chartModules = new _table.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.CARD:
      chartModules = new _card.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.SCATTER:
      chartModules = new _scatter.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.BIAX:
      chartModules = new _biax.default(chart, modules, defaultOptions);
      break;

    case _chartType.ElementType.MAP:
      chartModules = new _map.default(chart, modules, defaultOptions);
      break;

    default:
      break;
  }

  return chartModules;
};

exports.default = _default;