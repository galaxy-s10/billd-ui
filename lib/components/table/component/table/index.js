"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _header = _interopRequireDefault(require("./header"));

var _scroll = _interopRequireDefault(require("./scroll"));

var _footer = _interopRequireDefault(require("./footer"));

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

// import './table.less'
var tableNum = 1;
var columnNum = 1;

var ReportTable = /*#__PURE__*/function (_Vue) {
  _inherits(ReportTable, _Vue);

  var _super = _createSuper(ReportTable);

  function ReportTable() {
    var _this;

    _classCallCheck(this, ReportTable);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-table';
    _this.gutter = true;
    _this.tableId = '';
    _this.bodyWScroll = {};
    _this.columnsWidth = [];
    _this.columnsIds = [];
    _this.headerWidth = 0;
    _this.requestID = -1;
    _this.bodyHeight = 0;
    _this.timer = 0;
    _this.summaryObj = {};
    return _this;
  }

  _createClass(ReportTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls,
        style: this.getTableStyle,
        attrs: {
          tableId: this.tableId
        }
      }, [h("h3-table-header", {
        ref: "header",
        attrs: {
          prefixCls: this.prefixCls,
          columns: this.columns,
          columnsWidth: this.columnsWidth,
          columnsIds: this.columnsIds,
          gutter: this.gutter,
          gutterWidth: this.gutterWidth,
          scrollLeft: this.bodyWScroll.left
        }
      }), h("h3-table-body", {
        attrs: {
          prefixCls: this.prefixCls,
          columnsWidth: this.columnsWidth,
          columnsIds: this.columnsIds,
          columns: this.columns,
          data: this.data,
          height: this.bodyHeight
        },
        on: {
          "bodyScroll": function bodyScroll() {
            return _this2.bodyScroll;
          },
          "setGutterSate": function setGutterSate() {
            return _this2.setGutterSate;
          }
        }
      }), this.summary && h("h3-table-footer", {
        ref: "footer",
        attrs: {
          summaryObj: this.summaryObj,
          prefixCls: this.prefixCls,
          columns: this.columns,
          columnsWidth: this.columnsWidth,
          columnsIds: this.columnsIds,
          gutter: this.gutter,
          gutterWidth: this.gutterWidth,
          scrollLeft: this.bodyWScroll.left
        }
      })]);
    }
    /**
     * 设置表格样式
     */

  }, {
    key: "getTableStyle",
    get: function get() {
      return {
        width: this.width ? "".concat(this.width, "px") : null
      };
    }
    /**
     * 获取表体高度
     */

  }, {
    key: "getBodyHeight",
    value: function getBodyHeight() {
      var bodyHeight = this.height;
      var header = this.$refs.header;
      var footer = this.$refs.footer;

      if (header) {
        bodyHeight -= header.$el.offsetHeight;
      }

      if (footer) {
        bodyHeight -= footer.$el.offsetHeight;
      }

      return bodyHeight;
    }
    /**
     * 设置预留排线是否显示
     */

  }, {
    key: "setGutterSate",
    value: function setGutterSate(state) {
      this.gutter = state;
    }
    /**
     * 监听表体滚动
     */

  }, {
    key: "bodyScroll",
    value: function bodyScroll(_bodyScroll) {
      this.bodyWScroll = _bodyScroll;
    }
    /**
     * 监听表格宽度变化
     */

  }, {
    key: "addTableSizeChangeEvent",
    value: function addTableSizeChangeEvent() {
      var headerWidth = 0;

      if (this.$refs.header) {
        headerWidth = this.$refs.header.$el.offsetWidth;

        if (this.headerWidth !== headerWidth) {
          this.headerWidth = headerWidth;
          this.columnsWidth = this.getColumnsWidth();
        }
      }

      this.requestID = window.requestAnimationFrame(this.addTableSizeChangeEvent);
    }
    /**
     * 获取行宽度
     */

  }, {
    key: "getColumnsWidth",
    value: function getColumnsWidth() {
      var _this3 = this;

      var headerWidth = this.headerWidth;
      var tableWidth = 0;
      this.columns.forEach(function (col) {
        tableWidth += col.width || 100;
      });

      if (tableWidth < headerWidth) {
        var empty = this.columns.filter(function (col) {
          return !col.width;
        });

        if (empty && empty.length && (headerWidth - tableWidth) / empty.length > 100) {
          return this.columns.map(function (col) {
            return empty.filter(function (eCol) {
              return eCol === col;
            }).length ? (headerWidth - tableWidth) / empty.length : col.width || 0;
          });
        }

        var tmpColsWidth = this.columns.map(function (col) {
          var colWidth = col.width || 100;
          var colRatio = colWidth / tableWidth;
          var colActualWidth = colRatio * (headerWidth - (_this3.gutter ? 0 : _this3.gutterWidth));
          return parseInt(colActualWidth.toFixed(0), 10);
        });
        var colsWidth = 0;

        if (tmpColsWidth.length) {
          colsWidth = tmpColsWidth.reduce(function (prev, cur) {
            return prev + cur;
          });
        }

        if (colsWidth > headerWidth) {
          tmpColsWidth[tmpColsWidth.length - 1] -= colsWidth - headerWidth;
        }

        return tmpColsWidth;
      }

      return this.columns.map(function (col) {
        return col.width || 100;
      });
    }
  }, {
    key: "created",
    value: function created() {
      var _this4 = this;

      var tableId = "h3_table_".concat(tableNum++);
      this.tableId = tableId;
      var summaryCols = [];
      this.columnsIds = this.columns.map(function (item) {
        if (item.type === 'number') {
          summaryCols.push(item);
        }

        return "".concat(tableId, "_col_").concat(columnNum++);
      });

      if (this.summary && summaryCols.length) {
        this.data.forEach(function (row) {
          summaryCols.forEach(function (col) {
            var key = col.prop;
            if (!_this4.summaryObj[key] && _this4.summaryObj[key] !== 0) _this4.summaryObj[key] = row[key];else {
              switch (col.summaryType) {
                case 'SUM':
                case 'AVG':
                  _this4.summaryObj[key] += parseFloat(row[key]);
                  break;

                case 'MAX':
                  _this4.summaryObj[key] = Math.max(_this4.summaryObj[key], parseFloat(row[key]));
                  break;

                case 'MIN':
                  _this4.summaryObj[key] = Math.min(_this4.summaryObj[key], parseFloat(row[key]));
                  break;

                default:
                  _this4.summaryObj[key] += parseFloat(row[key]);
                  break;
              }
            }
          });
        });
        this.columns.forEach(function (col, index) {
          if (_this4.summaryObj[col.prop]) {
            if (col.summaryType === 'AVG') {
              _this4.summaryObj[col.prop] = _this4.summaryObj[col.prop] / _this4.data.length;
            }

            _this4.summaryObj[col.prop] = parseFloat(_this4.summaryObj[col.prop].toFixed(2));
          }
        });
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      this.bodyHeight = this.getBodyHeight();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.bodyHeight = this.getBodyHeight();
      this.addTableSizeChangeEvent();
      var headerWidth = 0;

      if (this.$refs.header) {
        headerWidth = this.$refs.header.$el.clientWidth;

        if (this.headerWidth !== headerWidth) {
          this.headerWidth = headerWidth;
          this.columnsWidth = this.getColumnsWidth();
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.cancelAnimationFrame(this.requestID);
    }
  }]);

  return ReportTable;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTable.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportTable.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportTable.prototype, "summary", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTable.prototype, "height", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportTable.prototype, "width", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 17;
  }
})], ReportTable.prototype, "gutterWidth", void 0);

ReportTable = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-table',
  components: {
    H3TableHeader: _header.default,
    H3TableBody: _scroll.default,
    H3TableFooter: _footer.default
  }
})], ReportTable);
var _default2 = ReportTable;
exports.default = _default2;