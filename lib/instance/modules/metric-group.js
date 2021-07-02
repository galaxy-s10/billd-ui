"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fieldMapping = _interopRequireDefault(require("./field-mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 多组指标实例
 */
var ReportMetricGroupModule = /*#__PURE__*/function (_FieldMapping) {
  _inherits(ReportMetricGroupModule, _FieldMapping);

  var _super = _createSuper(ReportMetricGroupModule);

  function ReportMetricGroupModule(def) {
    var _this;

    _classCallCheck(this, ReportMetricGroupModule);

    _this = _super.call(this);
    _this.title = "";
    _this.display = true;
    _this.max = 2;
    _this.data = [{
      title: "指标（左）",
      max: 20,
      min: 1,
      supportedTypes: ["string", "date", "number"],
      display: true
    }, {
      title: "指标（右）",
      max: 20,
      min: 1,
      supportedTypes: ["string", "date", "number"],
      display: true
    }];
    _this.default = [[], []]; // 改变默认值

    if (def) {
      Object.keys(def).forEach(function (i) {
        _this[i] = def[i];
      });
    }

    return _this;
  }
  /**
   * 处理图表数据
   * @param chart
   */


  _createClass(ReportMetricGroupModule, [{
    key: "handleChartData",
    value: function handleChartData(chart) {
      var _this2 = this;

      var chartData = chart.data;

      if (chartData) {
        if (!chartData.metricGroup) {
          chartData.metricGroup = this.default;
        } else if (this.max && chartData.metricGroup) {
          if (chartData.metricGroup.length > this.max) {
            chartData.metricGroup = chartData.metricGroup.slice(0, this.max);
          }

          chartData.metricGroup = chartData.metricGroup.map(function (metric) {
            return metric.filter(function (field) {
              return _this2.supportedTypes.includes(field.type);
            });
          });
        }
      }
    }
  }]);

  return ReportMetricGroupModule;
}(_fieldMapping.default);

exports.default = ReportMetricGroupModule;