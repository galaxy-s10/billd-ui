"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chartType = require("../../../enum/chart-type");

var _bar = _interopRequireDefault(require("../../../instance/element-modules/dashboard/bar"));

var _pileBar = _interopRequireDefault(require("../../../instance/element-modules/dashboard/pile-bar"));

var _stripe = _interopRequireDefault(require("../../../instance/element-modules/dashboard/stripe"));

var _line = _interopRequireDefault(require("../../../instance/element-modules/dashboard/line"));

var _area = _interopRequireDefault(require("../../../instance/element-modules/dashboard/area"));

var _pie = _interopRequireDefault(require("../../../instance/element-modules/dashboard/pie"));

var _funnel = _interopRequireDefault(require("../../../instance/element-modules/dashboard/funnel"));

var _radar = _interopRequireDefault(require("../../../instance/element-modules/dashboard/radar"));

var _table = _interopRequireDefault(require("../../../instance/element-modules/dashboard/table"));

var _list = _interopRequireDefault(require("../../../instance/element-modules/dashboard/list"));

var _card = _interopRequireDefault(require("../../../instance/element-modules/dashboard/card"));

var _scatter = _interopRequireDefault(require("../../../instance/element-modules/dashboard/scatter"));

var _biax = _interopRequireDefault(require("../../../instance/element-modules/dashboard/biax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
 * 对于所有的图表类型做统一处理
 * @param chart
 * @param oldChart
 */
var _default = function _default(chart, oldChart) {
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
      chartModules = new _bar.default(chart, modules);
      break;

    case _chartType.ElementType.PILEBAR:
      chartModules = new _pileBar.default(chart, modules);
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

    case _chartType.ElementType.LIST:
      chartModules = new _list.default(chart, modules);
      break;

    case _chartType.ElementType.CARD:
      chartModules = new _card.default(chart, modules);
      break;

    case _chartType.ElementType.SCATTER:
      chartModules = new _scatter.default(chart, modules);
      break;

    case _chartType.ElementType.BIAX:
      chartModules = new _biax.default(chart, modules);
      break;

    default:
      break;
  }

  return chartModules;
};

exports.default = _default;