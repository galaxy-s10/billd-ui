"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _types = require("../../store/dashboard/types");

var _painWrap = _interopRequireDefault(require("./pain-wrap"));

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _backdoor = _interopRequireDefault(require("../../components/backdoor"));

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

var ReportPro = (0, _vuexClass.namespace)("report");

var ReportModels = /*#__PURE__*/function (_Vue) {
  _inherits(ReportModels, _Vue);

  var _super = _createSuper(ReportModels);

  function ReportModels() {
    var _this;

    _classCallCheck(this, ReportModels);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-global";
    return _this;
  }

  _createClass(ReportModels, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__header")]
      }, [h("backdoor", [h("label", ["\u4EEA\u8868\u76D8\u8BBE\u7F6E"])])]), h("div", {
        "class": ["".concat(this.prefixCls, "__modules")]
      }, [h("label", ["\u4EEA\u8868\u76D8\u540D\u79F0"]), h("a-input", {
        attrs: {
          placeholder: "仪表盘名称",
          value: this.title
        },
        on: {
          "change": this.change
        }
      })]), h("paint-wrap")]);
    }
  }, {
    key: "change",
    value: function change(e) {
      this.setReportTitle(e.target.value);
      this.$emit("input", e.target.value);
    }
    /**
     * 更新滚动条
     */

  }, {
    key: "refreshScroll",
    value: function refreshScroll() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.$refs.scroll) {
          _this2.$refs.scroll.setScrollBar();
        }
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.refreshScroll();
    }
  }, {
    key: "updated",
    value: function updated() {
      this.refreshScroll();
    }
  }]);

  return ReportModels;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("title")], ReportModels.prototype, "title", void 0);

__decorate([ReportPro.State("global")], ReportModels.prototype, "global", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTTITLE)], ReportModels.prototype, "setReportTitle", void 0);

ReportModels = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-global",
  components: {
    AInput: _input.default,
    paintWrap: _painWrap.default,
    H3Scroll: _scroll.default,
    Backdoor: _backdoor.default
  }
})], ReportModels);
var _default = ReportModels;
exports.default = _default;