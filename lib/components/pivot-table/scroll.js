"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _scroll = _interopRequireDefault(require("../scroll"));

var _body = _interopRequireDefault(require("./body"));

var _utils = require("./utils");

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

var ReportPivotTableScroll = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPivotTableScroll, _Vue);

  var _super = _createSuper(ReportPivotTableScroll);

  function ReportPivotTableScroll() {
    var _this;

    _classCallCheck(this, ReportPivotTableScroll);

    _this = _super.apply(this, arguments);
    _this.y = 0;
    _this.index = 0;
    _this.rowIndex = 0;
    _this.innerData = [];
    _this.data = [];
    _this.rowNum = 30;
    _this.columnsLen = 0;
    _this.staticCellHeight = 37;
    return _this;
  }

  _createClass(ReportPivotTableScroll, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", [h("h3-scroll", {
        ref: "scroll",
        "class": "".concat(this.prefixCls, "__body-warp"),
        style: "height: ".concat(this.height, "px"),
        attrs: {
          buttonColor: "'rgba(0,0,0,0.45)'",
          scrollYBtn: this.fix ? true : true,
          scrollXBtn: this.fix ? false : true
        },
        on: {
          "scroll": function scroll() {
            return _this2.scroll;
          }
        }
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__mask"),
        style: "height: ".concat(this.bodyRows.length * this.staticCellHeight + (!this.fixedColHead ? (this.rows.length + 1) * this.staticCellHeight : 0), "px")
      }), h("table-warp", {
        ref: "tableBody",
        attrs: {
          alias: this.alias,
          rowNum: this.rowNum,
          tableColumnsWidths: this.tableColumnsWidths,
          rowIndex: this.rowIndex,
          columnsLen: this.columnsLen,
          innerData: this.innerData,
          data: this.data,
          index: this.index,
          columns: this.columns,
          summary: this.summary,
          metric: this.metric,
          fixedColHead: this.fixedColHead,
          showOrderNo: this.showOrderNo,
          tableRows: this.tableRows,
          rows: this.rows,
          allowDrag: this.allowDrag
        },
        on: {
          "start-drag": function startDrag() {
            return _this2.startDrag;
          },
          "change-columns": function changeColumns() {
            return _this2.columnAdaptSize(event);
          }
        }
      }), this.$slots.default])]);
    }
  }, {
    key: "watchData",
    value: function watchData() {
      this.setInnerData(0, 2);
    }
  }, {
    key: "watchScrollTop",
    value: function watchScrollTop(top) {
      this.$refs.scroll && this.$refs.scroll.setScroll(0, top);
    }
  }, {
    key: "watchFullScreen",
    value: function watchFullScreen() {
      this.toogleScreen();
    }
    /**
     * 拖拽列宽
     */

  }, {
    key: "startDrag",
    value: function startDrag(option) {
      this.$emit("start-drag", option);
    }
  }, {
    key: "setInnerData",
    value: function setInnerData(pre, next) {
      var columns = this.tableColumns.slice(pre * this.rowNum, next * this.rowNum);
      var bodyRows = this.bodyRows.slice(pre * this.rowNum, next * this.rowNum);
      this.data = columns.map(function (col, index) {
        return col.concat(bodyRows[index]);
      });
      var rows = [];

      if (columns.length) {
        this.columnsLen = columns[0].length;

        if (this.columnsLen > 0) {
          // 让所有行表头变为对象
          var tmpCols = [];
          var tmpColIndex = {};
          columns.forEach(function (cols) {
            tmpCols = null;
            cols.forEach(function (col, index) {
              col = " " + col; // 暂时解决数字key乱序的问题

              if (!tmpCols) {
                if (!tmpColIndex[col]) {
                  tmpColIndex[col] = index < cols.length - 2 ? {} : [];
                }

                tmpCols = tmpColIndex[col];
              } else if (tmpCols) {
                if (tmpCols instanceof Array) {
                  tmpCols.push(col);
                } else {
                  if (!tmpCols[col]) {
                    tmpCols[col] = index < cols.length - 2 ? {} : [];
                  }

                  tmpCols = tmpCols[col];
                }
              }
            });
          });
          columns = [];
          (0, _utils.handleBodyRows)(tmpColIndex, columns);
        }

        columns.forEach(function (cols, colIndex) {
          rows.push(cols.concat(bodyRows[colIndex]));
        });
      } else {
        rows = bodyRows;
      }

      this.innerData = rows;
    }
  }, {
    key: "setSplice",
    value: function setSplice(y) {
      var index = Math.floor((y + this.$el.clientHeight) / this.staticCellHeight / this.rowNum);

      if (index !== this.index) {
        this.index = index;
        var pre = index - 1 > 0 ? index - 1 : 0;
        var next = pre + 2;
        this.rowIndex = pre * this.rowNum;
        this.setInnerData(pre, next);
      }
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      this.setSplice(e.y);
      this.$emit("bodyScroll", {
        left: e.x,
        top: e.y
      });
    }
    /**
     * 双击格子自适应
     */

  }, {
    key: "columnAdaptSize",
    value: function columnAdaptSize(e) {
      this.$emit("change-columns", e);
    }
  }, {
    key: "toogleScreen",
    value: function toogleScreen() {
      this.$refs.scroll && this.$refs.scroll.setScrollBar();
    }
  }]);

  return ReportPivotTableScroll;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "h3-table";
  }
})], ReportPivotTableScroll.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportPivotTableScroll.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "tableColumnsWidths", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "tableColumns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "bodyRows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "summary", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTableScroll.prototype, "height", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "metric", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ReportPivotTableScroll.prototype, "fix", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportPivotTableScroll.prototype, "scrollTop", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTableScroll.prototype, "fixedColHead", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTableScroll.prototype, "showOrderNo", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "tableRows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTableScroll.prototype, "rows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTableScroll.prototype, "fullScreen", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportPivotTableScroll.prototype, "allowDrag", void 0);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportPivotTableScroll.prototype, "staticCellHeight", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("bodyRows", {
  immediate: true
})], ReportPivotTableScroll.prototype, "watchData", null);

__decorate([(0, _vuePropertyDecorator.Watch)("scrollTop", {
  immediate: true
})], ReportPivotTableScroll.prototype, "watchScrollTop", null);

__decorate([(0, _vuePropertyDecorator.Watch)("fullScreen", {
  immediate: true
})], ReportPivotTableScroll.prototype, "watchFullScreen", null);

ReportPivotTableScroll = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-pivot-table-scroll",
  components: {
    TableWarp: _body.default,
    H3Scroll: _scroll.default
  }
})], ReportPivotTableScroll);
var _default2 = ReportPivotTableScroll;
exports.default = _default2;