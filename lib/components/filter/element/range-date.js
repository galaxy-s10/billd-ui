"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("ant-design-vue/lib/date-picker"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterMixins = _interopRequireDefault(require("../../../mixins/filter-mixins"));

var _vueFragment = require("vue-fragment");

var _filterType = require("../../../enum/filter-type");

var _moment = _interopRequireDefault(require("moment"));

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

var ReportElementFilterDate = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportElementFilterDate, _Mixins);

  var _super = _createSuper(ReportElementFilterDate);

  function ReportElementFilterDate() {
    var _this;

    _classCallCheck(this, ReportElementFilterDate);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(_this.comPrefixCls, "__date-wrap"); // 日期按钮是否能对日历做操作

    _this.isOpenDate = false; // 日期的展示值 moment

    _this.dateValue = null;
    return _this;
  }

  _createClass(ReportElementFilterDate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("a-range-picker", {
        attrs: {
          format: this.dateFormat,
          getCalendarContainer: this.getCurrentNode,
          dropdownClassName: "".concat(this.prefixCls, "-picker"),
          showTime: this.timeParams,
          open: this.isOpen,
          value: this.dateValue,
          mode: this.mode
        },
        on: {
          "openChange": function openChange() {
            return _this2.handleOpenDateChange;
          },
          "panelChange": function panelChange() {
            return _this2.handlePanelChange;
          },
          "change": function change() {
            return _this2.changeValue;
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
     *  监听值改变
     */

  }, {
    key: "changeField",
    value: function changeField(value) {
      if (value instanceof Array) {
        if (this.formula === _filterType.DateType.Range && (value[0] || value[1])) {
          this.dateValue = this.getFormatDate(value);
        } else {
          this.dateValue = null;
        }
      }
    }
    /**
     *  时间选择参数
     */

  }, {
    key: "timeParams",
    get: function get() {
      return this.showTimeFlag ? {
        format: "HH:mm",
        defaultValue: [(0, _moment.default)("00:00", "HH:mm"), (0, _moment.default)("23:59", "HH:mm")]
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
    /**
     * 日期选择模型
     */

  }, {
    key: "mode",
    get: function get() {
      var f = "date";

      switch (this.format) {
        case _filterType.FormatDateType.Date:
          f = ["date", "date"];
          break;

        case _filterType.FormatDateType.Time:
          f = ["date", "date"];
          break;

        case _filterType.FormatDateType.Month:
          f = ["month", "month"];
          break;
      }

      return f;
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
     * 当期日改变了
     */

  }, {
    key: "handlePanelChange",
    value: function handlePanelChange(value, mode) {
      var _this3 = this;

      this.dateValue = value;
      var v = value.map(function (m) {
        return m.format(_this3.dateFormat);
      });
      this.emitValue(v);
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
      this.emitValue([]);
    }
    /**
     * 计算格式化的时间
     */

  }, {
    key: "getFormatDate",
    value: function getFormatDate(value) {
      var start = value[0] || null;
      var end = value[1] || null;
      var startDate = start ? (0, _moment.default)(start, this.dateFormat) : null;
      var endDate = end ? (0, _moment.default)(end, this.dateFormat) : null;
      return [startDate, endDate];
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
    ARangePicker: _datePicker.default.RangePicker,
    AVueFragment: _vueFragment.Fragment
  }
})], ReportElementFilterDate);
var _default = ReportElementFilterDate;
exports.default = _default;