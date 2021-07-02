"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleType = void 0;

/**
 * 图表类型枚举
 */
var ModuleType;
exports.ModuleType = ModuleType;

(function (ModuleType) {
  ModuleType["ChartSwitch"] = "chartSwitch";
  ModuleType["MultiMetricType"] = "multiMetricType";
  ModuleType["GroupDimension"] = "groupDimension";
  ModuleType["Dimension"] = "dimension";
  ModuleType["Metric"] = "metric";
  ModuleType["MetricGroup"] = "metricGroup";
  ModuleType["Sort"] = "sort";
  ModuleType["Limit"] = "limit";
  ModuleType["Filter"] = "filter";
  ModuleType["DataLabel"] = "dataLabel";
  ModuleType["Theme"] = "theme";
  ModuleType["OrderNumber"] = "orderNumber";
  ModuleType["FreezeHead"] = "freezeHead";
  ModuleType["Legend"] = "legend";
  ModuleType["AxisX"] = "axisX";
  ModuleType["MultipleDataLabel"] = "multipleDataLabel";
  ModuleType["MetricRange"] = "metricRange";
  ModuleType["AxisYSet"] = "axisYSet";
  ModuleType["axisSet"] = "axisSet";
  ModuleType["SplitLine"] = "splitLine";
  ModuleType["DimensionLimit"] = "dimensionLimit";
  ModuleType["DataZoom"] = "dataZoom";
  ModuleType["MapTheme"] = "mapTheme";
  ModuleType["MapArea"] = "mapArea";
  ModuleType["MapDrill"] = "mapDrill";
  ModuleType["MapDigitalSet"] = "mapDigitalSet"; //数值标签显示设置
  // 新统计分析新增 Y轴坐标轴相关 以及网格线功能 新增时补齐
})(ModuleType || (exports.ModuleType = ModuleType = {}));