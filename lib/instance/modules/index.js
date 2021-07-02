"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dimension = _interopRequireDefault(require("./dimension"));

var _groupDimension = _interopRequireDefault(require("./group-dimension"));

var _metric = _interopRequireDefault(require("./metric"));

var _sort = _interopRequireDefault(require("./sort"));

var _filter = _interopRequireDefault(require("./filter"));

var _theme = _interopRequireDefault(require("./theme"));

var _title = _interopRequireDefault(require("./title"));

var _limit = _interopRequireDefault(require("./limit"));

var _dimensionLimit = _interopRequireDefault(require("./dimension-limit"));

var _direction = _interopRequireDefault(require("./direction"));

var _metricRange = _interopRequireDefault(require("./metric-range"));

var _dataLabel = _interopRequireDefault(require("./data-label"));

var _multipleDataLabel = _interopRequireDefault(require("./multiple-data-label"));

var _linkage = _interopRequireDefault(require("./linkage"));

var _download = _interopRequireDefault(require("./download"));

var _orderNumber = _interopRequireDefault(require("./orderNumber"));

var _freezeHead = _interopRequireDefault(require("./freezeHead"));

var _legend = _interopRequireDefault(require("./legend"));

var _axisx = _interopRequireDefault(require("./axisx"));

var _chartSwitch = _interopRequireDefault(require("./chart-switch"));

var _warningLine = _interopRequireDefault(require("./warning-line"));

var _paintCoatTheme = _interopRequireDefault(require("./paint-coat-theme"));

var _paintCoat = _interopRequireDefault(require("./paint-coat"));

var _elementCoat = _interopRequireDefault(require("./element-coat"));

var _multiMetricType = _interopRequireDefault(require("./multi-metric-type"));

var _multiRange = _interopRequireDefault(require("./multi-range"));

var _metricGroup = _interopRequireDefault(require("./metric-group"));

var _fontSetting = _interopRequireDefault(require("./font-setting"));

var _splitLine = _interopRequireDefault(require("./split-line"));

var _axisySet = _interopRequireDefault(require("./axisy-set"));

var _datazoom = _interopRequireDefault(require("./datazoom"));

var _mapArea = _interopRequireDefault(require("./map-area"));

var _mapDrill = _interopRequireDefault(require("./map-drill"));

var _mapTheme = _interopRequireDefault(require("./map-theme"));

var _mapDigital = _interopRequireDefault(require("./map-digital"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 导出所有的属性模块实例对象
 */
var _default = {
  MapDigitalSet: _mapDigital.default,
  MapArea: _mapArea.default,
  MapDrill: _mapDrill.default,
  MapTheme: _mapTheme.default,
  Dimension: _dimension.default,
  GroupDimension: _groupDimension.default,
  Metric: _metric.default,
  Theme: _theme.default,
  ChartTitle: _title.default,
  Sort: _sort.default,
  Filter: _filter.default,
  Limit: _limit.default,
  DimensionLimit: _dimensionLimit.default,
  Direction: _direction.default,
  MetricRange: _metricRange.default,
  DataLabel: _dataLabel.default,
  MultipleDataLabel: _multipleDataLabel.default,
  Linkage: _linkage.default,
  Download: _download.default,
  OrderNumber: _orderNumber.default,
  FreezeHead: _freezeHead.default,
  Legend: _legend.default,
  AxisX: _axisx.default,
  ChartSwitch: _chartSwitch.default,
  WarningLine: _warningLine.default,
  PaintCoatTheme: _paintCoatTheme.default,
  PaintCoat: _paintCoat.default,
  ElementCoat: _elementCoat.default,
  MultiMetricType: _multiMetricType.default,
  MultiRange: _multiRange.default,
  MetricGroup: _metricGroup.default,
  FontSetting: _fontSetting.default,
  SplitLine: _splitLine.default,
  AxisYSet: _axisySet.default,
  DataZoom: _datazoom.default
};
exports.default = _default;