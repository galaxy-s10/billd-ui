"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartNotice = exports.ChartUseType = exports.ElementCNType = exports.ElementType = void 0;

/**
 * 图表类型枚举
 */
var ElementType;
exports.ElementType = ElementType;

(function (ElementType) {
  ElementType["MAP"] = "map";
  ElementType["BAR"] = "bar";
  ElementType["PILEBAR"] = "pileBar";
  ElementType["STRIPE"] = "stripe";
  ElementType["LINE"] = "line";
  ElementType["AREA"] = "area";
  ElementType["PIE"] = "pie";
  ElementType["FUNNEL"] = "funnel";
  ElementType["RADAR"] = "radar";
  ElementType["TABLE"] = "table";
  ElementType["LIST"] = "list";
  ElementType["CARD"] = "card";
  ElementType["SCATTER"] = "scatter";
  ElementType["BIAX"] = "biax";
  ElementType["LONGTEXT"] = "longText";
  ElementType["FILTERPICKER"] = "filterPicker"; // 过滤器
})(ElementType || (exports.ElementType = ElementType = {}));
/**
 * 图表类型枚举
 */


var ElementCNType;
exports.ElementCNType = ElementCNType;

(function (ElementCNType) {
  ElementCNType["MAP"] = "\u5730\u56FE";
  ElementCNType["BAR"] = "\u67F1\u72B6\u56FE";
  ElementCNType["PILEBAR"] = "\u5806\u53E0\u67F1\u72B6\u56FE";
  ElementCNType["STRIPE"] = "\u6761\u5F62\u56FE";
  ElementCNType["LINE"] = "\u6298\u7EBF\u56FE";
  ElementCNType["AREA"] = "\u9762\u79EF\u56FE";
  ElementCNType["PIE"] = "\u997C\u56FE";
  ElementCNType["FUNNEL"] = "\u6F0F\u6597\u56FE";
  ElementCNType["RADAR"] = "\u96F7\u8FBE\u56FE";
  ElementCNType["TABLE"] = "\u900F\u89C6\u56FE";
  ElementCNType["LIST"] = "\u660E\u7EC6\u8868";
  ElementCNType["CARD"] = "\u6307\u6807\u56FE";
  ElementCNType["SCATTER"] = "\u6563\u70B9\u56FE";
  ElementCNType["BIAX"] = "\u53CC\u8F74\u56FE";
  ElementCNType["LONGTEXT"] = "\u6587\u672C\u56FE";
  ElementCNType["FILTERPICKER"] = "\u8FC7\u6EE4\u5668"; // 过滤器
})(ElementCNType || (exports.ElementCNType = ElementCNType = {}));
/**
 * 图表连接关系
 */


var ChartUseType;
exports.ChartUseType = ChartUseType;

(function (ChartUseType) {
  ChartUseType[ChartUseType["CONNECT"] = 1] = "CONNECT";
  ChartUseType[ChartUseType["ETL"] = 100] = "ETL";
})(ChartUseType || (exports.ChartUseType = ChartUseType = {}));
/**
 * 图表tooltip 的HTML
 */


var ChartNotice;
exports.ChartNotice = ChartNotice;

(function (ChartNotice) {
  ChartNotice["MAP"] = "";
  ChartNotice["BAR"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["PILEBAR"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["STRIPE"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["LINE"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["AREA"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["PIE"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["FUNNEL"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["RADAR"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["TABLE"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>\u591A\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807";
  ChartNotice["LIST"] = "\u591A\u4E2A\u5217";
  ChartNotice["CARD"] = "0\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807<br>1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807";
  ChartNotice["SCATTER"] = "1\u4E2A\u7EF4\u5EA6\u30012\u4E2A\u62163\u4E2A\u6307\u6807<br/>2\u4E2A\u7EF4\u5EA6\u30012\u4E2A\u62163\u4E2A\u6307\u6807";
  ChartNotice["BIAX"] = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807"; // 双轴图
})(ChartNotice || (exports.ChartNotice = ChartNotice = {}));