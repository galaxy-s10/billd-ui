"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _index = require("../../service/dashboard/index");

var _types = require("./types");

var _global = _interopRequireDefault(require("../../instance/modules/global"));

var _help = require("./help");

var _uid = require("../../utils/uid");

var _date = require("../../utils/date");

var _chartType = require("../../enum/chart-type");

var _reportState = require("../../enum/report-state");

var _help2 = require("../utils/help");

var _actions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var loadReportList = {};
var actions = (_actions = {}, _defineProperty(_actions, _types.ReportAction.SAVEREPORT, function (_ref) {
  var commit = _ref.commit,
      dispatch = _ref.dispatch,
      state = _ref.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var charts, filterPickers, report;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            charts = [];
            filterPickers = [];

            if (!state.title) {
              state.title = "未命名的仪表盘";
            }

            state.charts.forEach(function (chart) {
              if (chart.type === _chartType.ElementType.FILTERPICKER) {
                filterPickers.push(chart);
              }

              chart.handleActive = false;
              delete chart.linkageFilter;
              delete chart.filterPicker; // 明细表的分页信息 不保存
              // delete chart.pageSize;

              delete chart.pageIndex;
              delete chart.mapSource;
              if (chart.edit) chart.edit = false;
              charts.push({
                uuid: chart.uid,
                content: JSON.stringify(chart),
                corpId: state.corpId,
                objectId: state.objectId
              });
            });
            report = {
              objectId: state.objectId,
              title: state.title,
              attributes: "{}",
              charts: charts,
              global: JSON.stringify(state.global)
            };
            filterPickers.forEach(function (filterPicker) {
              dispatch(_types.ReportAction.SETFILTERPICKER, {
                filterPicker: filterPicker,
                isRefresh: false
              });
            });
            return _context.abrupt("return", _index.dashboardApi.saveReport(report));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}), _defineProperty(_actions, _types.ReportAction.ADDELEMENT, function (_ref2, _ref3) {
  var commit = _ref2.commit,
      state = _ref2.state;
  var elementType = _ref3.elementType,
      oldElement = _ref3.oldElement;
  return (0, _help2.registerElement)(elementType, oldElement);
}), _defineProperty(_actions, _types.ReportAction.GETREPORT, function (_ref4, _ref5) {
  var commit = _ref4.commit,
      dispatch = _ref4.dispatch,
      state = _ref4.state;
  var corpId = _ref5.corpId,
      reportId = _ref5.reportId,
      type = _ref5.type;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!reportId) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              loadReportList[reportId] = loadReportList[reportId] || [];

              _index.dashboardApi.setConfig({
                corpId: corpId
              });

              _index.dashboardApi.getReport(corpId, reportId).then(function (res) {
                var _handleReportResponse = (0, _help2.handleReportResponse)(res),
                    title = _handleReportResponse.title,
                    objectId = _handleReportResponse.objectId,
                    elements = _handleReportResponse.elements,
                    reqGlobal = _handleReportResponse.reqGlobal,
                    schemaCodes = _handleReportResponse.schemaCodes,
                    filterPickers = _handleReportResponse.filterPickers;

                var _InitGlobal = (0, _global.default)(JSON.parse(reqGlobal) || JSON.parse(JSON.stringify(state.global))),
                    global = _InitGlobal.global,
                    modules = _InitGlobal.modules;

                elements.forEach(function (element) {
                  state.chartViewStatus[element.uid] = state.chartViewStatus[element.uid] || {};
                });
                filterPickers.forEach(function (filterPicker) {
                  dispatch(_types.ReportAction.SETFILTERPICKER, {
                    filterPicker: filterPicker,
                    charts: elements
                  });
                });
                state.globalModules = modules;
                state.global = global;
                state.reports[reportId] = {
                  elements: elements,
                  global: global
                }; // 处理请求之后的⌚️

                // 处理请求之后的⌚️
                var handleLoaded = function handleLoaded() {
                  var _state$charts;

                  //判断当前加载的报表配置信息是否被多个单例图表引用，如果引用调用回调函数执行方法
                  while (loadReportList[reportId] && loadReportList[reportId].length) {
                    loadReportList[reportId].shift()(state.reports[reportId]);
                  }

                  delete loadReportList[reportId];
                  (0, _help2.handleChartFieldDefaultValues)(elements, state.dataSources);
                  state.reports[reportId] = {
                    elements: elements,
                    global: global
                  };
                  state.title = title;
                  state.objectId = objectId;

                  (_state$charts = state.charts).push.apply(_state$charts, _toConsumableArray(elements));

                  resolve(state.reports[reportId]);
                };

                if (Object.values(schemaCodes).length) {
                  dispatch(_types.ReportAction.LOADDATASOURCE, Object.values(schemaCodes)).then(function () {
                    handleLoaded();
                  }).catch(function () {
                    reject(false);
                  });
                } else {
                  handleLoaded();
                }
              }).catch(function (res) {
                console.log("catch", res, loadReportList[reportId]);

                if (loadReportList[reportId]) {
                  loadReportList[reportId] = null;
                }

                reject(res);
              });
            }));

          case 4:
            state.title = "未命名的仪表盘";
            state.objectId = "u".concat((0, _uid.guid)()).replace(/-/gi, "");
            return _context2.abrupt("return", null);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETREPORTDETAIL, function (_ref6, _ref7) {
  var commit = _ref6.commit,
      dispatch = _ref6.dispatch,
      state = _ref6.state;
  var corpId = _ref7.corpId,
      reportId = _ref7.reportId,
      _ref7$type = _ref7.type,
      type = _ref7$type === void 0 ? _reportState.ReportState.DESIGN : _ref7$type;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var res;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!state.reports[reportId]) {
              _context3.next = 4;
              break;
            }

            res = state.reports[reportId];
            _context3.next = 9;
            break;

          case 4:
            if (!loadReportList[reportId]) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              loadReportList[reportId].push(resolve);
            }));

          case 8:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              dispatch(_types.ReportAction.GETREPORT, {
                corpId: corpId,
                reportId: reportId,
                type: type
              }).then(function (result) {
                resolve(result);
              }).catch(function () {
                resolve(false);
              });
            }));

          case 9:
            return _context3.abrupt("return", res);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETDATASOURCELIST, function (_ref8) {
  var dispatch = _ref8.dispatch,
      state = _ref8.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (state.dataSourceList) {
              _context4.next = 3;
              break;
            }

            _context4.next = 3;
            return _index.dashboardApi.getDataSourceList().then(function (res) {
              state.dataSourceList = res;
            }).catch(function () {
              state.dataSourceList = [];
            });

          case 3:
            return _context4.abrupt("return", state.dataSourceList);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETDATASOURCE, function (_ref9, chart) {
  var dispatch = _ref9.dispatch,
      state = _ref9.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!chart.dataSourceId) {
              _context5.next = 5;
              break;
            }

            if (state.dataSources[chart.dataSourceId]) {
              _context5.next = 4;
              break;
            }

            _context5.next = 4;
            return dispatch(_types.ReportAction.LOADDATASOURCE, [{
              dataSourceId: chart.dataSourceId,
              useType: chart.useType
            }]);

          case 4:
            return _context5.abrupt("return", state.dataSources[chart.dataSourceId]);

          case 5:
            return _context5.abrupt("return", null);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}), _defineProperty(_actions, _types.ReportAction.LOADDATASOURCE, function (_ref10, dataSourceIds) {
  var dispatch = _ref10.dispatch,
      state = _ref10.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              _index.dashboardApi.getDataSource(dataSourceIds).then(function (res) {
                res.forEach(function (schema) {
                  state.dataSources[schema.schema.dataSourceId] = {
                    dataSourceId: schema.schema.dataSourceId,
                    displayName: schema.schema.displayName,
                    properties: (0, _help.handleSchemaModal)(schema)
                  };
                });
                resolve(true);
              }).catch(function (res) {
                reject(res.code);
              });
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}), _defineProperty(_actions, _types.ReportAction.SETCHARTLINKAGE, function (_ref11, _ref12) {
  var commit = _ref11.commit,
      dispatch = _ref11.dispatch,
      state = _ref11.state;
  var chart = _ref12.chart,
      _ref12$filters = _ref12.filters,
      filters = _ref12$filters === void 0 ? [] : _ref12$filters,
      _ref12$mode = _ref12.mode,
      mode = _ref12$mode === void 0 ? "linkage" : _ref12$mode;
  var res = false;

  if (mode === "linkage") {
    state.linkage[chart.uid] = "filters";
    res = true;
  } else {
    if (state.linkage[chart.uid]) {
      delete state.linkage[chart.uid];
      res = true;
    }
  }

  filters.forEach(function (filter) {
    if (filter.field.type == "date") {
      filter.text = (0, _date.dateCNFormat)(filter.text[0]);
      filter.formula = "Range";
    }
  });

  if (res) {
    state.charts.forEach(function (linkageChart) {
      if (chart.styles.linkage.includes(linkageChart.uid)) {
        linkageChart.linkageFilter = filters;
        commit(_types.ReportMutation.RESIZECHARTVIEW, {
          chart: linkageChart,
          type: "data"
        });
      }
    });
  }

  return res || false;
}), _defineProperty(_actions, _types.ReportAction.SETFILTERPICKER, function (_ref13, _ref14) {
  var commit = _ref13.commit,
      state = _ref13.state;
  var filterPicker = _ref14.filterPicker,
      _ref14$charts = _ref14.charts,
      charts = _ref14$charts === void 0 ? state.charts : _ref14$charts,
      _ref14$isRefresh = _ref14.isRefresh,
      isRefresh = _ref14$isRefresh === void 0 ? true : _ref14$isRefresh;
  var filters = {}; // 获取每个源的筛选字段

  filterPicker.dataSources.forEach(function (filterDataSource) {
    if (filterDataSource.field) {
      filters[filterDataSource.dataSourceId] = filters[filterDataSource.dataSourceId] || [];

      if (["None", "NotNone"].includes(filterPicker.formula) || filterPicker.formula === "Range" && filterPicker.text[0] && filterPicker.text[1] || filterPicker.formula !== "Range" && filterPicker.text[0]) {
        filters[filterDataSource.dataSourceId].push({
          field: filterDataSource.field,
          formula: filterPicker.formula,
          text: filterPicker.text[0] && filterPicker.text[0] instanceof Object ? filterPicker.text.map(function (item) {
            return item.value;
          }) : filterPicker.text
        });
      }
    }
  }); // 设置每个图表对应源的过滤字段

  filterPicker.chartIds.forEach(function (chartId) {
    var chart = charts.find(function (item) {
      return item.uid === chartId;
    });

    if (chart && !chart.filterPicker) {
      chart.filterPicker = {};
    }

    if (chart && chart.filterPicker) {
      chart.filterPicker[filterPicker.uid] = chart.dataSourceId ? filters[chart.dataSourceId] ? filters[chart.dataSourceId] : [] : [];

      if (isRefresh) {
        commit(_types.ReportMutation.RESIZECHARTVIEW, {
          chart: chart,
          type: "data"
        });
      }
    }
  });
}), _defineProperty(_actions, _types.ReportAction.REMOVEFILTERPICKER, function (_ref15, filterPicker) {
  var commit = _ref15.commit,
      state = _ref15.state;
  filterPicker.chartIds.forEach(function (chartId) {
    var chart = state.charts.find(function (item) {
      return item.uid === chartId;
    });

    if (chart && chart.filterPicker) {
      if (chart.filterPicker[filterPicker.uid] && chart.filterPicker[filterPicker.uid].length) {
        chart.filterPicker[filterPicker.uid] = [];
        commit(_types.ReportMutation.RESIZECHARTVIEW, {
          chart: chart,
          type: "data"
        });
      }
    }
  });
}), _actions);
var _default = actions;
exports.default = _default;