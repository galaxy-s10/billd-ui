"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _pagination = _interopRequireDefault(require("./components/pagination"));

var _head = _interopRequireDefault(require("./components/head"));

var _body = _interopRequireDefault(require("./components/body"));

var _scroll = _interopRequireDefault(require("../scroll"));

var _loading = _interopRequireDefault(require("../loading"));

var _browser = require("../../utils/browser");

var _number = require("../../utils/number");

var _date = require("../../utils/date");

var _alias = _interopRequireDefault(require("../../utils/alias"));

var _string = require("../../utils/string");

var _vueFragment = require("vue-fragment");

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

// import "./styles/index.less";
var prefix = "h3-report";
var orderKey = "h3-report-list-order";
var minWidth = 80;

var ReportList = /*#__PURE__*/function (_Vue) {
  _inherits(ReportList, _Vue);

  var _super = _createSuper(ReportList);

  function ReportList() {
    var _this;

    _classCallCheck(this, ReportList);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(prefix, "-list");
    _this.pageParams = {
      pageSize: 10,
      pageIndex: 1 // 第几页

    }; // 排序渲染的列信息

    _this.sortColumn = []; // 排序渲染的列信息 冻结部分

    _this.staticSortColumn = _this.sortColumn; // 表格滚动区域高度

    _this.height = 100; // 固定的头部的滚动距离 和表体的滚动距离

    _this.headScrollLeft = 0;
    _this.headScrollTop = 0; // 平均宽度

    _this.averageWidth = 1; // 客户端判断

    _this.isPc = true; // 内部数据源 处理数值格式和日期格式

    _this.innerDatasource = JSON.parse(JSON.stringify(_this.datasource)); // 初始化拖拽时需要用的属性

    _this.dragOptions = null; // 内部数据，表格属性

    _this.innerColumnsSetting = _this.columnsSetting; // 映射字段列宽

    _this.mapColumnsWidth = {};
    return _this;
  }

  _createClass(ReportList, [{
    key: "onFreezeHeadChange",
    value: function onFreezeHeadChange(val) {
      if (val.column && val.columnNumber) {
        var staticNum = val.columnNumber;
        var targetColumns = this.visibleColumns.slice(0, staticNum);
        this.staticSortColumn = this.calculateHead(targetColumns, true);
      }
    }
  }, {
    key: "ondataChange",
    value: function ondataChange(val) {
      this.innerDatasource = JSON.parse(JSON.stringify(val));
      this.initList();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        ref: "list",
        "class": this.prefixCls,
        style: "color: ".concat(this.fontColor)
      }, [false && h("div", {
        "class": "".concat(this.prefixCls, "__loading")
      }, [h(_loading.default)]), h("div", {
        "class": "".concat(this.prefixCls, "__content"),
        style: {
          color: "".concat(this.fontColor, " !important")
        }
      }, [this.freezeHead.column && this.freezeHead.columnNumber && this.isPc && h("div", {
        "class": "".concat(this.prefixCls, "__static"),
        style: this.staticStyle
      }, [h("h3-head", {
        attrs: {
          column: this.formatColumns,
          "sort-column": this.sortColumn,
          allowDrag: this.allowDragColumn
        },
        style: "color: ".concat(this.fontColor),
        on: {
          "start-drag": function startDrag(e) {
            return _this2.startDrag(e);
          },
          "change-columns": function changeColumns(e) {
            return _this2.columnAdaptSize(e);
          }
        }
      }), !this.refresh && h("a-vue-fragment", [h("h3-body", {
        attrs: {
          "sort-column": this.sortColumn,
          alias: this.alias,
          datasource: this.innerDatasource,
          "page-params": this.pageParams
        },
        style: this.staticBodyStyle,
        on: {
          "drill-down": this.drillDown
        }
      })])]), h("div", {
        "class": "".concat(this.prefixCls, "__pane"),
        ref: "listPane"
      }, [h("h3-head", {
        ref: "listHead",
        attrs: {
          column: this.formatColumns,
          "sort-column": this.sortColumn,
          allowDrag: this.allowDragColumn
        },
        style: this.staticHeadStyle,
        on: {
          "change-columns": function changeColumns(e) {
            return _this2.columnAdaptSize(e);
          },
          "start-drag": function startDrag(e) {
            return _this2.startDrag(e);
          }
        }
      }), this.refresh ? h(_loading.default) : h("a-vue-fragment", [h("h3-scroll", {
        ref: "scroll",
        "class": "".concat(this.prefixCls, "__body-warp"),
        style: this.scrollStyle,
        attrs: {
          "button-color": "'rgba(0,0,0,0.45)'"
        },
        on: {
          "scroll": this.scroll
        }
      }, [h("h3-body", {
        attrs: {
          "sort-column": this.sortColumn,
          alias: this.alias,
          datasource: this.innerDatasource,
          "page-params": this.pageParams
        },
        style: "color: ".concat(this.fontColor),
        on: {
          "drill-down": this.drillDown
        }
      })])])]), this.allowDrag && h("div", {
        "class": "column-resize-line",
        ref: "resize-line"
      })]), h("div", {
        "class": "".concat(this.prefixCls, "__tool")
      }, [h("h3-pagination", {
        attrs: {
          showTotal: function showTotal() {
            return _this2.getterTotal(_this2.total);
          },
          total: this.total
        },
        on: {
          "change": this.changePage
        }
      })])]);
    }
  }, {
    key: "allowDragColumn",
    get: function get() {
      return this.isPc && this.allowDrag;
    }
    /**
     * 固定的头部的滚动距离样式
     */

  }, {
    key: "staticHeadStyle",
    get: function get() {
      return {
        transform: "translateX(-".concat(this.headScrollLeft, "px)"),
        color: "".concat(this.fontColor)
      };
    }
    /**
     * 固定的表格标题部分
     */

  }, {
    key: "staticBodyStyle",
    get: function get() {
      return {
        transform: "translateY(-".concat(this.headScrollTop, "px)"),
        color: "".concat(this.fontColor)
      };
    }
    /**
     * 分层格式化表头渲染信息 目前业务最多只有两层表头 todo: 多层表头循环
     */

  }, {
    key: "formatColumns",
    get: function get() {
      return this.calcuateColumns();
    }
    /**
     * 分层格式化表头渲染信息 目前业务最多只有两层表头 todo: 多层表头循环
     */

  }, {
    key: "staticFormatColumns",
    get: function get() {
      var targetColumns = this.visibleColumns;

      if (this.freezeHead.column && this.freezeHead.columnNumber) {
        var staticNum = this.freezeHead.columnNumber;
        targetColumns = this.visibleColumns.slice(0, staticNum);
      }

      return this.calcuateColumns(targetColumns);
    }
    /**
     * 滑动面板的样式
     */

  }, {
    key: "scrollStyle",
    get: function get() {
      return {
        height: "".concat(this.height, "px")
      };
    }
    /**
     * 筛选可显示的字段
     */

  }, {
    key: "visibleColumns",
    get: function get() {
      return this.columns.filter(function (i) {
        return !i.options.hidden;
      });
    }
    /**
     * 计算固定列的宽度
     */

  }, {
    key: "staticStyle",
    get: function get() {
      var width = 0;

      if (this.staticSortColumn && this.staticSortColumn.length > 0) {
        width = this.staticSortColumn.reduce(function (total, current) {
          return total + current.width;
        }, 0);
      }

      return {
        overflow: "hidden",
        width: "".concat(width, "px")
      };
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
    // startDrag(option: { e: Event; row: H3.List.TitleOptions }) {

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
        this.initList();
      }

      this.dragOptions = null;
      document.body.removeEventListener("mouseup", this.dragMouseup, false);
      document.body.removeEventListener("mousemove", this.dragMousemove, false);
    }
    /**
     *  计算列表配置信息
     */

  }, {
    key: "countColumns",
    value: function countColumns(targetColumns) {
      var _this3 = this;

      var calculateCols = targetColumns.map(function (col) {
        var width = _this3.virtualDom({
          uid: col.uid,
          name: col.alias ? col.alias : col.name
        });

        return {
          key: col.uid,
          width: width,
          needAlias: col.needAlias,
          options: col.options,
          type: col.type
        };
      });

      if (this.orderNumber.checked) {
        var orderWidth = this.virtualDom({
          uid: orderKey,
          name: "序号"
        }, true);
        calculateCols.unshift({
          key: orderKey,
          width: orderWidth,
          needAlias: false,
          options: {},
          type: "string"
        });
      }

      return calculateCols;
    }
    /**
     * 格式化表头配置信息
     * @param  targetColumns  列
     * @param  isAdapt  是否自适应
     */

  }, {
    key: "calculateHead",
    value: function calculateHead() {
      var targetColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.visibleColumns;
      var isAdapt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var calculateCols = this.countColumns(targetColumns); // 生成冻结列时，不计算

      if (!isAdapt) {
        var realWidth = 0;

        if (calculateCols && calculateCols.length > 0) {
          realWidth = calculateCols.reduce(function (total, current) {
            return total + current.width;
          }, 0);
        }

        var lastCol = calculateCols[calculateCols.length - 1]; // 宽度不够时，最后一个补齐

        if (realWidth < this.wrapWidth && calculateCols.length > 1) {
          calculateCols[calculateCols.length - 1].width = lastCol.width + (this.wrapWidth - realWidth);
        }
      }

      return calculateCols;
    }
    /**
     * 计算渲染的表头信息
     */

  }, {
    key: "calcuateColumns",
    value: function calcuateColumns() {
      var targetColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.visibleColumns;
      var firstRow = [];
      var secondRow = []; // let childLeafNum: number = 1;

      targetColumns.forEach(function (col, index) {
        if (!col.relation) {
          firstRow.push({
            alias: col.alias,
            name: col.name,
            key: col.uid,
            allowDrag: index !== targetColumns.length - 1,
            isLeaf: !col.relation
          });
        } else {
          var childTitle = {
            alias: col.tableName,
            name: col.tableName,
            key: "".concat(col.tableId, "-").concat(index),
            isLeaf: !col.relation,
            allowDrag: false,
            leafNum: 1
          };

          if (index && col.tableId === targetColumns[index - 1].tableId) {
            firstRow[firstRow.length - 1].leafNum += 1;
          } else {
            firstRow.push(childTitle);
          }

          secondRow.push({
            alias: col.alias,
            name: col.name,
            key: col.uid,
            isLeaf: col.relation,
            allowDrag: index !== targetColumns.length - 1
          });
        }
      });

      if (this.orderNumber.checked) {
        firstRow.unshift({
          alias: this.orderNumber.orderName,
          name: this.orderNumber.orderName,
          key: orderKey,
          isLeaf: true,
          allowDrag: true
        });
      }

      return [firstRow, secondRow];
    }
    /**
     * 虚拟dom计算宽度
     * @param option
     * @param isSerialNum 是否是序号列
     * @param isOriginal 是否求原始值
     */

  }, {
    key: "virtualDom",
    value: function virtualDom(option) {
      var _this4 = this;

      var isSerialNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isOriginal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var dw = this.isPc ? 0 : 20;
      var width = minWidth + dw;
      var span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.fontSize = "12px";
      span.style.display = "inline-block";
      document.body.appendChild(span);
      span.innerText = option.name;
      var fieldWidth = span.clientWidth + 30 + dw;

      if (isSerialNum) {
        span.innerText = this.orderNumber.orderName || "序号";
        width = !isOriginal && this.mapColumnsWidth[option.uid] ? this.mapColumnsWidth[option.uid] : Math.max(span.clientWidth + 24 + dw, minWidth, this.averageWidth);
      } else {
        this.innerDatasource.forEach(function (row) {
          if (Array.isArray(row[option.uid])) {
            // 数组取最大的那个数据做处理
            var maxSpan = "";
            var arr = row[option.uid] && row[option.uid].length > 0 ? row[option.uid] : [];
            arr.forEach(function (element) {
              if (element && element !== "" && (0, _string.getStrLen)(element) > (0, _string.getStrLen)(maxSpan)) {
                maxSpan = element;
              }
            });
            span.innerText = maxSpan;
          } else {
            span.innerText = row[option.uid];
          }

          width = _this4.mapColumnsWidth[option.uid] ? _this4.mapColumnsWidth[option.uid] : Math.max(span.clientWidth + 30 + dw, width, minWidth, _this4.averageWidth, fieldWidth);
        });
      }

      document.body.removeChild(span);
      return width;
    }
    /**
     * 面板滚动
     * @param e 滚动event
     */

  }, {
    key: "scroll",
    value: function scroll(e) {
      this.headScrollLeft = e.x;
      this.headScrollTop = e.y;
      this.$emit("bodyScroll", {
        left: e.x,
        top: e.y
      });
    }
    /**
     * 初始化列表样式
     */

  }, {
    key: "initList",
    value: function initList() {
      this.innerDatasource = JSON.parse(JSON.stringify(this.datasource));
      this.dragLine = this.$refs["resize-line"];
      this.handleColumns();
      this.handleData();
      var listpane = this.$refs.listPane;
      var listHead = this.$refs.listHead;
      this.wrapWidth = listpane.clientWidth;

      if (listpane && listHead) {
        var realColNum = this.orderNumber.checked ? this.visibleColumns.length + 1 : this.visibleColumns.length; // 平均宽度

        this.averageWidth = listpane.clientWidth / realColNum || minWidth;
        this.height = listpane.clientHeight - listHead.$el.clientHeight;
      }

      this.sortColumn = this.calculateHead();

      if (this.freezeHead.column && this.freezeHead.columnNumber) {
        var staticNum = this.freezeHead.columnNumber;
        var targetColumns = this.visibleColumns.slice(0, staticNum);
        this.staticSortColumn = this.calculateHead(targetColumns, true);
      }

      if (this.$refs.scroll) {
        this.$refs.scroll.setScrollBar();
      }
    }
    /**
     * 列宽自适应
     * @param option
     */

  }, {
    key: "columnAdaptSize",
    value: function columnAdaptSize(option) {
      // columnAdaptSize(option: { e: Event; row: H3.List.TitleOptions }) {
      // let width: number = this.orderNumber.checked ? this.virtualDom(orderKey,true,true) : this.virtualDom(option.row.key,true,true);
      var tmpIndex = this.innerColumnsSetting.findIndex(function (item) {
        return item.key === option.row.key;
      });

      if (tmpIndex > -1) {
        this.innerColumnsSetting.splice(tmpIndex, 1);
        this.$emit("change-columns", this.innerColumnsSetting);
        this.initList();
      }
    }
    /**
     * 过滤不存在的字段
     */

  }, {
    key: "handleColumns",
    value: function handleColumns() {
      var _this5 = this;

      this.innerColumnsSetting = this.innerColumnsSetting.filter(function (item) {
        return item.key === orderKey || _this5.visibleColumns.find(function (field) {
          return field.uid === item.key;
        });
      });
      this.mapColumnsWidth = {};
      this.innerColumnsSetting.forEach(function (item) {
        _this5.mapColumnsWidth[item.key] = item.width;
      });
    }
    /**
     * 更新分页数据
     */

  }, {
    key: "changePage",
    value: function changePage(params) {
      this.pageParams = params;
      this.$emit("changePage", params);
    }
  }, {
    key: "getterTotal",
    value: function getterTotal(total) {
      return "\u5171 ".concat(total, " \u6761");
    }
    /**
     * 下钻
     */

  }, {
    key: "drillDown",
    value: function drillDown(data) {
      this.$emit("drill-down", data);
    }
    /**
     * 格式化数值格式
     */

  }, {
    key: "formateNumber",
    value: function formateNumber(value, NumberFormat) {
      var _this6 = this;

      if (!NumberFormat || !value || value === "") return value;
      var val = value;

      if (value instanceof Array) {
        // 如果是字表如果是数组则递归
        return value.map(function (d) {
          return d ? _this6.formateNumber(d, NumberFormat) : "";
        });
      } else {
        val = (0, _number.convertNumber)(value, NumberFormat);
      }

      return val;
    }
    /**
     * 格式化日期
     */

  }, {
    key: "formatDate",
    value: function formatDate(value, dateFormat) {
      var _this7 = this;

      if (!dateFormat || !value || value === "") return value;
      var date = value;

      if (value instanceof Array) {
        // 如果是字符串数组 那么递归返回
        return value.map(function (d) {
          return d ? _this7.formatDate(d, dateFormat) : "";
        });
      } else {
        date = (0, _date.convertDate)(value, dateFormat);
      }

      return date;
    }
    /**
     * 处理数据
     */

  }, {
    key: "handleData",
    value: function handleData() {
      var _this8 = this;

      var rules = this.columns.filter(function (i) {
        return i.options.numberFormat && i.type === "number" || i.options.dateFormat && i.type === "date" || i.needAlias;
      }).map(function (m) {
        return {
          uid: m.uid,
          numberFormat: m.type === "number" && m.options.numberFormat ? m.options.numberFormat : null,
          dateFormat: m.type === "date" && m.options.dateFormat ? m.options.dateFormat : null,
          needAlias: m.needAlias || false
        };
      });
      rules.forEach(function (rule) {
        _this8.innerDatasource.forEach(function (d, index) {
          if (rule.dateFormat) {
            _this8.innerDatasource[index][rule.uid] = _this8.formatDate(_this8.datasource[index][rule.uid], rule.dateFormat);
          }

          if (rule.numberFormat) {
            _this8.innerDatasource[index][rule.uid] = _this8.formateNumber(_this8.datasource[index][rule.uid], rule.numberFormat);
          }

          if (rule.needAlias) {
            if (_this8.datasource[index][rule.uid] instanceof Array) {
              _this8.innerDatasource[index][rule.uid] = _this8.datasource[index][rule.uid].map(function (m) {
                return (0, _alias.default)(rule.uid, m, _this8.alias);
              });
            } else {
              _this8.innerDatasource[index][rule.uid] = (0, _alias.default)(rule.uid, _this8.innerDatasource[index][rule.uid], _this8.alias);
            }
          }
        });
      });
    }
  }, {
    key: "created",
    value: function created() {
      this.isPc = !_browser.isMobile;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.initList();
    }
  }]);

  return ReportList;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportList.prototype, "datasource", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportList.prototype, "alias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportList.prototype, "columns", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportList.prototype, "columnsSetting", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportList.prototype, "staticColumn", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportList.prototype, "orderNumber", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportList.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportList.prototype, "total", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportList.prototype, "freezeHead", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportList.prototype, "fontColor", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ReportList.prototype, "allowDrag", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("freezeHead", {
  deep: true
})], ReportList.prototype, "onFreezeHeadChange", null);

__decorate([(0, _vuePropertyDecorator.Watch)("datasource", {
  deep: true
})], ReportList.prototype, "ondataChange", null);

ReportList = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-list",
  components: {
    H3Head: _head.default,
    H3Body: _body.default,
    H3Pagination: _pagination.default,
    H3Scroll: _scroll.default,
    Loading: _loading.default,
    AVueFragment: _vueFragment.Fragment
  }
})], ReportList);
var _default2 = ReportList;
exports.default = _default2;