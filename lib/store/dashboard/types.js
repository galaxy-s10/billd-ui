"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportMutation = exports.ReportAction = void 0;
var ReportAction;
exports.ReportAction = ReportAction;

(function (ReportAction) {
  ReportAction["ADDELEMENT"] = "addElement";
  ReportAction["GETREPORTDETAIL"] = "getReportDetail";
  ReportAction["GETREPORT"] = "getReport";
  ReportAction["SAVEREPORT"] = "saveReport";
  ReportAction["GETDATASOURCELIST"] = "getDataSourceList";
  ReportAction["GETDATASOURCE"] = "getDataSource";
  ReportAction["LOADDATASOURCE"] = "loadDataSource";
  ReportAction["LOADCHARTDATA"] = "loadChartData";
  ReportAction["SETCHARTLINKAGE"] = "setChartLinkage";
  ReportAction["SETFILTERPICKER"] = "setFilterPicker";
  ReportAction["REMOVEFILTERPICKER"] = "removeFilterPicker"; // 删除过滤器条件
})(ReportAction || (exports.ReportAction = ReportAction = {}));

var ReportMutation;
exports.ReportMutation = ReportMutation;

(function (ReportMutation) {
  ReportMutation["INITREPORT"] = "initReport";
  ReportMutation["SETCHARTS"] = "setCharts";
  ReportMutation["SETGLOBAL"] = "setGlobal";
  ReportMutation["SETOBJECTID"] = "setObjectId";
  ReportMutation["SETTITLE"] = "setTitle";
  ReportMutation["SETREPORTTOP"] = "setReportTop";
  ReportMutation["SETREPORTTITLE"] = "setReportTitle";
  ReportMutation["SETACTIVECHART"] = "setActiveChart";
  ReportMutation["CLEARACTIVECHART"] = "clearActiveChart";
  ReportMutation["SETGLOBALFILTER"] = "setGlobalFilter";
  ReportMutation["HANDLESORT"] = "handleSort";
  ReportMutation["SETDRAGCHART"] = "setDragChart";
  ReportMutation["SETDRAGFIELD"] = "setDragField";
  ReportMutation["SETREPORTOPTIONS"] = "setReportOptions";
  ReportMutation["CLEARCHARTRELATION"] = "clearChartRelation";
  ReportMutation["RESIZECHARTVIEW"] = "resizeChartView";
  ReportMutation["SETNUMBERFORMAT"] = "setNumberFormat";
  ReportMutation["SETRESULTFILTER"] = "setResultFilter";
  ReportMutation["SETDATEFORMAT"] = "setDateFormat";
  ReportMutation["SETLASTDATASOURCE"] = "setLastDataSource";
  ReportMutation["SETTABLEEXPORTDATA"] = "setTableExportData";
  ReportMutation["DELETEMETRIC"] = "deleteMetric";
  ReportMutation["SERINTROSTATE"] = "setIntroState";
  ReportMutation["SETCHARTSDATA"] = "setChartsData";
  ReportMutation["SETADVANCEDATASOURCE"] = "setAdvancedDataSource";
  ReportMutation["SETDATAZOOMTHEMEGROBAL"] = "setDataZoomThemeGrobal"; // 设置缩略轴皮肤
})(ReportMutation || (exports.ReportMutation = ReportMutation = {}));