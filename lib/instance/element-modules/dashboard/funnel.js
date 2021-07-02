"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

var _modules = _interopRequireDefault(require("../../modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FunnelChartModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(FunnelChartModules, _BaseChartModules);

  var _super = _createSuper(FunnelChartModules);

  function FunnelChartModules(chart, modules) {
    var _this;

    _classCallCheck(this, FunnelChartModules);

    _this = _super.call(this, chart, modules);
    _this.styles.linkage = new _modules.default.Linkage();
    _this.styles.legend = new _modules.default.Legend(); // 隐藏sort - 排序显示设置

    if (_this.data.sort) {
      _this.data.sort.disabled = true;

      if (chart.data.sort && chart.data.sort.length) {
        chart.data.sort.forEach(function (sort) {
          sort.options.order = 'desc';
        });
      }
    }

    if (_this.data.dimension) {
      _this.data.dimension.max = 1;
    }

    if (_this.data.metric) {
      _this.data.metric.max = 1;

      _this.data.metric.change = function (_ref) {
        var metric = _ref.metric;

        if (metric && metric.length && metric[0].uid && chart.data.sort) {
          metric[0].options.order = 'desc';
          chart.data.sort = metric;
        }

        return {
          modules: _assertThisInitialized(_this),
          dataGroup: chart.data
        };
      };
    }

    _this.handleModules(chart, modules);

    return _this;
  }

  return FunnelChartModules;
}(_base.default);

exports.default = FunnelChartModules;