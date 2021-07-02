"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _header = _interopRequireDefault(require("./header"));

var _scroll = _interopRequireDefault(require("./scroll"));

var _footer = _interopRequireDefault(require("./footer"));

var _browser = require("../../utils/browser");

var _number = require("../../utils/number");

var _utils = require("./utils");

var _filterType = require("../../enum/filter-type");

var _alias = _interopRequireDefault(require("../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var ReportPivotTable = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPivotTable, _Vue);

  var _super = _createSuper(ReportPivotTable);

  function ReportPivotTable() {
    var _this;

    _classCallCheck(this, ReportPivotTable);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-pivot-table";
    _this.isMobile = _browser.isMobile;
    _this.bodyHeight = 0;
    _this.bodyWScroll = {};
    _this.summary = [];
    _this.bodyRows = [];
    _this.tableColumns = [];
    _this.tableColumnsWidths = [];
    _this.tableRows = [];
    _this.headerRows = [];
    _this.footerRows = [];
    _this.fixedWidth = 0;
    _this.tableWidth = 0;
    _this.fullScreen = false;
    _this.loaded = false; // 初始化拖拽时需要用的属性

    _this.dragOptions = null; // 映射字段列宽

    _this.mapColumnsWidth = {}; // 内部数据，表格属性
    // innerColumnsSetting: Array<H3.List.columnSetting> = this.columnsSetting;

    _this.innerColumnsSetting = _this.columnsSetting; // 平均宽度

    _this.averageWidth = 0; // 图表宽度

    _this.wrapWidth = 0;
    return _this;
  }

  _createClass(ReportPivotTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        ref: "pivotTable",
        "class": this.getTableClass,
        style: this.getTableStyle
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__view"),
        ref: "tableView"
      }, [this.getTableRows.length && this.fixedColHead && !this.isMobile ? h("h3-table-header", {
        ref: "header",
        attrs: {
          prefixCls: this.prefixCls,
          rows: this.rows,
          alias: this.alias,
          tableRows: this.getTableRows,
          tableColumnsWidths: this.tableColumnsWidths,
          scrollLeft: this.bodyWScroll.left,
          allowDrag: this.allowDrag
        },
        on: {
          "cell-click": function cellClick() {
            return _this2.cellClick;
          },
          "start-drag": function startDrag() {
            return _this2.startDrag;
          },
          "change-columns": function changeColumns() {
            return _this2.columnAdaptSize;
          }
        }
      }) : ""])]);
    }
  }, {
    key: "watchRefresh",
    value: function watchRefresh() {
      if (!this.loaded && this.refresh) {
        this.loaded = true;
        this.initTableData();
      }
    }
  }, {
    key: "watchData",
    value: function watchData() {
      this.initTableData();
    }
    /**
     * 监听序号变化
     */

  }, {
    key: "watchIsNo",
    value: function watchIsNo() {
      this.initTableData();
    }
    /**
     * 下传是否有序号
     */

  }, {
    key: "showOrderNo",
    get: function get() {
      return this.isNo;
    }
  }, {
    key: "getTableClass",
    get: function get() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.prefixCls, true), _defineProperty(_ref, "".concat(this.prefixCls, "__theme"), !!this.fontColor), _ref;
    }
    /**
     * 设置表格样式
     */

  }, {
    key: "getTableStyle",
    get: function get() {
      return {
        width: this.width ? "".concat(this.width, "px") : null,
        color: this.fontColor + " !important"
      };
    }
  }, {
    key: "getTableColumns",
    get: function get() {
      var _this3 = this;

      return this.tableColumns && this.tableColumns.length ? this.bodyRows.map(function (row, index) {
        return _this3.tableColumns[index].concat(row);
      }) : this.bodyRows;
    }
  }, {
    key: "getTableRows",
    get: function get() {
      var _this4 = this;

      return this.rows.length && this.tableRows.length ? this.tableRows.map(function (row, index) {
        return _this4.headerRows[index].concat(row, _this4.footerRows[index]);
      }) : this.tableRows;
    }
  }, {
    key: "getColumns",
    get: function get() {
      return this.columns;
    }
  }, {
    key: "getFixedLeftWidth",
    get: function get() {
      return this.fixedWidth + this.columns.length + 2;
    }
    /**
     * 刷新透视表
     */

  }, {
    key: "refreshTable",
    value: function refreshTable() {
      this.initTableData();
    }
    /**
     * 获取表体高度
     */

  }, {
    key: "getBodyHeight",
    value: function getBodyHeight() {
      // 每个单元格的高度是36px + 1px 边距 底部边框是上下2px 38px
      var bodyHeight = this.height || this.$el.clientHeight - 18; // 12px的下padding

      if (this.fixedColHead && !this.isMobile) {
        this.bodyHeight = bodyHeight - this.tableRows.length * 37;
      } else {
        this.bodyHeight = bodyHeight;
      }
    }
  }, {
    key: "setFixedWidth",
    value: function setFixedWidth(width) {
      this.fixedWidth = width;
    }
  }, {
    key: "setTableWidth",
    value: function setTableWidth(width) {
      if (this.$refs.pivotTable) {
        // 宽度超出滚动距离时用图表的宽度
        this.tableWidth = Math.max(this.$refs.pivotTable.clientWidth - 32, width);
      }
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
     * 初始化位置,及可拖动范围
     * @param container 外层容器
     * @param option 拖拽列表传出的属性
     */

  }, {
    key: "initDragOptions",
    value: function initDragOptions(container, option) {
      var wrapRect = this.$el.getBoundingClientRect();
      var thRect = option.e.target.parentElement.getBoundingClientRect();
      var wp = 16; // 容器padding

      var min = null;
      var max = null;
      var wrapLeft = wrapRect.left + wp;
      var cellW = thRect.width;
      min = Math.round(thRect.left - wrapLeft + 30); // 格子最小30px

      min = min < 2 ? 2 : min; // 左边界预留2px

      max = wrapRect.width - wp * 2 - 5; // 右边边界预留5px

      var cur = option.e.pageX - wrapLeft; // 当前线的位置

      return {
        cur: cur,
        min: min,
        max: max,
        cellW: cellW,
        wrapLeft: wrapLeft,
        option: option // 表格属性

      };
    }
    /**
     * 拖拽列宽开始
     */

  }, {
    key: "startDrag",
    value: function startDrag(option) {
      this.dragOptions = this.initDragOptions(this.$el, option);
      this.dragLine.style.left = this.dragOptions.cur + "px";
      this.dragLine.classList.add("dragged");
      document.body.addEventListener("mousemove", this.dragMousemove, false);
      document.body.addEventListener("mouseup", this.dragMouseup, false);
    }
    /**
     * 列宽拖拽中
     */

  }, {
    key: "dragMousemove",
    value: function dragMousemove(e) {
      var _this$dragOptions = this.dragOptions,
          min = _this$dragOptions.min,
          max = _this$dragOptions.max,
          wrapLeft = _this$dragOptions.wrapLeft;
      var offset = e.pageX - wrapLeft < min ? min : e.pageX - wrapLeft > max ? max : e.pageX - wrapLeft;
      this.dragLine.style.left = offset + "px";
    }
    /**
     * 列宽拖拽结束
     */

  }, {
    key: "dragMouseup",
    value: function dragMouseup(e) {
      this.dragLine.classList.remove("dragged");
      var _this$dragOptions2 = this.dragOptions,
          cur = _this$dragOptions2.cur,
          min = _this$dragOptions2.min,
          max = _this$dragOptions2.max,
          cellW = _this$dragOptions2.cellW,
          wrapLeft = _this$dragOptions2.wrapLeft,
          option = _this$dragOptions2.option;
      var offset = e.pageX - wrapLeft < min ? min : e.pageX - wrapLeft > max ? max : e.pageX - wrapLeft; // 没移动,兼容双击事件

      if (cur !== offset) {
        var tmpIndex = this.innerColumnsSetting.findIndex(function (item) {
          return item.key === option.row.key;
        });
        this.mapColumnsWidth[option.row.key] = cellW - (cur - offset);

        if (tmpIndex > -1) {
          this.innerColumnsSetting[tmpIndex].width = cellW - (cur - offset);
        } else {
          this.innerColumnsSetting.push({
            width: cellW - (cur - offset),
            key: option.row.key
          });
        }

        this.$emit("change-columns", this.innerColumnsSetting);
        this.initTableData();
      }

      this.dragOptions = null;
      document.body.removeEventListener("mouseup", this.dragMouseup, false);
      document.body.removeEventListener("mousemove", this.dragMousemove, false);
    }
    /**
     * 初始化数据
     */

  }, {
    key: "initData",
    value: function initData() {
      this.bodyHeight = 0;
      this.bodyWScroll = {};
      this.summary = [];
      this.bodyRows = [];
      this.tableColumns = [];
      this.tableColumnsWidths = [];
      this.tableRows = [];
      this.headerRows = [];
      this.footerRows = [];
    }
  }, {
    key: "initTableData",
    value: function initTableData() {
      var _this5 = this;

      this.dragLine = this.$refs["resize-line"]; // 没有行维度时

      if (this.data.summary && !this.data.data) this.data.data = [this.data.summary];
      if (!this.data.data) return;
      this.initData();
      var data = (0, _utils.handleTableData)(this.getColumns, this.rows, this.metric, this.data, this.isNo);
      var numberFormats = [];
      this.bodyRows = JSON.parse(JSON.stringify(this.data.data));
      this.tableColumns = data.columns;
      this.summary = JSON.parse(JSON.stringify(this.data.summary));
      this.tableRows = data.rows; // 取出数据格式

      this.metric.forEach(function (metric, index) {
        numberFormats.push(metric.options.numberFormat);
      }); // 数值格式化

      if (numberFormats.length) {
        [].concat(_toConsumableArray(this.bodyRows), [this.summary]).forEach(function (row) {
          row.forEach(function (cell, index) {
            if (toString.call(cell) === "[object Number]" && numberFormats[index % numberFormats.length]) {
              row[index] = (0, _number.convertNumber)(cell, numberFormats[index % numberFormats.length]);
            }
          });
        });
      }

      if (this.rows && this.rows.length) {
        var headerRow = [];
        this.tableRows.forEach(function (row, index) {
          if (index === 0) {
            _this5.footerRows.push([{
              label: "汇总",
              rowspan: _this5.rows.length || null,
              colspan: _this5.metric.length || null
            }]);
          } else if (index === _this5.tableRows.length - 1) {
            _this5.footerRows.push(_toConsumableArray(_this5.metric.map(function (metric) {
              return {
                label: metric.alias || metric.name,
                key: "\u6C47\u603B_".concat(metric.uid, "#").concat(metric.alias || metric.name)
              };
            })));
          } else {
            _this5.footerRows.push([]);
          }

          headerRow = [];

          if (index < _this5.rows.length) {
            headerRow.unshift({
              label: _this5.rows[index].alias || _this5.rows[index].name,
              colspan: _this5.getColumns.length || null
            });
          } else if (_this5.getColumns && _this5.getColumns.length) {
            var _headerRow;

            (_headerRow = headerRow).unshift.apply(_headerRow, _toConsumableArray(_this5.getColumns.map(function (item) {
              return {
                label: item.alias || item.name,
                key: "".concat(item.uid, "#").concat(item.alias || item.name)
              };
            })));
          } else {
            headerRow.unshift("");
          }

          _this5.headerRows.push(headerRow);
        });
      } else {
        this.headerRows = this.tableRows;
      }

      if (this.isNo && this.getColumns.length) {
        this.headerRows.forEach(function (rows) {
          if (rows[0].key) {
            rows.unshift({
              label: "序号",
              colspan: 1,
              key: "orderNumber"
            });
          } else {
            rows[0].colspan += 1;
          }
        });
      }

      var span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.fontSize = "12px";
      span.style.display = "inline-block";
      this.$refs.pivotTable.appendChild(span);
      var lastRow;

      if (this.tableColumns.length) {
        lastRow = this.tableColumns[this.tableColumns.length - 1].concat(this.summary);
      } else {
        lastRow = this.summary;
      }

      if (this.$refs.tableView) {
        this.wrapWidth = this.$refs.tableView.clientWidth;
      }

      this.averageWidth = Math.round(this.wrapWidth / lastRow.length) || 80; // 平均宽度

      this.tableColumnsWidths = Array(lastRow.length).fill(this.averageWidth); // 最小值

      [].concat(_toConsumableArray(this.getTableColumns), [lastRow]).forEach(function (rows) {
        rows.forEach(function (row, index) {
          var realIndex = _this5.isNo ? index - 1 : index;
          var realName = row;
          var aliaName = row;

          if (row || row === "") {
            if (_typeof(row) !== "object") {
              realName = row;
            } else {
              realName = row.label;
            }

            aliaName = _this5.getColumns[realIndex] ? (0, _alias.default)(_this5.getColumns[realIndex].uid, aliaName, _this5.alias) : "";
            span.innerText = aliaName || realName;
            _this5.tableColumnsWidths[index] = Math.max(span.clientWidth + 28, _this5.tableColumnsWidths[index], 80); // 初始化最大宽度为300，即双击显示最多三百的宽度。

            _this5.tableColumnsWidths[index] = _this5.tableColumnsWidths[index] > 300 ? 300 : _this5.tableColumnsWidths[index];
          }
        });
      }); // const fields = [...this.getColumns,...this.metric || [],...this.metric || []];
      // this.tableColumnsWidths.forEach((item,index)=> {
      //   let tmpField = fields[index];
      //   let fieldName = tmpField.alias ?  tmpField.alias : tmpField.name;
      //   span.innerText = fieldName;
      //   let fieldWidth = span.clientWidth + 28;
      //   if(fieldWidth > item) {
      //     this.tableColumnsWidths[index] = fieldWidth > 300 ? 300 : fieldWidth;
      //   }
      // });

      if (this.isNo) {
        this.tableColumnsWidths[0] = 50;
      }

      this.$refs.pivotTable.removeChild(span);
      this.$nextTick(function () {
        _this5.getBodyHeight();

        _this5.fullScreen = !_this5.fullScreen;
      });
      this.handleColumnsWidth();
      this.setTableExportData && this.setTableExportData({
        uid: this.uid,
        data: {
          colWidth: this.tableColumnsWidths,
          headRows: this.getTableRows,
          headColumns: this.tableColumns,
          bodyRows: this.bodyRows,
          summary: this.summary,
          alias: this.alias,
          title: this.title,
          columns: this.columns,
          metric: this.metric,
          rows: this.rows
        }
      });
    }
    /**
     * 列宽自适应
     * @param option
     */
    // 好像压根都走不到这里
    // columnAdaptSize(option: { e: Event; row: H3.List.TitleOptions }) {

  }, {
    key: "columnAdaptSize",
    value: function columnAdaptSize(option) {
      var tmpIndex = this.innerColumnsSetting.findIndex(function (item) {
        return item.key === option.row.key;
      });

      if (tmpIndex > -1) {
        this.innerColumnsSetting.splice(tmpIndex, 1);
        this.$emit("change-columns", this.innerColumnsSetting);
        this.initTableData();
      }
    }
    /**
     * 处理图表列宽
     */

  }, {
    key: "handleColumnsWidth",
    value: function handleColumnsWidth() {
      var _this6 = this;

      this.innerColumnsSetting = this.innerColumnsSetting.filter(function (item) {
        return _this6.getTableRows[_this6.getTableRows.length - 1].find(function (row, index) {
          if (item.key === row.key) {
            _this6.tableColumnsWidths[index] = item.width;
          }

          return item.key === row.key;
        });
      }); // 生成冻结列时，不计算

      var realWidth = 0;

      if (this.tableColumnsWidths && this.tableColumnsWidths.length > 0) {
        realWidth = this.tableColumnsWidths.reduce(function (total, current) {
          return total + current;
        }, 0);
      } // 宽度不够时，最后一个补齐


      if (realWidth < this.wrapWidth && this.tableColumnsWidths.length > 1) {
        this.tableColumnsWidths[this.tableColumnsWidths.length - 1] = this.tableColumnsWidths[this.tableColumnsWidths.length - 1] + (this.wrapWidth - realWidth);
      }

      this.mapColumnsWidth = {};
      this.innerColumnsSetting.forEach(function (item) {
        _this6.mapColumnsWidth[item.key] = item.width;
      });
    }
    /**
     * 设置数据格式
     * @param value
     * @param index
     */

  }, {
    key: "setNumberFormat",
    value: function setNumberFormat(value, index) {
      if (index >= this.metric.length && value) {
        var metric = this.metric[index % this.metric.length];

        if (metric.options.numberFormat instanceof Object) {
          value = (0, _number.convertNumber)(value, metric.options.numberFormat);
        }
      }

      return value;
    }
    /**
     * 获取一行的行维度的筛选条件
     */

  }, {
    key: "getRowsFilters",
    value: function getRowsFilters(options) {
      var _this7 = this;

      var filters = [];
      this.columns.forEach(function (field, index) {
        if (options.data.index >= (_this7.isNo ? index + 1 : index)) {
          filters.push({
            formula: _filterType.StringType.Equal,
            field: field,
            text: [options.data.row[_this7.isNo ? index + 1 : index]]
          });
        }
      });
      return filters;
    }
    /**
     * 获取一列的行维度筛选条件
     */

  }, {
    key: "getColumnFilters",
    value: function getColumnFilters(cellIndex) {
      var _this8 = this;

      var filters = [];
      var len = 0;
      var rowCell;
      this.tableRows.forEach(function (row, index) {
        len = _this8.columns.length || 1;
        rowCell = row.find(function (cell) {
          if (cell instanceof Object) {
            len += cell.colspan;
          } else {
            len += 1;
          }

          return cellIndex < len;
        });

        if (rowCell && index < _this8.rows.length) {
          filters.push({
            formula: _filterType.StringType.Equal,
            field: _this8.rows[index],
            text: rowCell instanceof Object ? [rowCell.label] : [rowCell]
          });
        }
      });
      return filters;
    }
    /**
     *  针对头部尾部的点击筛选
     * @param cellIndex
     * @param rowIndex
     * @param type
     */

  }, {
    key: "getColumnOtherFilters",
    value: function getColumnOtherFilters(cellIndex, rowIndex, type) {
      var cell = this.tableRows[rowIndex].slice(0, cellIndex).reduce(function (accumulator, currentValue) {
        var num = currentValue instanceof Object ? currentValue.colspan : 1;
        return num + accumulator;
      }, 0);

      if (type === "header") {
        return this.getColumnFilters(cell + this.columns.length - 1).slice(0, rowIndex + 1);
      } else {
        return this.getColumnFilters(cell + this.columns.length - 1);
      }
    }
    /**
     *  单元格点击事件
     * @param options
     */

  }, {
    key: "cellClick",
    value: function cellClick(options) {
      var cellIndex = options.data.index;
      var realIndex = this.isNo ? cellIndex - 1 : cellIndex;
      if (this.isNo && cellIndex === 0) return;
      if (options.data.data === "汇总" && options.type === "header") return;
      var filters = [];

      switch (options.type) {
        case "header":
          filters.push.apply(filters, _toConsumableArray(this.getColumnOtherFilters(cellIndex, options.data.rowIndex, options.type)));
          break;

        case "footer":
          if (this.rows.length && cellIndex <= this.summary.length - this.metric.length) {
            filters.push.apply(filters, _toConsumableArray(this.getColumnOtherFilters(cellIndex, options.data.rowIndex, options.type)));
          }

          break;

        default:
          if (!this.columns.length) {
            if (realIndex <= this.summary.length - this.metric.length) {
              filters.push.apply(filters, _toConsumableArray(this.getColumnFilters(realIndex)));
            }
          } else if (!this.rows.length) {
            filters.push.apply(filters, _toConsumableArray(this.getRowsFilters(options)));
          } // 点击行维度
          else if (realIndex < this.columns.length) {
              filters.push.apply(filters, _toConsumableArray(this.getRowsFilters(options)));
            } // 点击汇总单元
            else if (realIndex >= options.data.row.length - this.metric.length) {
                filters.push.apply(filters, _toConsumableArray(this.getRowsFilters(options)));
              } else {
                filters.push.apply(filters, _toConsumableArray(this.getRowsFilters(options)));
                filters.push.apply(filters, _toConsumableArray(this.getColumnFilters(realIndex)));
              }

          break;
      }

      this.$emit("click", {
        filters: filters
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.refresh) {
        this.loaded = true;
        this.initTableData();
      } else {
        this.loaded = false;
      }
    }
  }]);

  return ReportPivotTable;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "rows", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "metric", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTable.prototype, "isNo", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportPivotTable.prototype, "allowDrag", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTable.prototype, "height", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 0;
  }
})], ReportPivotTable.prototype, "width", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportPivotTable.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTable.prototype, "fixedColHead", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportPivotTable.prototype, "fixedRowHead", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportPivotTable.prototype, "uid", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportPivotTable.prototype, "title", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportPivotTable.prototype, "fontColor", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportPivotTable.prototype, "columnsSetting", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportPivotTable.prototype, "setTableExportData", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("refresh")], ReportPivotTable.prototype, "watchRefresh", null);

__decorate([(0, _vuePropertyDecorator.Watch)("data")], ReportPivotTable.prototype, "watchData", null);

__decorate([(0, _vuePropertyDecorator.Watch)("isNo")], ReportPivotTable.prototype, "watchIsNo", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportPivotTable.prototype, "setFixedWidth", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportPivotTable.prototype, "setTableWidth", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportPivotTable.prototype, "cellClick", null);

ReportPivotTable = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-pivot-table",
  components: {
    H3TableHeader: _header.default,
    H3TableBody: _scroll.default,
    H3TableFooter: _footer.default
  }
})], ReportPivotTable);
var _default2 = ReportPivotTable;
exports.default = _default2;