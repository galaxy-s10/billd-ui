"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

var _modules = _interopRequireDefault(require("../../modules"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 双轴图
 */
var BiaxModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(BiaxModules, _BaseChartModules);

  var _super = _createSuper(BiaxModules);

  function BiaxModules(chart, modules) {
    var _this;

    _classCallCheck(this, BiaxModules);

    _this = _super.call(this, chart, modules); // 设置维度

    if (_this.data.dimension) {
      _this.data.dimension.title = "维度";
      _this.data.dimension.max = 2; // this.data.dimension.supportedTypes = ['string', 'date', 'number'];
    } // 隐藏指标


    if (_this.data.metric) {
      _this.data.metric.display = false;
    } // 隐藏数据条数限制


    if (_this.data.limit) {
      delete _this.data.limit;
      delete chart.data.limit;
    } // 开启缩略轴


    _this.styles.dataZoom = new _modules.default.DataZoom(); // 开启图标联动

    _this.styles.linkage = new _modules.default.Linkage(); // 开启坐标X轴设置

    _this.styles.axisX = new _modules.default.AxisX(); // 开启图例设置

    _this.styles.legend = new _modules.default.Legend(); // 开启双轴设置

    _this.styles.multiMetricType = new _modules.default.MultiMetricType(); // 开启双轴极限值配置

    _this.styles.multiRange = new _modules.default.MultiRange(); // 开启多维度

    _this.data.metricGroup = new _modules.default.MetricGroup();
    (0, _utils.handleDimensionsAndMetricGroup)(_assertThisInitialized(_this), chart);

    _this.handleModules(chart, modules);

    return _this;
  }

  return BiaxModules;
}(_base.default);

exports.default = BiaxModules;