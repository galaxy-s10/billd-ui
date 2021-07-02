"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/locale-provider/style/css");

var _localeProvider = _interopRequireDefault(require("ant-design-vue/lib/locale-provider"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _options = _interopRequireDefault(require("../../dist/options"));

var _zh_CN = _interopRequireDefault(require("ant-design-vue/lib/locale-provider/zh_CN"));

var _global = require("../../utils/global");

var _dom = require("../../utils/dom");

var _filterType = require("../../enum/filter-type");

var _element = _interopRequireDefault(require("./element"));

require("./element/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

//虽然现在还没有css.js这个文件，但是按道理应该是在打包完了再这样调用的，打包完了就会有这个文件。
var SetFilter = /*#__PURE__*/function (_Vue) {
  _inherits(SetFilter, _Vue);

  var _super = _createSuper(SetFilter);

  function SetFilter() {
    var _this;

    _classCallCheck(this, SetFilter);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-filter-element"; // 日期组件是否常显示 h>13

    _this.isTiling = false; // 排列组件是否换行

    _this.isNewFeed = false; // 是否展示单日历

    _this.isSingleDate = false; // 拷贝

    _this.tmpFilter = JSON.parse(JSON.stringify(_this.filter));
    return _this;
  } // 监听筛选器宽高


  _createClass(SetFilter, [{
    key: "changeChartSize",
    value: function changeChartSize(chartSize) {
      if (chartSize && chartSize.h && chartSize.w) {
        this.isTiling = !!(this.status && chartSize.h >= 11);
        this.isSingleDate = !!(this.isTiling && chartSize.w <= 12);
        this.isNewFeed = !!(this.status && chartSize.h >= 7);
      }
    }
    /**
     *  值改变
     * @param value
     */

  }, {
    key: "valueChange",
    value: function valueChange(value) {
      if (value === "" || value === null) {
        this.filter.text.splice(0, this.filter.text.length);
      } else if (value instanceof Array) {
        var _this$filter$text;

        (_this$filter$text = this.filter.text).splice.apply(_this$filter$text, [0, this.filter.text.length].concat(_toConsumableArray(value)));
      } else {
        this.filter.text.splice(0, this.filter.text.length, value);
      }

      this.$emit("change-value", this.filter.text);
    }
    /**
     * 生成组件
     */

  }, {
    key: "generatingComponent",
    value: function generatingComponent() {
      if ([_filterType.StringType.None, _filterType.StringType.NotNone].includes(this.filter.formula)) {
        return null;
      }

      switch (this.filter.field.type) {
        case "date":
          if (this.filter.formula === _filterType.DateType.Range) {
            if (this.isSingleDate) {
              return "SingleRangeDate";
            } else {
              return "RangeDate"; // 范围日历
            }
          } else {
            return "SingleDate"; // 单日历
          }

        case "number":
          if (this.filter.formula === _filterType.NumberType.Range) {
            return "RangeInput"; // 范围输入框
          } else {
            return "FilterInput"; // 单行文本输入框
          }

        case "string":
          if (![_filterType.StringType.In, _filterType.StringType.NotIn].includes(this.filter.formula)) {
            return "FilterInput"; // 单行文本输入框
          } else {
            return "MultiInput"; // 多项文本输入框
          }

      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this2 = this;

      var ValueComponent = function ValueComponent() {
        var component;
        var tmpComponent; // let componentProps: H3.Report.FilterFieldExtend = {
        //   field: this.filter.field,
        //   formula: this.filter.formula,
        //   value: this.filter.text as any instanceof Array && (this.filter.text[0] || this.filter.text[1]) ? this.filter.text : [],
        // };

        component = _this2.generatingComponent();

        if (component) {
          if (typeof _options.default.integrateComponents === "function" && _options.default.integrateComponents(_this2.filter.field, _this2.filter.formula)) {
            component = _options.default.integrateComponents(_this2.filter.field);
          } else {
            var extendProps = {
              comPrefixCls: _this2.prefixCls
            };

            if (_this2.filter.field.type === "date") {
              extendProps.format = _this2.format;
              extendProps.tiling = _this2.isTiling;
            } // Object.assign(componentProps, extendProps);

          }
        } // 生成通用组件


        tmpComponent = h(component, {
          // props: componentProps,
          on: {
            input: function input(value) {
              _this2.valueChange(value);
            }
          }
        }); // 日期组件公共处理

        if (_this2.filter.field.type === "date") {
          tmpComponent = h(_localeProvider.default, {
            props: {
              locale: _zh_CN.default
            }
          }, [tmpComponent]);
        }

        if (tmpComponent) {
          return h("div", {
            class: {
              "h3-report-filter-element": true,
              "tiling-date-component": _this2.isTiling,
              "new-line": _this2.isNewFeed
            }
          }, [tmpComponent]);
        } else {
          return null;
        }
      };

      return ValueComponent();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      (0, _global.addWheelListener)(document.body, function (e) {
        if ((0, _dom.closest)(e.target, ".ant-calendar-time-picker-select")) {
          e.stopPropagation();
        }
      }, true);
    }
  }, {
    key: "created",
    value: function created() {}
  }]);

  return SetFilter;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: {}
})], SetFilter.prototype, "filter", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], SetFilter.prototype, "format", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], SetFilter.prototype, "chartSize", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], SetFilter.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("chartSize", {
  deep: true
})], SetFilter.prototype, "changeChartSize", null);

SetFilter = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-filter-element",
  components: _extends({}, _element.default)
})], SetFilter);
var _default = SetFilter;
exports.default = _default;