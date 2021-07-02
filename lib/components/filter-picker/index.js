"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _chartType = require("../../enum/chart-type");

var _filterElement = _interopRequireDefault(require("../filter/filter-element"));

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//H3.Report.FilterFieldExtend 报错
// import H3FilterElement from './button';
// import './styles/index.less';
var ReportSmartFilter = /*#__PURE__*/function (_Vue) {
  _inherits(ReportSmartFilter, _Vue);

  var _super = _createSuper(ReportSmartFilter);

  function ReportSmartFilter() {
    var _this;

    _classCallCheck(this, ReportSmartFilter);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-report-smart-filter';
    _this.timer = null; // 定时器，延时筛选用

    _this.chartSize = {};
    return _this;
  } // 过滤条件


  _createClass(ReportSmartFilter, [{
    key: "filter",
    get: function get() {
      if (this.chart.type === _chartType.ElementType.FILTERPICKER) {
        return {
          field: this.chart.dataSources.length && this.chart.dataSources[0].field ? this.chart.dataSources[0].field : this.chart.field,
          formula: this.chart.formula,
          text: this.chart.text
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [this.filter.field && h("h3-filter-element", {
        attrs: {
          filter: this.filter,
          format: this.chart.format,
          chartSize: this.chartSize,
          status: this.status
        },
        on: {
          "changeValue": function changeValue() {
            return _this2.changeValue;
          }
        }
      })]);
    } // 监听公式改变

  }, {
    key: "changeFormula",
    value: function changeFormula(formula) {
      this.chart.formula = formula;

      if (this.status !== "design") {
        this.$emit('change', this.chart);
      }
    }
    /**
     * 改变值
     * @param value 筛选值
     */

  }, {
    key: "changeValue",
    value: function changeValue(value) {
      this.chart.text = value; // this.setFilter()

      this.$emit('change', this.chart);
    }
    /**
     * 刷新过滤器
     */

  }, {
    key: "refreshFilterPicker",
    value: function refreshFilterPicker() {
      var _this3 = this;

      setTimeout(function () {
        _this3.$set(_this3.chartSize, 'w', _this3.chart.w);

        _this3.$set(_this3.chartSize, 'h', _this3.chart.h);
      }, 50); // 动画延迟
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.refreshFilterPicker();
      this.$emit('register-refresh', {
        view: this.refreshFilterPicker
      });
    }
  }]);

  return ReportSmartFilter;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportSmartFilter.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], ReportSmartFilter.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)('chart.formula', {
  deep: true
})], ReportSmartFilter.prototype, "changeFormula", null);

ReportSmartFilter = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-smart-filter',
  components: {
    H3FilterElement: _filterElement.default
  }
})], ReportSmartFilter);
var _default = ReportSmartFilter;
exports.default = _default;