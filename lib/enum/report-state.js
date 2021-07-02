"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportState = void 0;
var ReportState;
exports.ReportState = ReportState;

(function (ReportState) {
  ReportState["DESIGN"] = "design";
  ReportState["DASHBOARD"] = "dashboard";
  ReportState["PREVIEW"] = "preview";
  ReportState["SINGLE"] = "single"; // 单例图表状态
})(ReportState || (exports.ReportState = ReportState = {}));