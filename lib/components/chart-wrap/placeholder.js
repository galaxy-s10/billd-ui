"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _chartMixins = _interopRequireDefault(require("../../mixins/chart-mixins"));

var _browser = require("../../utils/browser");

var _responseCode = require("../../enum/response-code");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ReportChartWrap = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportChartWrap, _Mixins);

  var _super = _createSuper(ReportChartWrap);

  function ReportChartWrap() {
    var _this;

    _classCallCheck(this, ReportChartWrap);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(_this.comPrefixCls, "__placeholder");
    return _this;
  }

  _createClass(ReportChartWrap, [{
    key: "emptyPic",
    get: function get() {
      return (0, _browser.judgeMobile)() !== "pc" ? require("./m-empty.png") : require("./biax-blue.png");
    }
    /**
     * 标准图表占位图
     */

  }, {
    key: "chartRender",
    value: function chartRender(h) {
      return h("div", {
        class: {
          "empty-img": true
        },
        style: {
          backgroundImage: "url('".concat(this.emptyPic, "')")
        }
      });
    }
    /**
     */

  }, {
    key: "chartLabelRender",
    value: function chartLabelRender(h, text) {
      return h("div", {
        class: _defineProperty({}, "".concat(this.prefixCls, "--label"), true)
      }, text);
    }
    /**
     * 没有图表渲染
     * @param h
     */

  }, {
    key: "nullChartRender",
    value: function nullChartRender(h) {
      return [h("div", {
        class: {
          "empty-img": true
        },
        style: {
          backgroundImage: "url('".concat(this.emptyPic, "')")
        }
      }), h("div", {
        class: _defineProperty({}, "".concat(this.prefixCls, "--label"), true)
      }, "报表数据有误或已被删除，请重新配置")];
    }
    /**
     * 空图表
     * @param h
     */

  }, {
    key: "emptyChartRender",
    value: function emptyChartRender(h) {
      return [this.chartRender(h), this.chartLabelRender(h, "暂无内容")];
    }
    /**
     * 错误图表
     * @param h
     */

  }, {
    key: "errChartRender",
    value: function errChartRender(h) {
      var errText = "";

      switch (this.errorMsg) {
        case _responseCode.ResponseCode.FIELDMISSING:
          errText = "您当前字段缺失，请重新设置后查看";
          break;

        case _responseCode.ResponseCode.DATAOVERFLOW:
          errText = "数据量过大，请重新设置";
          break;

        case _responseCode.ResponseCode.MODELNOTEXIST:
          errText = "指定的模型不存在";
          break;

        case _responseCode.ResponseCode.DATASOURCENOTEXIST:
          errText = "指定的数据源不存在";
          break;

        case _responseCode.ResponseCode.LOGINERROR:
          errText = "当前用户未登录";
          break;

        default:
          break;
      }

      return [this.chartRender(h), this.chartLabelRender(h, errText)];
    }
    /**
     * 空数据图表
     * @param h
     */

  }, {
    key: "emptyDataChartRender",
    value: function emptyDataChartRender(h) {
      return [this.chartRender(h), this.chartLabelRender(h, "您当前没有数据，请添加数据后查看")];
    }
  }, {
    key: "render",
    value: function render(h) {
      var chartPlaceholder = null;

      if (!this.chart) {
        chartPlaceholder = this.nullChartRender(h);
      } else if (!this.checkChart || !this.isLoadData) {
        chartPlaceholder = this.emptyChartRender(h);
      } else if (this.isLoadData && this.errorMsg) {
        chartPlaceholder = this.errChartRender(h);
      } else if (this.isLoadData && (!this.data || !this.data.length)) {
        chartPlaceholder = this.emptyDataChartRender(h);
      }

      return chartPlaceholder ? h("div", {
        class: _defineProperty({}, this.prefixCls, true)
      }, chartPlaceholder) : null;
    }
  }]);

  return ReportChartWrap;
}((0, _vuePropertyDecorator.Mixins)(_chartMixins.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "errorMsg", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportChartWrap.prototype, "comPrefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportChartWrap.prototype, "isLoadData", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "data", void 0);

ReportChartWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-chart-wrap-placeholder",
  components: {}
})], ReportChartWrap);
var _default = ReportChartWrap;
exports.default = _default;