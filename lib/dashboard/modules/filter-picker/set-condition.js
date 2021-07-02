"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _filterType = require("../../../enum/filter-type");

var _scroll = _interopRequireDefault(require("../../../components/scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SetCondition = /*#__PURE__*/function (_Vue) {
  _inherits(SetCondition, _Vue);

  var _super = _createSuper(SetCondition);

  function SetCondition() {
    var _this;

    _classCallCheck(this, SetCondition);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-set-condition";
    _this.activeType = _this.filterPicker.dataSources[0].field.type;
    _this.tmpFilterPicker = JSON.parse(JSON.stringify(_this.filterPicker));
    _this.formatList = _filterType.formatDataList; // 筛选方式

    return _this;
  }

  _createClass(SetCondition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__part")]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__name")]
      }, ["\u7B5B\u9009\u5668\u540D\u79F0"]), h("a-input", {
        attrs: {
          placeholder: "请输入名称",
          value: this.tmpFilterPicker.title
        },
        "class": _defineProperty({}, "".concat(this.prefixCls, "__input"), true),
        on: {
          "input": function input(e) {
            return _this2.titleChange(e);
          }
        }
      })]), this.activeType === "date" && h("div", {
        "class": ["".concat(this.prefixCls, "__part")]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__name")]
      }, ["\u7B5B\u9009\u65B9\u5F0F"]), h("a-select", {
        "class": ["".concat(this.prefixCls, "__select")],
        attrs: {
          options: this.formatList,
          defaultValue: this.tmpFilterPicker.format || "Date"
        },
        on: {
          "change": this.formatChange
        }
      })]), h("div", {
        "class": ["".concat(this.prefixCls, "__part")]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__name")]
      }, ["\u9ED8\u8BA4\u503C"])]), this.$scopedSlots.default({})]);
    }
  }, {
    key: "changeFilterPicker",
    value: function changeFilterPicker(newFilterPicker) {
      _extends(this.tmpFilterPicker, newFilterPicker);

      this.activeType = this.filterPicker.dataSources[0].field.type;
    }
    /**
     * 筛选器标题
     * @param value
     */

  }, {
    key: "titleChange",
    value: function titleChange(value) {
      this.tmpFilterPicker.title = value.target.value;
      this.$emit("change-title", value.target.value);
    }
  }, {
    key: "formatChange",
    value: function formatChange(value) {
      this.tmpFilterPicker.format = value;
      this.$emit("change-format", value);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.tmpFilterPicker.format = this.tmpFilterPicker.format ? this.tmpFilterPicker.format : "Date";
    }
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return SetCondition;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], SetCondition.prototype, "filterPicker", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("filterPicker", {
  deep: true
})], SetCondition.prototype, "changeFilterPicker", null);

SetCondition = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-set-condition",
  components: {
    H3Scroll: _scroll.default,
    AInput: _input.default,
    ASelect: _select.default,
    ASelectOption: _select.default.Option
  }
})], SetCondition);
var _default2 = SetCondition;
exports.default = _default2;