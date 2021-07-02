"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _scroll = _interopRequireDefault(require("../../../scroll"));

var _body = _interopRequireDefault(require("./body"));

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

var ReportTableScroll = /*#__PURE__*/function (_Vue) {
  _inherits(ReportTableScroll, _Vue);

  var _super = _createSuper(ReportTableScroll);

  function ReportTableScroll() {
    var _this;

    _classCallCheck(this, ReportTableScroll);

    _this = _super.apply(this, arguments);
    _this.y = 0;
    _this.index = 0;
    _this.rowIndex = 0;
    _this.innerData = _this.data.slice(0, 100);
    return _this;
  }

  _createClass(ReportTableScroll, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", [h("h3-scroll", {
        "class": "".concat(this.prefixCls, "__body-warp"),
        style: "height: ".concat(this.height, "px"),
        attrs: {
          buttonColor: "'rgba(0,0,0,0.45)'"
        },
        on: {
          "scroll": function scroll() {
            return _this2.scroll;
          }
        }
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__mask"),
        style: "height: ".concat(this.data.length * 40, "px")
      }), h("table-warp", {
        attrs: {
          columnsWidth: this.columnsWidth,
          columnsIds: this.columnsIds,
          columns: this.columns,
          rowIndex: this.rowIndex,
          innerData: this.innerData,
          index: this.index
        }
      })])]);
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      // console.log(event);
      var index = Math.floor((e.y + this.$el.clientHeight) / 40 / 50);

      if (index !== this.index) {
        this.index = index;
        var pre = index - 1 > 0 ? index - 1 : 0;
        var next = pre + 2;
        this.innerData = this.data.slice(pre * 50, next * 50);
        this.rowIndex = pre * 50;
      }

      this.$emit('bodyScroll', {
        left: e.x,
        top: e.y
      });
    }
  }]);

  return ReportTableScroll;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableScroll.prototype, "columnsWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableScroll.prototype, "columnsIds", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableScroll.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTableScroll.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 'h3-table';
  }
})], ReportTableScroll.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTableScroll.prototype, "height", void 0);

ReportTableScroll = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-table-scroll',
  components: {
    TableWarp: _body.default,
    H3Scroll: _scroll.default
  }
})], ReportTableScroll);
var _default2 = ReportTableScroll;
exports.default = _default2;