"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vue = _interopRequireDefault(require("vue"));

var _index = require("../../service/analysis/index");

var _help = require("./help");

var _types = require("./types");

var _moduleState = require("../../enum/module-state");

var _apiType = require("../../service/analysis/api-type");

var _global = _interopRequireDefault(require("../../instance/modules/global"));

var _createChart = require("../../instance/element-modules/analysis/create-chart");

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

var actions = (_actions = {}, _defineProperty(_actions, _types.ReportAction.GETREPORT, function (_ref, shareStatus) {
  var commit = _ref.commit,
      dispatch = _ref.dispatch,
      state = _ref.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _index.analysisApi.getReportInfo(state.dataSourceId, state.ownerId, shareStatus).then(function (res) {
                var _state$charts;

                commit(_types.ReportMutation.RESETREPORT);

                var _handleAnalysisRespon = (0, _help.handleAnalysisResponse)(res),
                    objectId = _handleAnalysisRespon.objectId,
                    elements = _handleAnalysisRespon.elements,
                    reqGlobal = _handleAnalysisRespon.reqGlobal,
                    share = _handleAnalysisRespon.share,
                    chartsInfo = _handleAnalysisRespon.chartsInfo;

                var global = state.global;

                if (reqGlobal) {
                  var g = (0, _global.default)(JSON.parse(reqGlobal));
                  g.global ? global = g.global : null;
                }

                state.chartsInfo = chartsInfo;
                state.objectId = objectId;

                (_state$charts = state.charts).push.apply(_state$charts, _toConsumableArray(elements)); // 图表排序


                // 图表排序
                state.charts.sort(function (prvChart, nextCHart) {
                  if (prvChart.i < nextCHart.i) {
                    return 1;
                  }

                  if (prvChart.i > nextCHart.i) {
                    return -1;
                  }

                  return 0;
                });
                state.activeTab = shareStatus === 0 || shareStatus ? shareStatus : share === 0 || share ? share : _moduleState.TabState.PUBLIC;
                state.global = global;
                dispatch(_types.ReportAction.LOADDATASOURCE, state.dataSourceId).then(function () {
                  resolve(res);
                });
              }).catch(function (res) {
                reject(res);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETOBJECTID, function (_ref2, shareStatus) {
  var commit = _ref2.commit,
      dispatch = _ref2.dispatch,
      state = _ref2.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              _index.analysisApi.getReportInfo(state.dataSourceId, state.ownerId, shareStatus).then(function (res) {
                state.objectId = res.objectId;
                resolve(res);
              }).catch(function (res) {
                reject(res);
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETPERSONALREPORT, function (_ref3, dataSourceId) {
  var commit = _ref3.commit,
      dispatch = _ref3.dispatch,
      state = _ref3.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETPUBLICREPORT, function (_ref4, dataSourceId) {
  var commit = _ref4.commit,
      dispatch = _ref4.dispatch,
      state = _ref4.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}), _defineProperty(_actions, _types.ReportAction.LOADDATASOURCE, function (_ref5, dataSourceId) {
  var commit = _ref5.commit,
      dispatch = _ref5.dispatch,
      state = _ref5.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    var id;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = dataSourceId || state.dataSourceId;
            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              _index.analysisApi.getDataSource(id).then(function (res) {
                res.forEach(function (schema) {
                  state.dataSources[schema.schema.dataSourceId] = {
                    dataSourceId: schema.schema.dataSourceId,
                    displayName: schema.schema.displayName,
                    properties: (0, _help.handleSchemaModal)(schema)
                  }; // 匹配字段的新名称

                  // 匹配字段的新名称
                  (0, _help.handleChartFieldDefaultValues)(state.charts, state.dataSources); // 如果有全局筛选条件没有设置的 就重新计算全局筛选条件

                  // 如果有全局筛选条件没有设置的 就重新计算全局筛选条件
                  if (state.originalFilters && state.originalFilters.length > 0) {
                    commit(_types.ReportMutation.SETGLOBALFILTER, state.originalFilters);
                    state.originalFilters = [];
                  }

                  state.globalFilters = (0, _help.handleGlobalFilter)(state.globalFilters, state.dataSources[state.dataSourceId]);
                });
                resolve(true);
              }).catch(function (res) {
                reject(res.code);
              });
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETCHARTDATA, function (_ref6, chart) {
  var dispatch = _ref6.dispatch,
      state = _ref6.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!chart.dataSourceId) {
              _context6.next = 5;
              break;
            }

            if (state.dataSources[chart.dataSourceId]) {
              _context6.next = 4;
              break;
            }

            _context6.next = 4;
            return dispatch(_types.ReportAction.LOADDATASOURCE, [{
              dataSourceId: chart.dataSourceId,
              useType: chart.useType
            }]);

          case 4:
            return _context6.abrupt("return", state.dataSources[chart.dataSourceId]);

          case 5:
            return _context6.abrupt("return", null);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}), _defineProperty(_actions, _types.ReportAction.SAVECHARTS, function (_ref7, charts) {
  var state = _ref7.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee7() {
    var postCharts, report;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // 可以吧当前激活的报表的uid存储，如果没有guid那么就在第一次保存的时候生成
            // 一个模块的新建图表的时候第一次需要调取保存所有图表的接口并生成guid作为报表id 并且作为图表的父id
            postCharts = [];
            charts.forEach(function (chart) {
              postCharts.push({
                content: chart,
                corpId: state.corpId,
                objectId: chart.uid,
                parentObjectId: state.objectId
              });
            });
            report = {
              attributes: "",
              charts: postCharts,
              corpId: state.corpId,
              dataSourceId: state.dataSourceId,
              global: JSON.stringify(state.global),
              objectId: state.objectId,
              ownerId: state.ownerId,
              shareStatus: state.activeTab,
              updateUser: state.ownerId,
              updateUserName: state.config.updateUserName ? state.config.updateUserName : state.ownerId
            };
            return _context7.abrupt("return", new Promise(function (resolve, reject) {
              _index.analysisApi.saveCharts(report).then(function (res) {
                resolve(res);
              }).catch(function (res) {
                reject(res);
              });
            }));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
}), _defineProperty(_actions, _types.ReportAction.SAVECHART, function (_ref8, chart) {
  var dispatch = _ref8.dispatch,
      state = _ref8.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee8() {
    var saveChartData;
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            // 第一次保存的时候如果报表没有datasourceID 就吧当前的id
            if (!chart.dataSourceId) {
              chart.dataSourceId = state.dataSourceId;
            }

            console.log(chart);
            saveChartData = {
              content: chart,
              corpId: state.corpId,
              dataSourceId: state.dataSourceId,
              objectId: chart.uid,
              parentObjectId: state.objectId,
              updateUser: state.ownerId,
              updateUserName: state.config.updateUserName ? state.config.updateUserName : state.ownerId // 从氚云拿

            };
            return _context8.abrupt("return", new Promise(function (resolve, reject) {
              _index.analysisApi.saveChart(saveChartData).then(function (res) {
                // 保存单个图表以后更新备份图表配置
                state.backupActiveChart = chart;
                resolve(res);
              }).catch(function (res) {
                reject(res);
              });
            }));

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
}), _defineProperty(_actions, _types.ReportAction.REMOVECHART, function (_ref9, objectId) {
  var dispatch = _ref9.dispatch,
      state = _ref9.state;

  if (typeof objectId == "string") {
    var chartIndex = state.charts.findIndex(function (chart) {
      return chart.uid === objectId;
    });

    if (chartIndex > -1) {
      return new Promise(function (resolve, reject) {
        _index.analysisApi[_apiType.AnalysisApis.REMOVECHART](objectId).then(function (res) {
          if (res) {
            // 同步图表个人信息,delete监听不到，多做了步设置
            _vue.default.set(state.chartsInfo, state.charts[chartIndex].uid, {});

            delete state.chartsInfo[state.charts[chartIndex].uid];
            state.charts.splice(chartIndex, 1);
            resolve(res);
          } else {
            reject(false);
          }
        }).catch(function (res) {
          reject(res);
        });
      });
    }
  } else if (objectId.length) {
    return new Promise(function (resolve, reject) {
      // todo
      _index.analysisApi[_apiType.AnalysisApis.REMOVECHARTS](objectId).then(function (res) {
        resolve(res);
      }).catch(function (res) {
        reject(res);
      });
    });
  }
}), _defineProperty(_actions, _types.ReportAction.ADDCHART, function (_ref10, _ref11) {
  var commit = _ref10.commit,
      state = _ref10.state;
  var elementType = _ref11.elementType,
      oldElement = _ref11.oldElement;
  console.log("----", elementType);
  return (0, _createChart.createNewChart)(elementType, oldElement);
}), _defineProperty(_actions, _types.ReportAction.GETCHARTSLENGTH, function (_ref12) {
  var commit = _ref12.commit,
      state = _ref12.state;
  return new Promise(function (resolve, reject) {
    _index.analysisApi[_apiType.AnalysisApis.GETCHARTSLENGTH](state.dataSourceId, state.ownerId).then(function (res) {
      resolve(res);
    }).catch(function (res) {
      reject(res);
    });
  });
}), _defineProperty(_actions, _types.ReportAction.SAVEOWNERCHART, function (_ref13, _ref14) {
  var commit = _ref13.commit,
      state = _ref13.state;
  var chart = _ref14.chart,
      content = _ref14.content;
  var data = {
    chartId: chart.uid,
    content: content,
    corpId: state.corpId,
    ownerId: state.ownerId
  }; // 同步图表个人信息

  if (state.chartsInfo[chart.uid]) {
    state.chartsInfo[chart.uid].content = content;
  }

  return new Promise(function (resolve, reject) {
    _index.analysisApi[_apiType.AnalysisApis.SAVEOWNERCHART](data).then(function (res) {
      resolve(res);
    }).catch(function (res) {
      reject(res);
    });
  });
}), _defineProperty(_actions, _types.ReportAction.UPDATECHART, function (_ref15, _ref16) {
  var commit = _ref15.commit,
      state = _ref15.state;
  var elementType = _ref16.elementType,
      oldElement = _ref16.oldElement;
  var chart = (0, _createChart.createNewChart)(elementType, oldElement);
  state.activeChart = chart;
  return chart;
}), _actions);
var _default = actions;
exports.default = _default;