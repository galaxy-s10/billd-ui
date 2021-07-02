"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/message/style/css");

var _message2 = _interopRequireDefault(require("ant-design-vue/lib/message"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _loading = _interopRequireDefault(require("../components/loading"));

var _types = require("../store/dashboard/types");

var _vuexClass = require("vuex-class");

var _options = _interopRequireDefault(require("../dist/options"));

var _element = _interopRequireDefault(require("./element"));

var _lazyLoad = _interopRequireDefault(require("../directives/lazy-load"));

var _singleChartMixins = _interopRequireDefault(require("../mixins/single-chart-mixins"));

var _fullScreen = _interopRequireDefault(require("./full-screen"));

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

_options.default.message = _message2.default;
var ReportPro = (0, _vuexClass.namespace)("report");

var ReportShow = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportShow, _Mixins);

  var _super = _createSuper(ReportShow);

  function ReportShow() {
    _classCallCheck(this, ReportShow);

    return _super.apply(this, arguments);
  }

  _createClass(ReportShow, [{
    key: "fullScreen",
    value:
    /**
     * 全屏事件
     */
    function fullScreen() {
      if (this.fullScreenElement) {
        this.fullScreenElement.close();
        this.fullScreenElement = null;
      } else {
        this.fullScreenElement = (0, _fullScreen.default)({
          scopedSlots: this.$scopedSlots,
          corpId: this.corpId,
          store: this.$store,
          element: this.element,
          global: this.global,
          refresh: false,
          status: "single",
          narrow: this.fullScreen
        });
      }
    }
  }]);

  return ReportShow;
}((0, _vuePropertyDecorator.Mixins)(_singleChartMixins.default));

__decorate([ReportPro.Action(_types.ReportAction.GETREPORTDETAIL)], ReportShow.prototype, "getReportDetail", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTOPTIONS)], ReportShow.prototype, "setReportOptions", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], ReportShow.prototype, "resizeChartView", void 0);

ReportShow = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-single-chart",
  components: {
    ElementWrap: _element.default,
    H3Loading: _loading.default
  },
  directives: {
    H3LazyLoad: _lazyLoad.default
  }
})], ReportShow);
var _default = ReportShow;
exports.default = _default;