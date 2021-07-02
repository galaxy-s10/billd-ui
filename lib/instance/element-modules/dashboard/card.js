"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

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

// import Modules from '../../modules';
var CardModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(CardModules, _BaseChartModules);

  var _super = _createSuper(CardModules);

  function CardModules(chart, modules) {
    var _this;

    _classCallCheck(this, CardModules);

    _this = _super.call(this, chart, modules);

    if (_this.data.metric) {
      _this.data.metric.max = 1;
    } // 明细表没有图表配色


    delete _this.styles.theme;

    _this.handleDimensionAndMetric(chart);

    _this.handleModules(chart, modules);

    return _this;
  }
  /**
   * 初始化
   * @param chart
   */


  _createClass(CardModules, [{
    key: "handleDimensionAndMetric",
    value: function handleDimensionAndMetric(chart) {
      var _this2 = this;

      if (chart.data.dimension) {
        if (chart.data.dimension.length === 0) {
          this.data.limit.display = false;
          chart.data.limit = null;
        } else {
          this.data.limit.display = true;
        }
      }

      this.data.dimension.change = function (result) {
        if (result.dimension.length === 0) {
          _this2.data.limit.display = false;
          chart.data.limit = null;
        } else {
          _this2.data.limit.display = true;
        }
      };

      this.data.metric.change = function (result) {
        if (chart.data.dimension.length + result.metric.length < 2) {
          _this2.data.limit.display = false;
          chart.data.limit = null;
        } else {
          _this2.data.limit.display = true;
        }
      };
    }
  }]);

  return CardModules;
}(_base.default);

exports.default = CardModules;