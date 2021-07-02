"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportMutation = exports.ReportAction = exports.ReportGetters = void 0;
var ReportGetters;
exports.ReportGetters = ReportGetters;

(function (ReportGetters) {
  ReportGetters["Example"] = "example";
})(ReportGetters || (exports.ReportGetters = ReportGetters = {}));

var ReportAction;
exports.ReportAction = ReportAction;

(function (ReportAction) {
  ReportAction["GETREPORT"] = "getReport";
  ReportAction["ADDCHART"] = "addChart";
  ReportAction["GETSCHEMA"] = "getSchema";
  ReportAction["LOADCHARTDATA"] = "loadChartData";
  ReportAction["GETCHARTDATA"] = "getChartData";
  ReportAction["SAVECHARTS"] = "saveCharts";
  ReportAction["SAVECHART"] = "saveChart";
  ReportAction["REMOVECHART"] = "removeChart"; // 删除图表
})(ReportAction || (exports.ReportAction = ReportAction = {}));

var ReportMutation;
exports.ReportMutation = ReportMutation;

(function (ReportMutation) {
  ReportMutation["RESETREPORT"] = "resetReport";
  ReportMutation["SETACTIVECHART"] = "setActiveChart";
  ReportMutation["SETCHARTMODULES"] = "setChartModules";
  ReportMutation["REMOVECHARTMODULES"] = "removeChartModules";
  ReportMutation["SETGLOBALFILTER"] = "setGlobalFilter";
  ReportMutation["HANDLESORT"] = "handleSort";
  ReportMutation["UPDATECHARTS"] = "updateCharts";
  ReportMutation["SETLIMIT"] = "setLimit";
  ReportMutation["RESIZECHARTVIEW"] = "resizeChartView"; // 刷新图表
})(ReportMutation || (exports.ReportMutation = ReportMutation = {}));