"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _sort = _interopRequireDefault(require("../modules/sort"));

var _sortList = _interopRequireDefault(require("../modules/sort/sort-list"));

var _dashboard = require("../../service/dashboard");

var _export = _interopRequireWildcard(require("../../utils/export"));

var _vuexClass = require("vuex-class");

var _types = require("../../store/dashboard/types");

var _options = _interopRequireDefault(require("../../dist/options"));

var _chartType = require("../../enum/chart-type");

var _elementTools = require("../../enum/element-tools");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var ReportPro = (0, _vuexClass.namespace)("report");
var message = _options.default.message;

var DashboardElementToolsEventMixin = /*#__PURE__*/function (_Vue) {
  _inherits(DashboardElementToolsEventMixin, _Vue);

  var _super = _createSuper(DashboardElementToolsEventMixin);

  function DashboardElementToolsEventMixin() {
    var _this;

    _classCallCheck(this, DashboardElementToolsEventMixin);

    _this = _super.apply(this, arguments);
    _this.toolsEvent = {};
    _this.sortData = [];
    return _this;
  }
  /**
   * 全屏
   */


  _createClass(DashboardElementToolsEventMixin, [{
    key: _elementTools.ToolsBarType.FULLSCREEN,
    value: function value() {
      this.$emit("full-screen", {
        element: this.element,
        elementIndex: this.elementIndex,
        status: true
      });
    }
    /**
     * 取消全屏
     */

  }, {
    key: _elementTools.ToolsBarType.NARROW,
    value: function value() {
      this.$emit("narrow", {
        element: this.element,
        elementIndex: this.elementIndex,
        status: false
      });
    }
    /**
     * 取消联动
     */

  }, {
    key: _elementTools.ToolsBarType.LINKAGE,
    value: function value() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setChartLinkage({
                  chart: this.element,
                  mode: "clear"
                });

              case 2:
                res = _context.sent;

                if (res) {
                  message.success("联动已取消");
                } else {
                  message.warning("当前没有图表与本图表联动");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
    /**
     * 排序功能
     */

  }, {
    key: _elementTools.ToolsBarType.SORT,
    value: function value() {
      var self = this;

      var modalConfirm = _modal.default.confirm({
        class: this.element.type !== "list" ? "h3-report-confirm__modal" : "h3-report-confirm__modal-list",
        title: "排序规则设置",
        content: function content(h) {
          var receiveData = {
            chart: self.element,
            chartType: self.element.type
          };
          return h(self.element.type !== "list" ? _sort.default : _sortList.default, {
            props: receiveData,
            on: {
              changeData: function changeData(val) {
                if (self.element.type !== "list") {
                  val.forEach(function (item) {
                    delete item.sortType;
                  });
                }

                self.sortData = val;
              }
            }
          });
        },
        okText: "确定",
        cancelText: "取消",
        width: self.element.type !== "list" ? 482 : 610,
        destroyOnClose: true,
        centered: true,
        closable: true,
        confirmLoading: true,
        iconType: "noneIcon",
        onOk: function onOk(e) {
          if (self.element) {
            self.element.data.sort = self.sortData;
          }

          self.resizeChartView({
            chart: self.element,
            type: "data"
          });
          modalConfirm.destroy();
        }
      });
    }
    /**
     * 删除图表
     */

  }, {
    key: _elementTools.ToolsBarType.REMOVE,
    value: function value() {
      var _this2 = this;

      // 弹出确认框
      var self = this;

      var title = function title(h) {
        return h("div", {
          domProps: {
            innerHTML: "\u5220\u9664\uFF08".concat(self.element.title, "\uFF09\u56FE\u8868")
          },
          attrs: {
            title: "\u5220\u9664\uFF08".concat(self.element.title, "\uFF09\u56FE\u8868")
          },
          style: {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }
        });
      };

      var content = "删除图表后，将清空该图表的联动关系，确定需要删除吗？";

      if (this.element.type === "longText") {
        title = "删除文本";
        content = "确定需要删除吗？";
      } else if (this.element.type === "filterPicker") {
        title = "\u5220\u9664\uFF08".concat(self.element.title, "\uFF09\u7B5B\u9009\u5668");
        content = "确定需要删除吗？";
      }

      var modalConfirm = _modal.default.confirm({
        class: "h3-dashboard-item__modal",
        title: title,
        content: content,
        okText: "确定",
        cancelText: "取消",
        width: 610,
        destroyOnClose: true,
        centered: true,
        confirmLoading: true,
        iconType: "exclamation-circle-o",
        onOk: function onOk() {
          _this2.clearActiveChart();

          _this2.charts.splice(_this2.elementIndex, 1); // 清空清空图表关系


          self.clearChartRelation(self.element); // 清空筛选关系

          if (self.element.type === "filterPicker") {
            self.removeFilterPicker(self.element);
          } // 销毁


          modalConfirm.destroy();
        }
      });
    }
    /**
     * 导出Excel
     */

  }, {
    key: _elementTools.ToolsBarType.EXPORT,
    value: function value() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var oChart, sendChart, _sendChart$filter, res, url, uid;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.element.type === "list")) {
                  _context2.next = 10;
                  break;
                }

                oChart = JSON.parse(JSON.stringify(this.element));
                sendChart = {
                  title: oChart.title,
                  authorization: oChart.authorization,
                  dataSourceId: oChart.dataSourceId,
                  useType: oChart.useType,
                  type: oChart.type,
                  dimension: oChart.data.dimension,
                  groupDimension: oChart.data.groupDimension,
                  metric: oChart.data.metric,
                  filter: oChart.data.filter,
                  sort: oChart.data.sort,
                  limit: oChart.data.limit,
                  pageSize: oChart.pageSize,
                  pageIndex: oChart.pageIndex
                };

                if (sendChart.filter) {
                  sendChart.filter = (_sendChart$filter = sendChart.filter).concat.apply(_sendChart$filter, [oChart.linkageFilter || []].concat(_toConsumableArray(Object.values(oChart.filterPicker || {}))));
                  sendChart.filter.forEach(function (filter) {
                    filter.text = filter.text.map(function (item) {
                      return item instanceof Object ? item.value : item;
                    });
                  });
                }

                _context2.next = 6;
                return _dashboard.dashboardApi.dataExport(sendChart);

              case 6:
                res = _context2.sent;

                if (res) {
                  // let blob = new Blob(res, {type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}); // 得到 blob
                  // res.type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                  url = URL.createObjectURL(res.slice(0, res.size, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
                  (0, _export.downloadFile)(url, "".concat(sendChart.title, ".xlsx"));
                }

                _context2.next = 13;
                break;

              case 10:
                uid = "";

                if (this.element.uid.match("full-")) {
                  uid = this.element.uid.replace("full-", "");
                } else {
                  uid = this.element.uid;
                }

                (0, _export.default)(this.tableExportData[uid]);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * 编辑
     */

  }, {
    key: _elementTools.ToolsBarType.EDIT,
    value: function value() {
      if (this.element.type === _chartType.ElementType.FILTERPICKER) {
        this.$emit("change-picker", true);
      } else {
        var nChart = _extends({}, this.element, {
          edit: !this.element.edit
        });

        this.$set(this.charts, this.elementIndex, nChart);
      }
    }
    /**
     * 图表刷新
     */

  }, {
    key: _elementTools.ToolsBarType.REFRESH,
    value: function value() {
      this.resizeChartView({
        chart: this.element,
        type: "data"
      });
    }
  }]);

  return DashboardElementToolsEventMixin;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], DashboardElementToolsEventMixin.prototype, "element", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: -1
})], DashboardElementToolsEventMixin.prototype, "elementIndex", void 0);

__decorate([ReportPro.State("charts")], DashboardElementToolsEventMixin.prototype, "charts", void 0);

__decorate([ReportPro.State("tableExportData")], DashboardElementToolsEventMixin.prototype, "tableExportData", void 0);

__decorate([ReportPro.Action(_types.ReportAction.SETCHARTLINKAGE)], DashboardElementToolsEventMixin.prototype, "setChartLinkage", void 0);

__decorate([ReportPro.Action(_types.ReportAction.REMOVEFILTERPICKER)], DashboardElementToolsEventMixin.prototype, "removeFilterPicker", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.CLEARACTIVECHART)], DashboardElementToolsEventMixin.prototype, "clearActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], DashboardElementToolsEventMixin.prototype, "resizeChartView", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.CLEARCHARTRELATION)], DashboardElementToolsEventMixin.prototype, "clearChartRelation", void 0);

DashboardElementToolsEventMixin = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-dashboard-element-tools-event-mixins"
})], DashboardElementToolsEventMixin);
var _default = DashboardElementToolsEventMixin;
exports.default = _default;