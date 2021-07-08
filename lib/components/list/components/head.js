"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vueFragment = require("vue-fragment");

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

// import "../styles/index.less";
var prefix = "h3-report";

var ReportListHead = /*#__PURE__*/function (_Vue) {
  _inherits(ReportListHead, _Vue);

  var _super = _createSuper(ReportListHead);

  function ReportListHead() {
    var _this;

    _classCallCheck(this, ReportListHead);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(prefix, "-list-table-head");
    return _this;
  }

  _createClass(ReportListHead, [{
    key: "tableWidth",
    get: function get() {
      return this.sortColumn.length > 0 ? this.sortColumn.reduce(function (current, next) {
        var currentWidth = current.width || current;
        return currentWidth + next.width;
      }) + "px" : "100%";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("table", {
        attrs: {
          border: "0",
          cellspacing: "0",
          cellpadding: "0"
        },
        "class": this.prefixCls,
        style: "width: ".concat(this.tableWidth)
      }, [h("colgroup", [this.sortColumn.map(function (h) {
        return h("col", {
          style: "width: ".concat(h.width, "px")
        });
      })]), h("thead", {
        style: {
          color: this.column.fontColor
        }
      }, [this.column.map(function (rowHead, index) {
        return h("tr", [rowHead.length > 0 && h("a-fragment", [rowHead.map(function (c) {
          return h("th", {
            attrs: {
              rowspan: c.isLeaf ? _this2.column.length - index : 1,
              colspan: c.isLeaf ? 1 : c.leafNum
            }
          }, [c.alias || c.name, _this2.allowDrag && c.allowDrag && h("div", {
            "class": "column-resize-area",
            on: {
              "mousedown": function mousedown(e) {
                return _this2.startDrag(e, c);
              },
              "dblclick": function dblclick(e) {
                return _this2.dblclick(e, c);
              }
            }
          })]);
        })])]);
      })])]);
    }
    /**
    * 拖拽
    */

  }, {
    key: "startDrag",
    value: function startDrag(e, row) {
      this.$emit("start-drag", {
        e: e,
        row: row
      });
    }
    /**
     * 双击格子自适应
     */

  }, {
    key: "dblclick",
    value: function dblclick(e, row) {
      this.$emit("change-columns", {
        e: e,
        row: row
      });
    }
  }]);

  return ReportListHead;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportListHead.prototype, "column", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportListHead.prototype, "sortColumn", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ReportListHead.prototype, "allowDrag", void 0);

ReportListHead = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-list-table-head",
  components: {
    AFragment: _vueFragment.Fragment
  }
})], ReportListHead);
var _default2 = ReportListHead;
exports.default = _default2;