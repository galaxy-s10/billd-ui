"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

var _modules = _interopRequireDefault(require("../../modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var TableModules = /*#__PURE__*/function (_BaseChartModules) {
  _inherits(TableModules, _BaseChartModules);

  var _super = _createSuper(TableModules);

  function TableModules(chart, modules) {
    var _this;

    _classCallCheck(this, TableModules);

    _this = _super.call(this, chart, modules);
    var dataSort = {
      dimension: null,
      groupDimension: null,
      metric: null,
      sort: null
    };
    var dimensionArr = [];
    var groupDimensionArr = [];
    _this.data = _extends(dataSort, _this.data, {
      groupDimension: new _modules.default.GroupDimension()
    });

    if (_this.data.dimension) {
      _this.data.dimension.supportedTypes = ['string', 'date'];
      _this.data.dimension.max = 20;
      _this.data.dimension.title = '行维度';
    }

    if (chart.data.dimension) {
      dimensionArr = chart.data.dimension.filter(function (item) {
        return item.type;
      });
      var removeIndex = [];
      var numberFields = chart.data.dimension.filter(function (field, index) {
        if (field.type === 'number') {
          removeIndex.push(index);
          return true;
        }

        return false;
      });

      if (chart.data.metric) {
        var _chart$data$metric;

        (_chart$data$metric = chart.data.metric).push.apply(_chart$data$metric, _toConsumableArray(numberFields));
      }

      chart.data.dimension = chart.data.dimension.filter(function (field, index) {
        return !removeIndex.includes(index);
      });
    }

    if (_this.data.groupDimension) {
      _this.data.groupDimension.supportedTypes = ['string', 'date'];
      _this.data.groupDimension.max = 20;
      _this.data.groupDimension.title = '列维度';
    }

    if (chart.data.groupDimension) {
      groupDimensionArr = chart.data.groupDimension.filter(function (item) {
        return item.type;
      });
    } // 维度>=2时，隐藏数据显示设置功能


    if (dimensionArr.length + groupDimensionArr.length >= 2) {
      _this.data.limit.display = false;
      chart.data.limit = null;
    }

    if (_this.data.metric) {
      _this.data.metric.max = 20;
    } // 隐藏dimensionLimit - 维度数据设置


    if (_this.styles.dimensionLimit) {
      _this.styles.dimensionLimit.display = false;
      chart.styles.dimensionLimit = null;
    }

    if (_this.data.dimension && _this.data.metric && _this.data.groupDimension) {
      _this.data.groupDimension.change = function (data) {
        return _this.initDimensionsAndMetric(_assertThisInitialized(_this), data);
      };

      _this.data.dimension.change = function (data) {
        return _this.initDimensionsAndMetric(_assertThisInitialized(_this), data);
      };

      _this.data.metric.change = function (data) {
        return _this.initDimensionsAndMetric(_assertThisInitialized(_this), data);
      };
    }

    _this.handleModules(chart, modules);

    return _this;
  }
  /**
   * 处理基本两维一指标 or 一维多指标
   * @param modules
   * @param data
   */


  _createClass(TableModules, [{
    key: "initDimensionsAndMetric",
    value: function initDimensionsAndMetric(modules, data) {
      // 维度>=2时，隐藏数据显示设置功能
      var dimensionArr = [];
      var groupDimensionArr = [];

      if (data.dimension) {
        dimensionArr = data.dimension.filter(function (item) {
          return item.type;
        });
      } else {
        dimensionArr = modules.inventedChartData.dimension.filter(function (item) {
          return item.type;
        });
      }

      if (data.groupDimension) {
        groupDimensionArr = data.groupDimension.filter(function (item) {
          return item.type;
        });
      } else {
        groupDimensionArr = modules.inventedChartData.groupDimension.filter(function (item) {
          return item.type;
        });
      }

      if (dimensionArr.length + groupDimensionArr.length >= 2) {
        modules.data.limit.display = false;
      } else {
        modules.data.limit.display = true;
      }

      return {
        modules: modules,
        dataGroup: _extends(modules.inventedChartData, data)
      };
    }
  }]);

  return TableModules;
}(_base.default);

exports.default = TableModules;