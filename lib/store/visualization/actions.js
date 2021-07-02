"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _visualization = require("../../service/visualization");

var _types = require("./types");

var _global = _interopRequireDefault(require("../../instance/modules/global"));

var _instance = _interopRequireDefault(require("../../instance/element/instance"));

var _help = require("./help");

var _visualization2 = _interopRequireDefault(require("../../instance/element-modules/visualization"));

var _actions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var actions = (_actions = {}, _defineProperty(_actions, _types.ReportAction.GETREPORT, function (_ref, schemaCode) {
  var commit = _ref.commit,
      dispatch = _ref.dispatch,
      state = _ref.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var res, report, global;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state.schemaCode = schemaCode;
            _context.next = 3;
            return (0, _visualization.getReport)(schemaCode);

          case 3:
            res = _context.sent;

            if (res) {
              if (res.ReturnData && res.ReturnData.ReportStyle) {
                report = res.ReturnData.ReportStyle;
                state.charts = report.charts;
                state.global = report.global;
                state.objectId = report.objectId;
                state.charts = state.charts || [];
              }

              state.charts.forEach(function (chartStr, index) {
                var chart;

                if (typeof chartStr === "string") {
                  chart = JSON.parse(chartStr);
                } else {
                  chart = chartStr;
                }

                state.charts[index] = chart;
                (0, _visualization2.default)(chart);
              });
              state.charts.sort(function (prvChart, nextCHart) {
                if (prvChart.i < nextCHart.i) {
                  return 1;
                }

                if (prvChart.i > nextCHart.i) {
                  return -1;
                }

                return 0;
              });

              if (typeof state.global === "string") {
                state.global = JSON.parse(state.global);
              }

              global = (0, _global.default)(state.global);
              state.global = global.global;
              state.globalModules = global.modules;
            }

            _context.next = 7;
            return dispatch(_types.ReportAction.GETSCHEMA, schemaCode);

          case 7:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              if (res) {
                resolve();
              } else {
                reject();
              }
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}), _defineProperty(_actions, _types.ReportAction.ADDCHART, function (_ref2, chartType) {
  var commit = _ref2.commit,
      state = _ref2.state;
  var chart = new _instance.default(chartType);
  state.chartsData[chart.uid] = [];
  (0, _visualization2.default)(chart);
  return chart;
}), _defineProperty(_actions, _types.ReportAction.GETSCHEMA, function (_ref3, schemaCode) {
  var commit = _ref3.commit,
      state = _ref3.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var res, schemaModel;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _visualization.getSchemaModel)(schemaCode);

          case 2:
            res = _context2.sent;

            if (res) {
              state.schemas = [];
              schemaModel = res.ReturnData;
              state.schemas = (0, _help.handleSchemaModal)(schemaModel);
            }

            return _context2.abrupt("return", state.schemas);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}), _defineProperty(_actions, _types.ReportAction.LOADCHARTDATA, function (_ref4, _ref5) {
  var commit = _ref4.commit,
      state = _ref4.state;
  var chart = _ref5.chart,
      mode = _ref5.mode;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var key, tmpChart, res;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            key = mode ? "edit".concat(chart.uid) : chart.uid;
            tmpChart = null;
            tmpChart = JSON.parse(JSON.stringify(chart));
            Object.keys(tmpChart.data).forEach(function (moduleKey) {
              if (tmpChart) {
                if (tmpChart.data[moduleKey] instanceof Array) {
                  tmpChart.data[moduleKey] = tmpChart.data[moduleKey].filter(function (item) {
                    return item.type;
                  });
                } else if (!tmpChart.data[moduleKey]) {
                  delete tmpChart.data[moduleKey];
                }
              }
            });
            tmpChart.data.filter = state.globalFilters;
            _context3.next = 7;
            return (0, _visualization.loadChartData)(tmpChart);

          case 7:
            res = _context3.sent;
            return _context3.abrupt("return", new Promise(function (resolve) {
              if (res) {
                if (![404, 500, 600].includes(res.StatusCode)) {
                  state.chartsData[key] = res.ReturnData.Pivot || res.ReturnData.Series;
                  state.chartsAlias[key] = res.ReturnData.Alias;
                  resolve({
                    chartData: state.chartsData[key],
                    chartAlias: state.chartsAlias[key]
                  });
                } else {
                  resolve(res.StatusCode);
                }
              } else {
                resolve(false);
              }

              resolve(false);
            }));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETCHARTDATA, function (_ref6, _ref7) {
  var dispatch = _ref6.dispatch,
      state = _ref6.state;
  var chart = _ref7.chart,
      mode = _ref7.mode;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    var chartData, chartAlias, res;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            chartData = state.chartsData["edit".concat(chart.uid)] || state.chartsData[chart.uid];
            chartAlias = state.chartsAlias["edit".concat(chart.uid)] || state.chartsAlias[chart.uid];

            if (chartData) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return dispatch(_types.ReportAction.LOADCHARTDATA, {
              chart: chart,
              mode: mode
            });

          case 5:
            res = _context4.sent;
            return _context4.abrupt("return", new Promise(function (resolve) {
              if (res instanceof Object) {
                resolve({
                  chartData: res.chartData,
                  chartAlias: res.chartAlias
                });
              } else if (typeof res === "number") {
                resolve(res);
              } else {
                resolve(false);
              }
            }));

          case 7:
            return _context4.abrupt("return", {
              chartData: chartData,
              chartAlias: chartAlias
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}), _defineProperty(_actions, _types.ReportAction.SAVECHARTS, function (_ref8, charts) {
  var state = _ref8.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    var result, report, res;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            result = false;
            if (!charts) charts = state.charts;
            report = {
              charts: charts,
              objectId: state.objectId,
              global: state.global
            };
            _context5.next = 5;
            return (0, _visualization.saveReport)(report);

          case 5:
            res = _context5.sent;

            if (res) {
              if (res.ReturnData.ObjectId) {
                state.objectId = res.ReturnData.ObjectId;
                result = true;
              }
            }

            return _context5.abrupt("return", result);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}), _defineProperty(_actions, _types.ReportAction.SAVECHART, function (_ref9, chart) {
  var dispatch = _ref9.dispatch,
      state = _ref9.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    var oldCharts, activeChartIndex, res;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            oldCharts = JSON.parse(JSON.stringify(state.charts));
            activeChartIndex = state.charts.findIndex(function (oldChart) {
              return oldChart.uid === chart.uid;
            });

            if (activeChartIndex > -1) {
              state.charts[activeChartIndex] = chart;
            } else {
              state.charts.unshift(chart);
              activeChartIndex = 0;
            }

            _context6.next = 5;
            return dispatch(_types.ReportAction.SAVECHARTS, state.charts);

          case 5:
            res = _context6.sent;

            if (!res) {
              state.charts = oldCharts;
            }

            return _context6.abrupt("return", res);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}), _defineProperty(_actions, _types.ReportAction.REMOVECHART, function (_ref10, chart) {
  var dispatch = _ref10.dispatch,
      state = _ref10.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee7() {
    var chartIndex, res;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            chartIndex = state.charts.findIndex(function (sChart) {
              return sChart.uid === chart.uid;
            });

            if (!(chartIndex > -1)) {
              _context7.next = 10;
              break;
            }

            _context7.next = 4;
            return (0, _visualization.removeChart)(chart);

          case 4:
            res = _context7.sent;

            if (!res) {
              _context7.next = 9;
              break;
            }

            state.charts.splice(chartIndex, 1);
            _context7.next = 10;
            break;

          case 9:
            return _context7.abrupt("return", false);

          case 10:
            return _context7.abrupt("return", true);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
}), _actions);
var _default = actions;
exports.default = _default;