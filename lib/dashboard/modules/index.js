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

var _dimensionLimit = _interopRequireDefault(require("./dimension-limit"));

var _limit = _interopRequireDefault(require("./limit"));

var _metricRange = _interopRequireDefault(require("./metric-range"));

var _dataLabel = _interopRequireDefault(require("./data-label"));

var _multipleDataLabel = _interopRequireDefault(require("./multiple-data-label"));

var _linkage = _interopRequireDefault(require("./linkage"));

var _download = _interopRequireDefault(require("./download"));

var _orderNumber = _interopRequireDefault(require("./order-number"));

var _freezeHead = _interopRequireDefault(require("./freeze-head"));

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

var _dataZoom = _interopRequireDefault(require("./data-zoom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  H3Dimension: _dimension.default,
  H3GroupDimension: _groupDimension.default,
  H3Metric: _metric.default,
  H3Sort: _sort.default,
  H3Filter: _filter.default,
  H3Theme: _theme.default,
  H3ChartTitle: _title.default,
  H3DimensionLimit: _dimensionLimit.default,
  H3Limit: _limit.default,
  H3MetricRange: _metricRange.default,
  H3DataLabel: _dataLabel.default,
  H3MultipleDataLabel: _multipleDataLabel.default,
  H3Linkage: _linkage.default,
  H3Download: _download.default,
  H3OrderNumber: _orderNumber.default,
  H3FreezeHead: _freezeHead.default,
  H3Legend: _legend.default,
  H3AxisX: _axisx.default,
  H3ChartSwitch: _chartSwitch.default,
  H3WarningLine: _warningLine.default,
  H3PaintCoatTheme: _paintCoatTheme.default,
  H3PaintCoat: _paintCoat.default,
  H3ElementCoat: _elementCoat.default,
  H3MultiMetricType: _multiMetricType.default,
  H3MultiRange: _multiRange.default,
  H3MetricGroup: _metricGroup.default,
  H3FontSetting: _fontSetting.default,
  H3DataZoom: _dataZoom.default
};
exports.default = _default;