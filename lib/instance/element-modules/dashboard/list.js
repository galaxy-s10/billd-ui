"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

var _modules = _interopRequireDefault(require("../../modules"));

var _options = _interopRequireDefault(require("../../../dist/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 明细表
 */
var ListModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(ListModules, _BaseChartModules);

  var _super = _createSuper(ListModules);

  function ListModules(chart, modules) {
    var _this;

    _classCallCheck(this, ListModules);

    _this = _super.call(this, chart, modules); // 设置行

    if (_this.data.dimension) {
      _this.data.dimension.title = '列';
      _this.data.dimension.max = 20;
      _this.data.dimension.supportedTypes = ['string', 'date', 'number'];
      _this.data.dimension.batch = true;
    } // 隐藏指标


    if (_this.data.metric) {
      _this.data.metric.display = false;
    } // 隐藏数据条数限制


    if (_this.data.limit) {
      delete _this.data.limit;
      delete chart.data.limit;
    } // 是否需要导出


    if (_options.default.download.list) {
      _this.styles.download = new _modules.default.Download();
    }

    _this.styles.orderNumber = new _modules.default.OrderNumber();
    _this.styles.orderNumber.displayOrderName = true; // 从透视图切换成明细表时 带上序号

    if (chart.styles.orderNumber && chart.styles.orderNumber.checked && !chart.styles.orderNumber.orderName) {
      chart.styles.orderNumber.orderName = chart.styles.orderNumber.orderName ? chart.styles.orderNumber.orderName : '序号';
    }

    _this.styles.freezeHead = new _modules.default.FreezeHead();
    _this.styles.freezeHead.displayColumnNumber = true;
    _this.styles.freezeHead.columnNumber = 0; // 从透视图切换成明细表时 带上固定列

    if (chart.styles.freezeHead && chart.styles.freezeHead.column) {
      chart.styles.freezeHead.columnNumber = chart.styles.freezeHead.columnNumber ? chart.styles.freezeHead.columnNumber : 0;
    } // 明细表没有图表配色


    delete _this.styles.theme;

    if (modules) {
      if (modules.data) {
        if (modules.data.dimension) {
          chart.data.dimension = _toConsumableArray(modules.data.dimension);
        }

        if (modules.data.groupDimension && modules.data.groupDimension.length > 0) {
          var _chart$data$dimension;

          (_chart$data$dimension = chart.data.dimension).push.apply(_chart$data$dimension, _toConsumableArray(modules.data.groupDimension));

          chart.data.groupDimension = [];
        }

        if (modules.data.metric && modules.data.metric.length > 0) {
          var _chart$data$dimension2;

          (_chart$data$dimension2 = chart.data.dimension).push.apply(_chart$data$dimension2, _toConsumableArray(modules.data.metric.map(function (metric) {
            delete metric.options.aggregateType;
            return metric;
          })));

          chart.data.metric = [];
        } // 零时处理 日期字段 统一为年月日


        chart.data.dimension.forEach(function (d) {
          if (d.type === 'date') {
            d.options.format = 'YMDHMS';
          }

          if (d.type !== 'number' && d.options.numberFormat) {
            // 使用于切换图表时 产生的数字格式设置
            delete d.options.numberFormat;
          }
        });
      }
    }

    _this.handleModules(chart, modules);

    return _this;
  }

  return ListModules;
}(_base.default);

exports.default = ListModules;