"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportMutation = exports.ReportAction = void 0;
var ReportAction;
exports.ReportAction = ReportAction;

(function (ReportAction) {
  ReportAction["GETREPORT"] = "getReport";
  ReportAction["GETPERSONALREPORT"] = "getPersonalReport";
  ReportAction["GETPUBLICREPORT"] = "getPublicReport";
  ReportAction["GETCHARTDATA"] = "getChartData";
  ReportAction["SAVECHARTS"] = "saveCharts";
  ReportAction["SAVECHART"] = "saveChart";
  ReportAction["REMOVECHART"] = "removeChart";
  ReportAction["LOADDATASOURCE"] = "loadDataSource";
  ReportAction["ADDCHART"] = "addChart";
  ReportAction["UPDATECHART"] = "updateChart";
  ReportAction["GETOBJECTID"] = "getObjectId";
  ReportAction["GETCHARTSLENGTH"] = "getChartsLength";
  ReportAction["SAVEOWNERCHART"] = "saveOwnerChart"; // 保存图表偏好
})(ReportAction || (exports.ReportAction = ReportAction = {}));

var ReportMutation;
exports.ReportMutation = ReportMutation;

(function (ReportMutation) {
  ReportMutation["SETANALYSISINFO"] = "setAnalysisInfo";
  ReportMutation["SETACTIVETAB"] = "setActiveTab";
  ReportMutation["RESIZECHARTVIEW"] = "resizeChartView";
  ReportMutation["SETACTIVECHART"] = "setActiveChart";
  ReportMutation["DRAGCHARTS"] = "dragCharts";
  ReportMutation["RESETREPORT"] = "resetReport";
  ReportMutation["SETGLOBALFILTER"] = "setGlobalFilter";
  ReportMutation["SETCHARTS"] = "setCharts";
  ReportMutation["RESETACTIVECHART"] = "reSetActiveChart";
  ReportMutation["RESETGLOBALFILTER"] = "reSetGlobalFilter"; // 重置全局筛选条件
})(ReportMutation || (exports.ReportMutation = ReportMutation = {}));