"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterType = _interopRequireDefault(require("../../enum/filter-type"));

var _vueFragment = require("vue-fragment");

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

var FilterFormula = /*#__PURE__*/function (_Vue) {
  _inherits(FilterFormula, _Vue);

  var _super = _createSuper(FilterFormula);

  function FilterFormula() {
    var _this;

    _classCallCheck(this, FilterFormula);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-report-filter-formula'; // 过滤逻辑集合

    _this.formulaList = []; // 过滤逻辑展示值

    _this.formulaLabel = '';
    _this.activeType = ''; // 当前弹窗的过滤条件

    _this.tmpFilter = JSON.parse(JSON.stringify(_this.filter));
    return _this;
  }

  _createClass(FilterFormula, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("a-select", {
        "class": "".concat(this.prefixCls, "__select"),
        attrs: {
          options: this.formulaList,
          value: this.formulaLabel,
          placeholder: "请设置过滤条件"
        },
        on: {
          "change": function change() {
            return _this2.changeFormula;
          }
        }
      }), h("div", {
        "class": "".concat(this.prefixCls, "__mask"),
        directives: [{
          name: "show",
          value: this.prevent
        }]
      })]);
    }
  }, {
    key: "prevent",
    get: function get() {
      return this.status === 'design';
    }
  }, {
    key: "changeFilterPicker",
    value: function changeFilterPicker(value) {
      var _this3 = this;

      this.tmpFilter = _extends(this.tmpFilter, value);

      if (value.field) {
        this.activeType = value.field.type;
        this.formulaLabel = _filterType.default[value.field.type].find(function (item) {
          return item.value === _this3.tmpFilter.formula;
        }).label;
      } else {
        // 兼容字段被删除后的反显
        for (var i in _filterType.default) {
          if (_filterType.default[i].find(function (item) {
            return item.value === _this3.tmpFilter.formula;
          })) {
            this.formulaLabel = _filterType.default[i].find(function (item) {
              return item.value === _this3.tmpFilter.formula;
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
      this.formulaList = value ? _filterType.default[value] : [];
    }
    /**
     *  公式改变时的处理
     * @param value
     */

  }, {
    key: "changeFormula",
    value: function changeFormula(value) {
      var _this4 = this;

      this.tmpFilter.formula = value;
      this.tmpFilter.text = [''];
      this.formulaLabel = _filterType.default[this.activeType].find(function (item) {
        return item.value === _this4.tmpFilter.formula;
      }).label;

      if (['None', 'NotNone', 'In', 'NotIn'].includes(value)) {
        this.tmpFilter.text = [];
      }

      this.$emit('change-filter', this.tmpFilter);
    }
  }]);

  return FilterFormula;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], FilterFormula.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: {}
})], FilterFormula.prototype, "filter", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)('filter', {
  immediate: true,
  deep: true
})], FilterFormula.prototype, "changeFilterPicker", null);

__decorate([(0, _vuePropertyDecorator.Watch)('activeType', {
  immediate: true
})], FilterFormula.prototype, "changeFilterType", null);

FilterFormula = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-filter-formula',
  components: {
    ASelect: _select.default,
    AVueFragment: _vueFragment.Fragment
  }
})], FilterFormula);
var _default = FilterFormula;
exports.default = _default;