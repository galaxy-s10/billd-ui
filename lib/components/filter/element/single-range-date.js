"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("ant-design-vue/lib/date-picker"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterMixins = _interopRequireDefault(require("../../../mixins/filter-mixins"));

var _filterType = require("../../../enum/filter-type");

var _moment = _interopRequireDefault(require("moment"));

var _vueFragment = require("vue-fragment");

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

var ReportElementFilterDate = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportElementFilterDate, _Mixins);

  var _super = _createSuper(ReportElementFilterDate);

  function ReportElementFilterDate() {
    var _this;

    _classCallCheck(this, ReportElementFilterDate);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(_this.comPrefixCls, "__date-wrap"); // 日期按钮是否能对日历做操作

    _this.isOpenDate = false; // 开始日期 moment

    _this.startValue = null; // 结束日期 moment

    _this.endValue = null; // 日期的展示值 string

    _this.dateValue = []; // 单范围日历的切换 true/false 左边/右边

    _this.toggleOpen = true;
    _this.timeParams = {
      format: "HH:mm",
      disabledHours: _this.disabledHours,
      disabledMinutes: _this.disabledMinutes
    };
    return _this;
  }

  _createClass(ReportElementFilterDate, [{
    key: "render",
    value: function render() {
      var _ref,
          _this2 = this,
          _ref2;

      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("a-date-picker", {
        attrs: {
          format: this.dateFormat,
          getCalendarContainer: this.getCurrentNode,
          showTime: this.startTimeParams,
          open: this.isOpen,
          value: this.startValue,
          showToday: false,
          disabledDate: this.disabledStartDate,
          dropdownClassName: "".concat(this.comPrefixCls, "__single-picker-").concat(this.toggleOpen ? 'active' : 'hide'),
          placeholder: "起始日期"
        },
        "class": (_ref = {}, _defineProperty(_ref, "".concat(this.prefixCls, "-single"), true), _defineProperty(_ref, "active", this.toggleOpen), _ref),
        on: {
          "openChange": function openChange() {
            return _this2.handleOpenDateChange;
          },
          "change": function change() {
            return _this2.changeValue;
          }
        },
        nativeOn: {
          "click": function click() {
            return _this2.handleSelect(true);
          }
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
      }, [" \u6E05\u9664 "])])]), h("span", {
        "class": "".concat(this.comPrefixCls, "__wavy-line")
      }, [" ~ "]), h("a-date-picker", {
        attrs: {
          format: this.dateFormat,
          getCalendarContainer: this.getCurrentNode,
          showTime: this.endTimeParams,
          open: this.isOpen,
          value: this.endValue,
          showToday: false,
          disabledDate: this.disabledEndDate,
          dropdownClassName: "".concat(this.comPrefixCls, "__single-picker-").concat(this.toggleOpen ? 'hide' : 'active'),
          placeholder: "结束日期"
        },
        "class": (_ref2 = {}, _defineProperty(_ref2, "".concat(this.prefixCls, "-single"), true), _defineProperty(_ref2, "active", !this.toggleOpen), _ref2),
        on: {
          "openChange": function openChange() {
            return _this2.handleOpenDateChange;
          },
          "change": function change() {
            return _this2.changeValue;
          }
        },
        nativeOn: {
          "click": function click() {
            return _this2.handleSelect(false);
          }
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
    }
    /**
     *  监听值改变，在范围日历和单范围日历切换需要
     */

  }, {
    key: "changeField",
    value: function changeField(value) {
      if (value instanceof Array && this.formula === _filterType.DateType.Range) {
        this.startValue = this.showTimeFlag ? value[0] ? (0, _moment.default)(value[0], "YYYY-MM-DD HH:mm") : null : value[0] ? (0, _moment.default)(value[0], "YYYY-MM-DD") : null;
        this.endValue = this.showTimeFlag ? value[1] ? (0, _moment.default)(value[1], "YYYY-MM-DD HH:mm") : null : value[1] ? (0, _moment.default)(value[1], "YYYY-MM-DD") : null;

        if (value[0] || value[1]) {
          this.dateValue = [value[0] ? value[0] : "", value[1] ? value[1] : ""];
        } else {
          this.dateValue = [];
        }
      }
    }
    /**
     *  开始时间选择参数
     */

  }, {
    key: "startTimeParams",
    get: function get() {
      return this.showTimeFlag ? _extends({}, this.timeParams, {
        defaultValue: (0, _moment.default)("00:00", "HH:mm")
      }) : false;
    }
    /**
     *  结束时间选择参数
     */

  }, {
    key: "endTimeParams",
    get: function get() {
      return this.showTimeFlag ? _extends({}, this.timeParams, {
        defaultValue: (0, _moment.default)("23:59", "HH:mm")
      }) : false;
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
     *  组件是否打开
     *  @bol  点击left/right true/false
     */

  }, {
    key: "handleSelect",
    value: function handleSelect(bol) {
      this.toggleOpen = bol;
    }
    /**
     *  弹窗组件当前挂载节点
     */

  }, {
    key: "getCurrentNode",
    value: function getCurrentNode() {
      return this.tiling ? this.$el.parentNode : document.body;
    }
    /**
     *  禁用开始日期
     */

  }, {
    key: "disabledStartDate",
    value: function disabledStartDate(startValue) {
      var endValue = this.endValue;

      if (!startValue || !endValue) {
        return false;
      }

      return this.showTimeFlag ? endValue.isBefore(startValue, "day") : endValue.isSameOrBefore(startValue, "day");
    }
    /**
     *  禁用结束日期
     */

  }, {
    key: "disabledEndDate",
    value: function disabledEndDate(endValue) {
      var startValue = this.startValue;

      if (!endValue || !startValue) {
        return false;
      }

      return this.showTimeFlag ? startValue.isAfter(endValue, "day") : startValue.isSameOrAfter(endValue, "day");
    }
    /**
     *  禁用部分小时
     */

  }, {
    key: "disabledHours",
    value: function disabledHours() {
      var startValue = this.startValue;
      var endValue = this.endValue;
      var hours = [];

      if (startValue && endValue && startValue.isSame(endValue, "day")) {
        var endHour = parseInt(endValue.format("HH"));
        var startHour = parseInt(startValue.format("HH"));

        if (this.toggleOpen) {
          for (var i = endHour < 23 ? endHour + 1 : endHour; i < 24; i++) {
            hours.push(i);
          }
        } else {
          for (var _i = 0; _i < startHour; _i++) {
            hours.push(_i);
          }
        }
      }

      return hours;
    }
    /**
     *  禁用部分分钟
     */

  }, {
    key: "disabledMinutes",
    value: function disabledMinutes(selectedHour) {
      var startValue = this.startValue;
      var endValue = this.endValue;
      var minutes = [];

      if (startValue && endValue && startValue.isSame(endValue, "day")) {
        var endHour = parseInt(endValue.format("HH"));
        var startHour = parseInt(startValue.format("HH"));
        var endMinute = parseInt(endValue.format("mm"));
        var startMinute = parseInt(startValue.format("mm"));

        if (this.toggleOpen) {
          if (selectedHour === endHour) {
            for (var i = endMinute; i < 60; i++) {
              minutes.push(i);
            }
          }
        } else {
          if (selectedHour === startHour) {
            for (var _i2 = 0; _i2 <= startMinute; _i2++) {
              minutes.push(_i2);
            }
          }
        }
      }

      return minutes;
    }
    /**
     *  精确: 日期 / 日期时间
     */

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
     *  改变开始日期的值处理
     * @param date
     * @param dateString
     */

  }, {
    key: "changeValue",
    value: function changeValue(date, dateString) {
      if (this.toggleOpen) {
        this.startValue = date;
      } else {
        this.endValue = date;
      }

      this.$set(this.dateValue, this.toggleOpen ? 0 : 1, dateString);
      this.emitValue(this.dateValue);
    }
    /*
     * 清除时间
     * */

  }, {
    key: "clearDate",
    value: function clearDate() {
      this.$set(this.dateValue, this.toggleOpen ? 0 : 1, "");
      this.emitValue(this.dateValue);
    }
  }]);

  return ReportElementFilterDate;
}((0, _vuePropertyDecorator.Mixins)(_filterMixins.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportElementFilterDate.prototype, "format", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportElementFilterDate.prototype, "tiling", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("value", {
  immediate: true,
  deep: true
})], ReportElementFilterDate.prototype, "changeField", null);

ReportElementFilterDate = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-element-filter-range-date",
  components: {
    ADatePicker: _datePicker.default,
    AVueFragment: _vueFragment.Fragment
  }
})], ReportElementFilterDate);
var _default = ReportElementFilterDate;
exports.default = _default;