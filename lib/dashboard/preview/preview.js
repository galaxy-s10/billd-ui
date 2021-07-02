"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _header = _interopRequireDefault(require("./header"));

var _container = _interopRequireDefault(require("../container"));

var _chartType = require("../../enum/chart-type");

var _types = require("../../store/dashboard/types");

require("./index.less");

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

var ReportPreview = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPreview, _Vue);

  var _super = _createSuper(ReportPreview);

  function ReportPreview() {
    var _this;

    _classCallCheck(this, ReportPreview);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-preview";
    _this.display = false;
    _this.status = "pc";
    _this.layoutOptions = {
      draggable: false,
      showGridLine: false,
      editState: false,
      mask: false,
      resizable: false,
      responsive: false
    };
    return _this;
  }

  _createClass(ReportPreview, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("transition", {
        attrs: {
          name: "preview-shade"
        },
        on: {
          "after-leave": this.afterLeave
        }
      }, [this.display && h("div", {
        "class": "prefixCls"
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__shade")]
      }, [h("div", {
        "class": "[`${prefixCls}__content`]"
      }, [h("report-preview-header", {
        attrs: {
          status: this.status
        },
        on: {
          "close": this.close,
          "change-type": this.changType
        }
      }), this.status === "pc" && h("report-container", {
        attrs: {
          status: "preview",
          layoutOptions: this.layoutOptions
        }
      })])])])]);
    }
    /**
     * 预览展示
     */

  }, {
    key: "show",
    value: function show(_ref) {
      var _this2 = this;

      var charts = _ref.charts,
          global = _ref.global,
          top = _ref.top,
          objectId = _ref.objectId,
          title = _ref.title;
      charts.forEach(function (element) {
        if (element.type === _chartType.ElementType.FILTERPICKER) {
          if (element.formula !== "Range" && element.text[0] || element.formula === "Range" && element.text[0] && element.text[1] || ["None", "NotNone"].includes(element.formula)) {
            _this2.setFilterPicker({
              filterPicker: element,
              charts: charts
            });
          }
        }
      });
      this.setCharts(charts);
      this.setGlobal(global); // this.setReportTop(top);

      this.setObjectId(objectId);
      this.setTitle(title);
      this.display = true;
    }
    /**
     * 关闭预览
     */

  }, {
    key: "close",
    value: function close() {
      this.display = false;
    }
    /**
     * 修改预览类型
     */

  }, {
    key: "changType",
    value: function changType(type) {
      this.status = type;
    }
    /**
     * 关闭预览完毕后销毁
     */

  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.$destroy();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.$emit("destroy");
    }
  }]);

  return ReportPreview;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("reportTop")], ReportPreview.prototype, "reportTop", void 0);

__decorate([ReportPro.Action(_types.ReportAction.SETFILTERPICKER)], ReportPreview.prototype, "setFilterPicker", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETCHARTS)], ReportPreview.prototype, "setCharts", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETGLOBAL)], ReportPreview.prototype, "setGlobal", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTTOP)], ReportPreview.prototype, "setReportTop", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETOBJECTID)], ReportPreview.prototype, "setObjectId", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETTITLE)], ReportPreview.prototype, "setTitle", void 0);

ReportPreview = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-preview",
  components: {
    ReportPreviewHeader: _header.default,
    ReportContainer: _container.default
  }
})], ReportPreview);
var _default = ReportPreview;
exports.default = _default;