"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

require("ant-design-vue/lib/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("ant-design-vue/lib/date-picker"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterMixins = _interopRequireDefault(require("../../../mixins/filter-mixins"));

var _filterType = require("../../../enum/filter-type");

var _moment = _interopRequireDefault(require("moment"));

var _vueFragment = require("vue-fragment");

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

var ReportElementFilterSingleDate = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportElementFilterSingleDate, _Mixins);

  var _super = _createSuper(ReportElementFilterSingleDate);

  function ReportElementFilterSingleDate() {
    var _this;

    _classCallCheck(this, ReportElementFilterSingleDate);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(_this.comPrefixCls, "__date-wrap"); // 日期按钮是否能对日历做操作

    _this.isOpenDate = false; // 日期的展示值 moment

    _this.dateValue = null; // 自定义日期实际值-默认Today

    _this.agileValue = "";
    return _this;
  }

  _createClass(ReportElementFilterSingleDate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("a-select", {
        directives: [{
          name: "show",
          value: this.formula === 'Equal'
        }],
        "class": ["".concat(this.prefixCls, "-select"), this.agileValue === 'Custom' ? "".concat(this.prefixCls, "-custom") : ''],
        attrs: {
          options: this.selectList,
          value: this.agileValue,
          placeholder: "自定义"
        },
        on: {
          "change": function change() {
            return _this2.agileTimeChange;
          }
        }
      }), this.agileValue === 'Custom' && this.format !== 'Month' && h("a-date-picker", {
        attrs: {
          dropdownClassName: "".concat(this.prefixCls, "-picker"),
          format: this.dateFormat,
          value: this.dateValue,
          getCalendarContainer: this.getCurrentNode,
          open: this.isOpen,
          showTime: this.timeParams,
          openChange: function openChange() {
            return _this2.handleOpenDateChange;
          },
          change: function change() {
            return _this2.changeValue;
          },
          showToday: false
        }
      }, [h("a-vue-fragment", {
        slot: "renderExtraFooter"
      }, [h("a", {
        "class": "".concat(this.comPrefixCls, "__clear-btn"),
        on: {
          "click": function click() {
            return _this2.clearDate;
          }
        }
      }, [" \u6E05\u9664 "])])]), this.agileValue === 'Custom' && this.format === 'Month' && h("a-month-picker", {
        attrs: {
          dropdownClassName: "".concat(this.prefixCls, "-picker"),
          format: this.dateFormat,
          value: this.dateValue,
          getCalendarContainer: this.getCurrentNode,
          open: this.isOpen,
          showTime: this.timeParams,
          openChange: function openChange() {
            return _this2.handleOpenDateChange;
          },
          change: function change() {
            return _this2.changeValue;
          },
          showToday: false
        }
      }, [h("a-vue-fragment", {
        slot: "renderExtraFooter"
      }, [h("a", {
        "class": "".concat(this.comPrefixCls, "__clear-btn"),
        on: {
          "click": function click() {
            return _this2.clearDate;
          }
        }
      }, [" \u6E05\u9664 "])])])]);
    } // 日期操作列表（月份的时候只有本月和上月还有自定义）

  }, {
    key: "selectList",
    get: function get() {
      var m = [_filterType.DateFilterType.Custom, _filterType.DateFilterType.ThisMonth, _filterType.DateFilterType.LastMonth];
      return this.format === _filterType.FormatDateType.Month ? _filterType.dateFilterType.filter(function (d) {
        return m.includes(d.value);
      }) : _filterType.dateFilterType;
    }
    /**
     * 监听格式的变化
     */

  }, {
    key: "onFormulaChanged",
    value: function onFormulaChanged(newVal, oldVal) {
      if (newVal === _filterType.FormatDateType.Month) {
        this.agileValue = this.selectList[0].value;
      }
    }
    /**
     *  监听值改变
     */

  }, {
    key: "changeField",
    value: function changeField(value) {
      if (value instanceof Array) {
        var tmpTimeValue = _filterType.dateFilterType.find(function (item) {
          return item.value === value[0];
        });

        if (tmpTimeValue) {
          this.agileValue = tmpTimeValue.value;
        } else {
          this.agileValue = "Custom";

          if (value[0]) {
            this.dateValue = this.showTimeFlag ? (0, _moment.default)(value[0], "YYYY-MM-DD HH:mm") : this.format === _filterType.FormatDateType.Month ? (0, _moment.default)(value[0], "YYYY-MM") : (0, _moment.default)(value[0], "YYYY-MM-DD");
          } else {
            this.dateValue = null;
          }
        }
      }
    }
    /**
     *  时间选择参数
     */

  }, {
    key: "timeParams",
    get: function get() {
      return this.format === "Time" ? {
        format: "HH:mm",
        defaultValue: (0, _moment.default)("00:00", "HH:mm")
      } : false;
    }
    /**
     *  组件是否打开
     */

  }, {
    key: "isOpen",
    get: function get() {
      return this.tiling ? true : this.isOpenDate;
    }
    /**
     *  弹窗组件当前挂载节点
     */

  }, {
    key: "getCurrentNode",
    value: function getCurrentNode() {
      return this.tiling ? this.$el.parentNode : document.body;
    }
  }, {
    key: "showTimeFlag",
    get: function get() {
      return this.format === "Time";
    }
    /**
     *  日期格式
     */

  }, {
    key: "dateFormat",
    get: function get() {
      var f = "YYYY-MM-DD";

      switch (this.format) {
        case _filterType.FormatDateType.Date:
          f = "YYYY-MM-DD";
          break;

        case _filterType.FormatDateType.Time:
          f = "YYYY-MM-DD HH:mm";
          break;

        case _filterType.FormatDateType.Month:
          f = "YYYY-MM";
          break;
      }

      return f;
    }
    /**
     *  处理日期展开关闭
     */

  }, {
    key: "handleOpenDateChange",
    value: function handleOpenDateChange(open) {
      this.isOpenDate = open;
    }
    /**
     *  改变日期的值处理
     * @param date
     * @param dateString
     */

  }, {
    key: "changeValue",
    value: function changeValue(date, dateString) {
      this.dateValue = date;
      this.emitValue(dateString);
    }
    /*
     * 清除时间
     * */

  }, {
    key: "clearDate",
    value: function clearDate() {
      this.emitValue(null);
    }
    /**
     *  自定义日期改变
     * @param value
     */

  }, {
    key: "agileTimeChange",
    value: function agileTimeChange(value) {
      this.agileValue = value;
      this.dateValue = null;
      var tmpValue = value !== _filterType.DateFilterType.Custom ? value : this.dateValue;
      this.emitValue(tmpValue);
    }
  }]);

  return ReportElementFilterSingleDate;
}((0, _vuePropertyDecorator.Mixins)(_filterMixins.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportElementFilterSingleDate.prototype, "format", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportElementFilterSingleDate.prototype, "tiling", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("format")], ReportElementFilterSingleDate.prototype, "onFormulaChanged", null);

__decorate([(0, _vuePropertyDecorator.Watch)("value", {
  immediate: true,
  deep: true
})], ReportElementFilterSingleDate.prototype, "changeField", null);

ReportElementFilterSingleDate = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-element-filter-single-date",
  components: {
    ADatePicker: _datePicker.default,
    AMonthPicker: _datePicker.default.MonthPicker,
    ASelect: _select.default,
    AVueFragment: _vueFragment.Fragment,
    ASelectOptGroup: _select.default.OptGroup,
    ASelectOption: _select.default.Option
  }
})], ReportElementFilterSingleDate);
var _default = ReportElementFilterSingleDate;
exports.default = _default;