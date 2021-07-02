"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _cell = _interopRequireDefault(require("./cell"));

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

var ReportPivotTableFooter = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPivotTableFooter, _Vue);

  var _super = _createSuper(ReportPivotTableFooter);

  function ReportPivotTableFooter() {
    _classCallCheck(this, ReportPivotTableFooter);

    return _super.apply(this, arguments);
  }

  _createClass(ReportPivotTableFooter, [{
    key: "watchScrollLeft",
    value: function watchScrollLeft() {
      var header = this.$refs.footer;

      if (header) {
        header.scrollLeft = this.scrollLeft;
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      // 初始化时，table容器有动画影响到取值
      setTimeout(function () {
        _this.setProvide();
      }, 300);
      window.addEventListener("resize", this.setProvide, false);
    }
  }, {
    key: "updated",
    value: function updated() {
      this.setProvide();
    }
  }, {
    key: "setProvide",
    value: function setProvide() {
      if (!this.fix) {
        var fixedWidth = this.$refs.allSum.$el.clientWidth;
        var tableWidth = this.$refs.footerTable.clientWidth;
        this.setFixedWidth(fixedWidth);
        this.setTableWidth(tableWidth);
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this2 = this;

      var colgroup = [];
      var footerTrs = [];
      var footerThs = [];
      var tableWidth = 0;
      var diffNumber = this.tableColumnsWidths.length - this.summary.length;
      var footerWidths = [this.tableColumnsWidths.slice(0, diffNumber).reduce(function (total, num) {
        return total + num;
      }, 0)].concat(this.tableColumnsWidths.slice(diffNumber));
      footerThs.push(h("th", [h(_cell.default, {
        props: {
          index: 0,
          data: "汇总"
        },
        ref: "allSum"
      })]));
      footerWidths.forEach(function (len, index) {
        tableWidth += len;
        colgroup.push(h("col", {
          attrs: {
            width: len
          }
        }));

        if (index > 0) {
          footerThs.push(h("th", [h(_cell.default, {
            class: {
              "cell-click": true,
              rtl: true
            },
            props: {
              row: _this2.summary,
              index: index,
              data: _this2.summary[index - 1] !== null ? _this2.summary[index - 1] : "-"
            },
            on: {
              click: function click(data) {
                _this2.cellClick({
                  type: "footer",
                  data: data
                });
              }
            }
          })]));
        }
      });
      footerTrs.push(h("colgroup", colgroup), h("tr", footerThs));
      return h("div", {
        ref: "footer",
        attrs: {
          class: "".concat(this.prefixCls, "__footer-warp")
        }
      }, [h("table", {
        ref: "footerTable",
        style: {
          width: "".concat(tableWidth, "px")
        },
        attrs: {
          cellspacing: 0,
          cellpadding: 0,
          border: 0,
          class: "".concat(this.prefixCls, "__footer")
        }
      }, footerTrs)]);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.removeEventListener("resize", this.setProvide, false);
    }
  }]);

  return ReportPivotTableFooter;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableFooter.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableFooter.prototype, "scrollLeft", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableFooter.prototype, "summary", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableFooter.prototype, "tableColumnsWidths", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportPivotTableFooter.prototype, "fix", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportPivotTableFooter.prototype, "cellClick", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportPivotTableFooter.prototype, "setFixedWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportPivotTableFooter.prototype, "setTableWidth", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("scrollLeft")], ReportPivotTableFooter.prototype, "watchScrollLeft", null);

ReportPivotTableFooter = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-pivot-table-footer",
  components: {
    Cell: _cell.default
  }
})], ReportPivotTableFooter);
var _default2 = ReportPivotTableFooter;
exports.default = _default2;