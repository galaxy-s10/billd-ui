"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _cell = _interopRequireDefault(require("./cell"));

var _mixin = _interopRequireDefault(require("./mixin"));

var _alias = _interopRequireDefault(require("../../utils/alias"));

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

var ReportPivotTableBody = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportPivotTableBody, _Mixins);

  var _super = _createSuper(ReportPivotTableBody);

  function ReportPivotTableBody() {
    _classCallCheck(this, ReportPivotTableBody);

    return _super.apply(this, arguments);
  }

  _createClass(ReportPivotTableBody, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      var colgroup = [];
      var tr = [];
      var tableWidth = 0;
      this.tableColumnsWidths.forEach(function (colNum, index) {
        tableWidth += colNum;
        colgroup.push(h("col", {
          class: {
            "h3-pivot-table__number-cell": index >= _this.columnsLen
          },
          attrs: {
            width: colNum
          }
        }));
      });
      this.innerData.forEach(function (row, index) {
        var td = [];
        var cellOptions;
        var diffNum = _this.data[index].length - row.length;
        row.forEach(function (cell, cellIndex) {
          var options = {
            attrs: {}
          };
          var maxLength = _this.tableColumnsWidths.length;
          var extraLength = maxLength - row.length;
          var realIndex = _this.showOrderNo ? cellIndex + extraLength - 1 : cellIndex + extraLength;
          cellOptions = {
            props: {
              field: _this.columns[realIndex] ? _this.columns[realIndex] : null,
              row: _this.data[index],
              rowIndex: index,
              index: diffNum + cellIndex,
              formatter: function formatter(_ref) {
                var data = _ref.data;
                var realData = _this.columns[realIndex] ? (0, _alias.default)(_this.columns[realIndex].uid, data, _this.alias) : "";
                return realData || data;
              },
              data: cell
            },
            class: {}
          };

          if (cell !== null && cell !== undefined) {
            cellOptions.class["cell-click"] = true;
            cellOptions.on = {
              click: function click(data) {
                if (_this.cellClick) {
                  _this.cellClick({
                    type: "body",
                    data: data
                  });
                }
              }
            };
          }

          if (cell instanceof Object) {
            if (cell.colspan) {
              options.attrs.colspan = cell.colspan;
            }

            if (cell.rowspan) {
              options.attrs.rowspan = cell.rowspan;
              cellOptions.class["middle"] = true;
            }

            cellOptions.props.data = cell.label;
          } else {
            cellOptions.class["rtl"] = true;
          }

          td.push(h("td", options, [h(_cell.default, cellOptions)]));
        });
        tr.push(h("tr", td));
      });
      var index = this.index - 1 > 0 ? this.index - 1 : 0;
      var tableVNodes = [];

      if (this.fixedColHead) {
        tableVNodes = [h("colgroup", colgroup), tr];
      } else {
        tableVNodes = [h("colgroup", colgroup), this.makeHead(h, true), tr];
      }

      return h("table", {
        style: {
          position: "absolute",
          left: "0",
          top: "".concat(index * this.staticCellHeight * this.rowNum, "px"),
          width: "".concat(tableWidth, "px")
        },
        attrs: {
          cellspacing: 0,
          cellpadding: 0,
          border: 0,
          class: "".concat(this.prefixCls, "__body")
        }
      }, tableVNodes);
    }
  }]);

  return ReportPivotTableBody;
}((0, _vuePropertyDecorator.Mixins)(_mixin.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "innerData", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTableBody.prototype, "index", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportPivotTableBody.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTableBody.prototype, "rowIndex", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTableBody.prototype, "rowNum", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTableBody.prototype, "columnsLen", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "metric", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "h3-pivot-table";
  }
})], ReportPivotTableBody.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "tableColumnsWidths", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "summary", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTableBody.prototype, "fixedColHead", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTableBody.prototype, "showOrderNo", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "tableRows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableBody.prototype, "rows", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportPivotTableBody.prototype, "cellClick", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportPivotTableBody.prototype, "staticCellHeight", void 0);

ReportPivotTableBody = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-pivot-table-body",
  components: {
    Cell: _cell.default
  }
})], ReportPivotTableBody);
var _default2 = ReportPivotTableBody;
exports.default = _default2;