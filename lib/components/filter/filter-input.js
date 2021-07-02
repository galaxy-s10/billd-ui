"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterType = _interopRequireDefault(require("../../enum/filter-type"));

var _filterElement = _interopRequireDefault(require("./filter-element"));

var _filterFormula = _interopRequireDefault(require("./filter-formula"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FilterInput = /*#__PURE__*/function (_Vue) {
  _inherits(FilterInput, _Vue);

  var _super = _createSuper(FilterInput);

  function FilterInput() {
    var _this;

    _classCallCheck(this, FilterInput);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-report-filter-input';
    _this.activeType = ''; // 过滤公式集合

    _this.formulaOptions = [];
    _this.formulaLabel = ''; // 当前弹窗的过滤条件

    _this.tmpFilter = JSON.parse(JSON.stringify(_this.filter));
    return _this;
  }

  _createClass(FilterInput, [{
    key: "changeFilterPicker",
    value: function changeFilterPicker(value) {
      var _this2 = this;

      this.tmpFilter = _extends(this.tmpFilter, value);

      if (value.field) {
        this.activeType = value.field.type;
        this.formulaLabel = _filterType.default[this.activeType].find(function (item) {
          return item.value === _this2.tmpFilter.formula;
        }).label;
      } else {
        for (var i in _filterType.default) {
          if (_filterType.default[i].find(function (item) {
            return item.value === _this2.tmpFilter.formula;
          })) {
            this.formulaLabel = _filterType.default[i].find(function (item) {
              return item.value === _this2.tmpFilter.formula;
            }).label;
            return;
          }
        }
      }

      this.tmpFilter.formula = this.tmpFilter.formula ? this.tmpFilter.formula : 'Equal';
    }
  }, {
    key: "changeFilterType",
    value: function changeFilterType(value) {
      this.formulaOptions = value ? _filterType.default[value] : [];
    }
    /**
     *  更改筛选逻辑
     * @param filter
     */

  }, {
    key: "changeFilter",
    value: function changeFilter(filter) {
      this.tmpFilter = filter;
      this.$emit('change-filter', this.tmpFilter);
    }
    /**
     *  更改筛选条件
     * @param value 值
     */

  }, {
    key: "valueChange",
    value: function valueChange(value) {
      this.tmpFilter.text = value;
      this.$emit('change-filter', this.tmpFilter);
    }
  }, {
    key: "render",
    value: function render(h) {
      var Formula = h(_filterFormula.default, {
        class: "".concat(this.prefixCls, "__formula"),
        props: {
          filter: this.tmpFilter
        },
        on: {
          'change-filter': this.changeFilter
        }
      });
      var filterElement = h(_filterElement.default, {
        props: {
          filter: this.tmpFilter,
          format: this.format,
          status: this.status
        },
        on: {
          'change-value': this.valueChange
        }
      });
      return h('div', {
        class: this.prefixCls
      }, [Formula, filterElement]);
    }
  }]);

  return FilterInput;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: {}
})], FilterInput.prototype, "filter", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], FilterInput.prototype, "format", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], FilterInput.prototype, "checkEmpty", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], FilterInput.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], FilterInput.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)('filter', {
  immediate: true,
  deep: true
})], FilterInput.prototype, "changeFilterPicker", null);

__decorate([(0, _vuePropertyDecorator.Watch)('activeType', {
  immediate: true
})], FilterInput.prototype, "changeFilterType", null);

FilterInput = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-filter-input',
  components: {
    ASelect: _select.default,
    H3FilterFormula: _filterFormula.default,
    H3FilterElement: _filterElement.default
  }
})], FilterInput);
var _default = FilterInput;
exports.default = _default;