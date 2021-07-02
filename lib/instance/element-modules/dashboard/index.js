"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _charts = _interopRequireDefault(require("./charts"));

var _longText = _interopRequireDefault(require("./long-text"));

var _filterPicker = _interopRequireDefault(require("./filter-picker"));

var _chartType = require("../../../enum/chart-type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(element, oldChart) {
  var chartModules;

  switch (element.type) {
    case _chartType.ElementType.BAR:
    case _chartType.ElementType.PILEBAR:
    case _chartType.ElementType.STRIPE:
    case _chartType.ElementType.LINE:
    case _chartType.ElementType.AREA:
    case _chartType.ElementType.PIE:
    case _chartType.ElementType.FUNNEL:
    case _chartType.ElementType.RADAR:
    case _chartType.ElementType.TABLE:
    case _chartType.ElementType.LIST:
    case _chartType.ElementType.CARD:
    case _chartType.ElementType.SCATTER:
    case _chartType.ElementType.BIAX:
      chartModules = (0, _charts.default)(element, oldChart);
      break;

    case _chartType.ElementType.FILTERPICKER:
      chartModules = new _filterPicker.default(element);
      break;

    case _chartType.ElementType.LONGTEXT:
      chartModules = new _longText.default(element);
      break;

    default:
      break;
  }

  return chartModules;
};

exports.default = _default;