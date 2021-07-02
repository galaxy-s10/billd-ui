"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _paint = require("../../../enum/paint");

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

var ReportPaintCoatThemeModule = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPaintCoatThemeModule, _Vue);

  var _super = _createSuper(ReportPaintCoatThemeModule);

  function ReportPaintCoatThemeModule() {
    var _this;

    _classCallCheck(this, ReportPaintCoatThemeModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-paint-coat-theme"; // 主题List

    _this.themeList = _paint.paints;
    _this.defaultSelect = "";
    return _this;
  }

  _createClass(ReportPaintCoatThemeModule, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__header")
      }, [h("label", ["\u4EEA\u8868\u76D8\u6837\u5F0F"])]), h("div", {
        "class": "".concat(this.prefixCls, "__body")
      }, [h("ul", {
        "class": "".concat(this.prefixCls, "__pic-wrap")
      }, [this.themeList.map(function (item, index) {
        return h("li", {
          key: index,
          "class": {
            selected: item.themeType === _this2.defaultSelect
          },
          style: {
            backgroundImage: "url(" + item.url + ")"
          },
          on: {
            "click": _this2.liClick(item, index)
          }
        });
      })])])]);
    }
    /**
     * 监听styles
     */

  }, {
    key: "watchStyles",
    value: function watchStyles(val) {
      this.defaultSelect = val.paintCoatTheme;
    } // /**
    //  * 获取分页器数量
    //  */
    // get circleList() {
    //   const listLength = (this.themeList.length / 6) < 1 ? 1 : (this.themeList.length / 6);
    //   return parseInt(listLength.toString());
    // }

    /**
     * li - click
     * @param item
     * @param index
     */

  }, {
    key: "liClick",
    value: function liClick(item, index) {
      var _this3 = this;

      this.defaultSelect = item.themeType;
      this.$nextTick(function () {
        // 仪表盘主题 - 赋值
        _this3.global.styles.paintCoatTheme = _this3.themeList[index].themeType; // 仪表盘背景色 - 赋值

        _this3.global.styles.paintCoat = {
          type: _this3.themeList[index].paintCoatType,
          value: _this3.themeList[index].paintCoatValue
        }; // 组件背景色 - 赋值

        _this3.global.styles.elementCoat = {
          type: _this3.themeList[index].elementCoatType,
          value: _this3.themeList[index].elementCoatValue
        };
      });

      if (item.themeType !== "default") {
        this.$nextTick(function () {
          // 更改非默认主题，字体变成默认色（白色）
          _this3.global.styles.fontSetting = {
            titleColor: "#ffffff",
            fontColor: "#ffffff"
          };

          _this3.setDataZoomThemeGrobal("dark");
        });
      } else {
        this.$nextTick(function () {
          // 恢复默认
          _this3.global.styles.fontSetting = {
            titleColor: "#304265",
            fontColor: "#304265"
          };

          _this3.setDataZoomThemeGrobal("light");
        });
      }
    }
  }, {
    key: "created",
    value: function created() {
      this.defaultSelect = this.global.styles.paintCoatTheme;
    }
  }]);

  return ReportPaintCoatThemeModule;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportPaintCoatThemeModule.prototype, "global", void 0);

__decorate([ReportPro.Mutation("setDataZoomThemeGrobal")], ReportPaintCoatThemeModule.prototype, "setDataZoomThemeGrobal", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("global.styles", {
  deep: true
})], ReportPaintCoatThemeModule.prototype, "watchStyles", null);

ReportPaintCoatThemeModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-paint-coat-theme",
  components: {}
})], ReportPaintCoatThemeModule);
var _default = ReportPaintCoatThemeModule;
exports.default = _default;