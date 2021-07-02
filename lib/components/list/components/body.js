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

var ReportListBody = /*#__PURE__*/function (_Vue) {
  _inherits(ReportListBody, _Vue);

  var _super = _createSuper(ReportListBody);

  function ReportListBody() {
    var _this;

    _classCallCheck(this, ReportListBody);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(prefix, "-list-table-body"); // 固定的单元格高度

    _this.staticCellHeight = 36;
    return _this;
  }

  _createClass(ReportListBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      h("table", {
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
      })]), h("tbody", [this.datasource.map(function (d, index) {
        return h("tr", {
          attrs: {
            "data-idx": index + 1
          }
        }, [_this2.sortColumn.map(function (col) {
          return h("a-fragment", [_typeof(d[col.key]) !== "object" ? h("th", {
            key: col.key,
            attrs: {
              "data-key": col.key
            },
            on: {
              "click": function click() {
                return _this2.clickField(d);
              }
            }
          }, [h("div", {
            "class": "".concat(_this2.prefixCls, "__cell")
          }, [h("a-fragment", [col.key === "h3-report-list-order" ? _this2.prefixSerial + index + 1 : d[col.key]])])]) : h("th", {
            key: col.key,
            attrs: {
              "data-key": col.key
            },
            on: {
              "click": function click() {
                return _this2.clickField(d);
              }
            }
          }, [h("div", {
            "class": ""
          }, [d[col.key].map(function (child, cIndex) {
            return h("div", {
              key: "".concat(index, "-").concat(cIndex, "-child"),
              "class": "".concat(_this2.prefixCls, "__cell"),
              style: _this2.calculateCellStyle(index, d[col.key])
            }, [h("a-fragment", [child])]);
          })])])]);
        })]);
      })])]);
    }
    /**
     * 动态计算表格的宽度
     */

  }, {
    key: "tableWidth",
    get: function get() {
      return this.sortColumn.length > 0 ? this.sortColumn.reduce(function (current, next) {
        var currentWidth = current.width || current;
        return currentWidth + next.width;
      }) + "px" : "100%";
    }
    /**
     * 序号前缀
     */

  }, {
    key: "prefixSerial",
    get: function get() {
      return this.pageParams.pageSize * (this.pageParams.pageIndex - 1);
    }
    /**
     * 动态计算表格每一行的最大行数
     */

  }, {
    key: "maxClomns",
    get: function get() {
      return this.datasource.map(function (item) {
        var max = 1;

        for (var key in item) {
          if (Array.isArray(item[key]) && item[key].length > max) {
            max = item[key].length;
          }
        }

        return max;
      });
    }
    /**
     * 计算单元格高度和行高
     */

  }, {
    key: "calculateCellStyle",
    value: function calculateCellStyle(index, value) {
      // if (value && value.length === this.maxClomns[index]) return
      var height = this.maxClomns[index] * this.staticCellHeight / value.length;
      return {
        height: "".concat(height, "px"),
        "line-height": "".concat(height - 16, "px")
      };
    }
    /**
     * 点击单元格
     */

  }, {
    key: "clickField",
    value: function clickField(data) {
      if (data.holeInfo) {
        this.$emit("drill-down", data.holeInfo);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      console.log(this.sortColumn);
    }
  }]);

  return ReportListBody;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportListBody.prototype, "datasource", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportListBody.prototype, "sortColumn", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportListBody.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {
      pageSize: 10,
      pageIndex: 1 // 第几页

    };
  }
})], ReportListBody.prototype, "pageParams", void 0);

ReportListBody = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-list-table-body",
  components: {
    AFragment: _vueFragment.Fragment
  }
})], ReportListBody);
var _default2 = ReportListBody;
exports.default = _default2;