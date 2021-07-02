"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _chartType = require("../../../enum/chart-type");

var _filterFormula = _interopRequireDefault(require("../../../components/filter/filter-formula"));

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

var ReportPro = (0, _vuexClass.namespace)("report");

var FilterFormula = /*#__PURE__*/function (_Vue) {
  _inherits(FilterFormula, _Vue);

  var _super = _createSuper(FilterFormula);

  function FilterFormula() {
    var _this;

    _classCallCheck(this, FilterFormula);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-design-header-formula";
    return _this;
  }

  _createClass(FilterFormula, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return this.showFormula && h("h3-formula", {
        attrs: {
          filter: this.filter,
          status: this.status
        },
        "class": this.prefixCls,
        on: {
          "change-filter": this.changeFilter
        }
      });
    } // 展示过滤公式

  }, {
    key: "showFormula",
    get: function get() {
      return this.chart.type === _chartType.ElementType.FILTERPICKER;
    } // 过滤参数

  }, {
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
    /**
     * 更改过滤条件
     *  filter 字段过滤参数
     */

  }, {
    key: "changeFilter",
    value: function changeFilter(filter) {
      this.chart.formula = filter.formula;
      this.chart.text = filter.text;
    }
  }]);

  return FilterFormula;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], FilterFormula.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "design"
})], FilterFormula.prototype, "status", void 0);

FilterFormula = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-design-header-formula",
  components: {
    H3Formula: _filterFormula.default
  }
})], FilterFormula);
var _default2 = FilterFormula;
exports.default = _default2;