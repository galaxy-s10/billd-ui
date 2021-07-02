"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElementInstance = createElementInstance;
exports.FilterInstance = exports.LongTextInstance = exports.ChartBaseInstance = exports.default = void 0;

var _uid = require("../../utils/uid");

var _chartType = require("../../enum/chart-type");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var charNum = new Date().getTime();

var BaseInstance = function BaseInstance(type, oldChart) {
  _classCallCheck(this, BaseInstance);

  this.title = '未命名的图表'; // 图表标题

  this.x = 0; // 坐标X

  this.y = 0; // 坐标Y

  this.w = 16; // 宽度

  this.h = 8; // 高度

  this.minW = 8; // 最小宽度

  this.minH = 6; // 最小长度

  this.handleActive = false; // 是否被激活

  this.type = type;
  this.i = charNum++;
  this.uid = (0, _uid.guid)();
};
/**
 * 富文本实例类
 */


var LongTextInstance = /*#__PURE__*/function (_BaseInstance) {
  _inherits(LongTextInstance, _BaseInstance);

  var _super = _createSuper(LongTextInstance);

  function LongTextInstance(type, oldChart) {
    var _this;

    _classCallCheck(this, LongTextInstance);

    _this = _super.call(this, type, oldChart);
    _this.edit = false;
    _this.content = ''; // 临时使用，过后删除

    _this.minH = 2; // 最小高度

    _this.title = '未命名的文本';

    if (oldChart) {
      _extends(_assertThisInitialized(_this), oldChart);
    }

    return _this;
  }

  return LongTextInstance;
}(BaseInstance);
/**
 * 过滤器实例类
 */


exports.LongTextInstance = LongTextInstance;

var FilterInstance = /*#__PURE__*/function (_BaseInstance2) {
  _inherits(FilterInstance, _BaseInstance2);

  var _super2 = _createSuper(FilterInstance);

  function FilterInstance(type, oldChart) {
    var _this2;

    _classCallCheck(this, FilterInstance);

    _this2 = _super2.call(this, type, oldChart);
    _this2.w = 12; // 宽度

    _this2.h = 3; // 高度

    _this2.minH = 3; // 最小长度

    _this2.chartIds = [];
    _this2.dataSources = [];
    _this2.format = '';
    _this2.formula = '';
    _this2.text = [];
    _this2.title = '';

    if (oldChart) {
      _extends(_assertThisInitialized(_this2), oldChart);
    }

    return _this2;
  }

  return FilterInstance;
}(BaseInstance);
/**
 * 图表基础实例类
 */


exports.FilterInstance = FilterInstance;

var ChartBaseInstance = /*#__PURE__*/function (_BaseInstance3) {
  _inherits(ChartBaseInstance, _BaseInstance3);

  var _super3 = _createSuper(ChartBaseInstance);

  function ChartBaseInstance(type, oldChart) {
    var _this3;

    _classCallCheck(this, ChartBaseInstance);

    _this3 = _super3.call(this, type, oldChart);
    _this3.resize = false; // 是否在resize

    _this3.data = {};
    _this3.styles = {};
    _this3.authorization = 1;
    _this3.dataSourceId = null;
    _this3.useType = null;
    _this3.linkageFilter = [];
    _this3.filterPicker = {};

    if (oldChart) {
      _extends(_assertThisInitialized(_this3), oldChart, {
        type: type
      });
    }

    if (_this3.useType === null) {
      _this3.useType = 1;
    }

    return _this3;
  }

  return ChartBaseInstance;
}(BaseInstance);
/**
 * 创建元件实例
 * @param elementType 元件类型
 * @param oldElement 旧元件
 */


exports.ChartBaseInstance = exports.default = ChartBaseInstance;

function createElementInstance(elementType, oldElement) {
  var element;

  switch (elementType) {
    case _chartType.ElementType.LONGTEXT:
      element = new LongTextInstance(elementType, oldElement);
      break;

    case _chartType.ElementType.FILTERPICKER:
      element = new FilterInstance(elementType, oldElement);
      break;

    default:
      element = new ChartBaseInstance(elementType, oldElement);
      break;
  }

  return element;
}