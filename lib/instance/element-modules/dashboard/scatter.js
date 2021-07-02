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

var ScatterChartModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(ScatterChartModules, _BaseChartModules);

  var _super = _createSuper(ScatterChartModules);

  function ScatterChartModules(chart, modules) {
    var _this;

    _classCallCheck(this, ScatterChartModules);

    _this = _super.call(this, chart, modules);

    if (_this.data.dimension) {
      // 维度条数限制
      _this.data.dimension.max = 2;
    }

    if (_this.data.metric) {
      // 指标条数限制
      _this.data.metric.max = 3;
    } // 图例设置


    _this.styles.legend = new _modules.default.Legend(); // 图表联动

    _this.styles.linkage = new _modules.default.Linkage(); // 自定义指标范围 - 气泡图 （气泡图展示不做自定义指标范围）
    // this.styles.multiRange = new Modules.MultiRange();
    // this.styles.multiRange.data[0].title = '坐标X轴';
    // this.styles.multiRange.data[1].title = '坐标Y轴';
    // 散点图不需要数据显示设置功能

    delete _this.data.limit;

    _this.handleModules(chart, modules);

    return _this;
  }

  return ScatterChartModules;
}(_base.default);

exports.default = ScatterChartModules;