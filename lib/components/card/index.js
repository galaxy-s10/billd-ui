"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _number = require("../../utils/number");

var _alias = _interopRequireDefault(require("../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ReportCard = /*#__PURE__*/function (_Vue) {
  _inherits(ReportCard, _Vue);

  var _super = _createSuper(ReportCard);

  function ReportCard() {
    var _this;

    _classCallCheck(this, ReportCard);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-card";
    _this.summary = 0;
    _this.showTotal = false;
    return _this;
  }

  _createClass(ReportCard, [{
    key: "watchLimit",
    value: function watchLimit() {
      var _this2 = this;

      // 总计在编辑状态也需要响应
      this.showTotal = this.options.limit === 0 || this.options.limit === null;
      this.$nextTick(function () {
        if (_this2.$refs.scroll) {
          _this2.$refs.scroll.setScrollBar();
        }
      });
    }
  }, {
    key: "getMetricData",
    get: function get() {
      var _this3 = this;

      var data = this.options.limit ? this.options.data.slice(0, this.options.limit) : this.options.data;
      return data.map(function (d) {
        if (_this3.options.dimension && d[_this3.options.dimension.uid]) {
          return _extends({}, d, _defineProperty({}, _this3.options.dimension.uid, (0, _alias.default)(_this3.options.dimension.uid, d[_this3.options.dimension.uid], _this3.options.dataAlias)));
        }

        return d;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [!this.options.dimension ? h("div", {
        "class": ["".concat(this.prefixCls, "__metric")]
      }, [h("label", {
        style: "color:`${this.options.fontColor}`"
      }, [this.options.metric.alias || this.options.metric.name]), h("span", {
        style: "color:`${this.options.fontColor}` !important"
      }, [this.convertNumber(this.options.data[0][this.options.metric.uid], this.options.metric.options.numberFormat)])]) : h("div", {
        "class": ["".concat(this.prefixCls, "__metric--list")]
      }, [h("div", {
        directives: [{
          name: "show",
          value: this.showTotal
        }],
        "class": ["".concat(this.prefixCls, "__item"), "".concat(this.prefixCls, "__header")]
      }, [h("label", {
        style: {
          color: this.options.fontColor
        }
      }, ["\u603B\u8BA1"]), h("span", {
        style: {
          color: "".concat(this.options.fontColor, " !important")
        }
      }, [this.convertNumber(this.options.metric.options.percent === "PERCENT" ? 1 : this.summary, this.options.metric.options.numberFormat)])]), h("h3-scroll", {
        ref: "scroll",
        attrs: {
          buttonColor: "rgba(0,0,0,0.45)"
        }
      }, [this.getMetricData.map(function (metric, i) {
        return h("div", {
          "class": ["".concat(_this4.prefixCls, "__item")],
          key: i
        }, [h("label", {
          style: "{ color: options.fontColor }"
        }, [metric[_this4.options.dimension.uid]]), h("span", {
          style: "{ color: options.fontColor }"
        }, [_this4.convertNumber(_this4.options.metric.options.percent === "PERCENT" ? parseFloat(String(metric[_this4.options.metric.uid] / _this4.summary)) : metric[_this4.options.metric.uid], _this4.options.metric.options.numberFormat)])]);
      })])])]);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.initCard();
    }
  }, {
    key: "initCard",
    value: function initCard() {
      // 判断总计是否显示
      if (this.options.limit === 0 || this.options.limit === null) {
        this.showTotal = true;
      }

      var metric = this.options.metric;
      var summary = 0;
      this.options.data.forEach(function (item) {
        if (item[metric.uid] === null || item[metric.uid] === undefined) return;

        switch (metric.options.aggregateType) {
          case "SUM":
          case "AVG":
            summary += parseFloat(item[metric.uid]);
            break;

          case "MAX":
            summary = Math.max(summary, parseFloat(item[metric.uid]));
            break;

          case "MIN":
            summary = Math.min(summary, parseFloat(item[metric.uid]));
            break;

          default:
            summary += parseFloat(item[metric.uid]);
            break;
        }
      });

      if (metric.options.aggregateType === "AVG") {
        this.summary = parseFloat(summary / this.options.data.length);
      } else {
        this.summary = summary;
      }

      this.$forceUpdate();
    } // convertNumber(value: any, numberFormat: H3.Report.NumberFormat) {

  }, {
    key: "convertNumber",
    value: function convertNumber(value, numberFormat) {
      return numberFormat ? (0, _number.convertNumber)(value, numberFormat) : value;
    }
  }]);

  return ReportCard;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportCard.prototype, "options", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportCard.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("options.limit")], ReportCard.prototype, "watchLimit", null);

ReportCard = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-card",
  components: {
    H3Scroll: _scroll.default
  }
})], ReportCard);
var _default2 = ReportCard;
exports.default = _default2;