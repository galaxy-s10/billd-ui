"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ = require(".");

var _types = require("./types");

var _dashboard = _interopRequireDefault(require("../../instance/element-modules/dashboard"));

var _index = require("../../service/dashboard/index");

var _chartType = require("../../enum/chart-type");

var _mutations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mutations = (_mutations = {}, _defineProperty(_mutations, _types.ReportMutation.INITREPORT, function (state) {
  _extends(state, new _.ReportProState());
}), _defineProperty(_mutations, _types.ReportMutation.SETREPORTTITLE, function (state, title) {
  state.title = title;
}), _defineProperty(_mutations, _types.ReportMutation.SETREPORTTOP, function (state, top) {
  state.reportTop = top;
}), _defineProperty(_mutations, _types.ReportMutation.SETCHARTS, function (state, charts) {
  state.charts = charts;
}), _defineProperty(_mutations, _types.ReportMutation.SETGLOBAL, function (state, global) {
  state.global = global;
}), _defineProperty(_mutations, _types.ReportMutation.SETOBJECTID, function (state, objectId) {
  state.objectId = objectId;
}), _defineProperty(_mutations, _types.ReportMutation.SETTITLE, function (state, title) {
  state.title = title;
}), _defineProperty(_mutations, _types.ReportMutation.DELETEMETRIC, function (state, activeChart) {
  // 删除指标，需要更新警戒线配置属性
  state.activeChart = activeChart;
  var warningLine = state.activeChart.styles.warningLine;
  var metric;

  if (state.activeChart && warningLine) {
    warningLine.forEach(function (item, index) {
      // 判断删除最后一个指标的情况
      if (state.activeChart.data.metric.length > 0) {
        metric = state.activeChart.data.metric.find(function (oMetric) {
          if (item.field === oMetric.uid) return true;
          return false;
        });

        if (metric === undefined) {
          delete state.activeChart.styles.warningLine[index];
        }
      } else {
        delete state.activeChart.styles.warningLine[index];
      }
    }); // 过滤underfined值

    state.activeChart.styles.warningLine = state.activeChart.styles.warningLine.filter(function (item) {
      return item !== undefined;
    });
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETACTIVECHART, function (state, activeChart) {
  state.activeChart = activeChart;
  state.activeModules = !activeChart || (0, _dashboard.default)(activeChart);
  return state.activeChart;
}), _defineProperty(_mutations, _types.ReportMutation.CLEARACTIVECHART, function (state) {
  state.activeChart = null;
}), _defineProperty(_mutations, _types.ReportMutation.HANDLESORT, function (state, chart) {
  if (state.activeChart && state.activeChart.data.sort && state.activeChart.data.sort.length) {
    var sortArr = state.activeChart.data.sort;
    var objArr = [];

    if (state.activeChart.data.dimension) {
      objArr = objArr.concat(state.activeChart.data.dimension);
    }

    if (state.activeChart.data.groupDimension) {
      objArr = objArr.concat(state.activeChart.data.groupDimension);
    }

    if (state.activeChart.data.metric) {
      objArr = objArr.concat(state.activeChart.data.metric);
    }

    if (state.activeChart.data.metricGroup) {
      var metrics = [];
      state.activeChart.data.metricGroup.forEach(function (m) {
        metrics.push.apply(metrics, _toConsumableArray(m));
      });
      objArr = objArr.concat(metrics);
    }

    sortArr.forEach(function (sort, index) {
      var objIndex = objArr.findIndex(function (obj) {
        return obj.uid === sort.uid && obj.schemaCode === sort.schemaCode && obj.field === sort.field;
      });

      if (objIndex < 0) {
        sortArr.splice(index, 1);
      } else {
        objArr[objIndex].options.order = sortArr[index].options.order;
        sortArr.splice(index, 1, objArr[objIndex]);
      }
    }); // 解决二维一指标切换顺序的排序问题
    // if (state.activeChart.type !== 'list' && sortArr.length > 1) {
    //   sortArr.sort((last, current) => {
    //     let lastIndex: number = objArr.findIndex(i => i.uid === last.uid) || 0;
    //     let currentIndex: number = objArr.findIndex(i => i.uid === current.uid) || 0;
    //     return lastIndex - currentIndex;
    //   });
    //
    // }
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETDRAGCHART, function (state, chart) {
  state.dragChart = chart;
}), _defineProperty(_mutations, _types.ReportMutation.SETLASTDATASOURCE, function (state, lastDataSourceNode) {
  state.lastDataSourceNode = lastDataSourceNode;
}), _defineProperty(_mutations, _types.ReportMutation.SETDRAGFIELD, function (state, field) {
  state.dragField = field;
}), _defineProperty(_mutations, _types.ReportMutation.CLEARCHARTRELATION, function (state, chart) {
  var uid;
  var chartIds;
  var oldDataSources;
  var dataSources = new Set();
  var difSourceId;
  var tmpDataSource = {
    dataSourceId: "",
    field: null
  }; // 清空图表联动关系

  if (chart.styles && chart.styles.linkage) {
    chart.styles.linkage = [];
  }

  state.charts.forEach(function (item) {
    if (item.styles && item.styles.linkage) {
      uid = item.styles.linkage.filter(function (param) {
        return param !== chart.uid;
      });
      item.styles.linkage = uid;
    } // 变更筛选联动关系


    if (item.type === "filterPicker" && item.chartIds.includes(chart.uid)) {
      chartIds = item.chartIds.filter(function (param) {
        return state.charts.find(function (data) {
          return data.uid === param;
        });
      });
      chartIds.map(function (chartId) {
        return state.charts.find(function (param) {
          return param.uid === chartId;
        });
      }).forEach(function (data) {
        if (data.dataSourceId) dataSources.add(data.dataSourceId);
      });
      oldDataSources = new Set(item.dataSources.map(function (param) {
        return param.dataSourceId;
      })); // 减少数据源时，删除差集的数据源；

      if (oldDataSources.size > dataSources.size) {
        difSourceId = Array.from(oldDataSources).find(function (data) {
          return !dataSources.has(data);
        });
        var tmpChart = state.charts.find(function (data) {
          return data.dataSourceId === chart.dataSourceId && data.uid !== chart.uid;
        });

        if (tmpChart) {
          chart.filterPicker = tmpChart.filterPicker;
        }

        item.dataSources.splice(item.dataSources.findIndex(function (data) {
          return data.dataSourceId === difSourceId;
        }), 1);
      } else if (oldDataSources.size === dataSources.size) {
        difSourceId = Array.from(oldDataSources).find(function (data) {
          return !dataSources.has(data);
        });

        if (difSourceId) {
          tmpDataSource.dataSourceId = chart.dataSourceId;
          chart.filterPicker = []; // 更改数据源时，替换当前字段，如果更改第一个，清空所有

          if (item.dataSources.findIndex(function (data) {
            return data.dataSourceId === difSourceId;
          }) === 0) {
            item.dataSources.forEach(function (data) {
              data.field = null;
            });
          }

          item.dataSources.splice(item.dataSources.findIndex(function (data) {
            return data.dataSourceId === difSourceId;
          }), 1, tmpDataSource);
        }
      } else {
        // 新增数据源， 新增字段
        difSourceId = Array.from(dataSources).find(function (data) {
          return !oldDataSources.has(data);
        });

        if (difSourceId) {
          tmpDataSource.dataSourceId = chart.dataSourceId;
          tmpDataSource.dataSourceId = difSourceId;
          item.dataSources.push(tmpDataSource);
        }
      }

      item.chartIds = chartIds;
    }
  });
}), _defineProperty(_mutations, _types.ReportMutation.SETREPORTOPTIONS, function (state, _ref) {
  var corpId = _ref.corpId,
      reportId = _ref.reportId,
      config = _ref.config,
      integrate = _ref.integrate;

  if (corpId) {
    state.corpId = corpId;
  }

  if (reportId) {
    state.objectId = reportId;
  }

  state.config = config;
  state.integrateComponent = integrate;

  _index.dashboardApi.setConfig({
    corpId: corpId,
    config: config
  });
}), _defineProperty(_mutations, _types.ReportMutation.RESIZECHARTVIEW, function (state, _ref2) {
  var chart = _ref2.chart,
      type = _ref2.type;
  var chartId = typeof chart === "string" ? chart : chart.uid;
  var viewStatus = state.chartViewStatus[chartId];
  if (!viewStatus) return;
  var fun = viewStatus[type];

  if (fun instanceof Function) {
    viewStatus[type]();
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETNUMBERFORMAT, function (state, _ref3) {
  var numberFormat = _ref3.numberFormat,
      metricIndex = _ref3.metricIndex,
      groupIndex = _ref3.groupIndex;

  if (state.activeChart) {
    if (state.activeChart.type === "list") {
      // 明细表只有dimension
      state.activeChart.data.dimension[metricIndex].options.numberFormat = numberFormat;
    } else if (state.activeChart.type === "biax") {
      // 双轴图的数据是在metricGroup中处理
      state.activeChart.data.metricGroup[groupIndex][metricIndex].options.numberFormat = numberFormat;
    } else {
      state.activeChart.data.metric[metricIndex].options.numberFormat = numberFormat;
    }
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETRESULTFILTER, function (state, _ref4) {
  var resultFilter = _ref4.resultFilter,
      metricIndex = _ref4.metricIndex,
      groupIndex = _ref4.groupIndex;

  if (state.activeChart) {
    if (state.activeChart.type === "list") {
      // 明细表只有dimension
      state.activeChart.data.dimension[metricIndex].options.resultFilter = resultFilter;
    } else if (state.activeChart.type === "biax") {
      // 双轴图的数据是在metricGroup中处理
      state.activeChart.data.metricGroup[groupIndex][metricIndex].options.resultFilter = resultFilter;
    } else {
      state.activeChart.data.metric[metricIndex].options.resultFilter = resultFilter;
    }
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETDATEFORMAT, function (state, _ref5) {
  var dateFormat = _ref5.dateFormat,
      dimensionIndex = _ref5.dimensionIndex;

  if (state.activeChart) {
    if (state.activeChart.type === "list") {
      state.activeChart.data.dimension[dimensionIndex].options.dateFormat = dateFormat;
    }
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETTABLEEXPORTDATA, function (state, _ref6) {
  var uid = _ref6.uid,
      data = _ref6.data;
  state.tableExportData[uid] = data;
}), _defineProperty(_mutations, _types.ReportMutation.SETCHARTSDATA, function (state, _ref7) {
  var key = _ref7.key,
      data = _ref7.data;

  _vue.default.set(state.chartsData, key, data);
}), _defineProperty(_mutations, _types.ReportMutation.SETADVANCEDATASOURCE, function (state, data) {
  state.showAdvancedDataSource = data;
}), _defineProperty(_mutations, _types.ReportMutation.SETDATAZOOMTHEMEGROBAL, function (state, theme) {
  state.charts.forEach(function (c, index) {
    var isDataZoomChart = [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.AREA, _chartType.ElementType.BIAX, _chartType.ElementType.PILEBAR, _chartType.ElementType.STRIPE].includes(c.type);

    if (isDataZoomChart) {
      var chart = c;

      if (chart.styles && chart.styles.dataZoom) {
        chart.styles.dataZoom.theme = theme;
      }
    }
  });
}), _mutations);
var _default = mutations;
exports.default = _default;