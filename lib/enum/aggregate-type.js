"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AggregateResultType = exports.DateType = exports.NumberType = exports.StringType = void 0;

/**
 * 字符串
 */
var StringType;
exports.StringType = StringType;

(function (StringType) {
  StringType["COUNT"] = "COUNT";
})(StringType || (exports.StringType = StringType = {}));
/**
 * 数值
 */


var NumberType;
exports.NumberType = NumberType;

(function (NumberType) {
  NumberType["SUM"] = "SUM";
  NumberType["AVG"] = "AVG";
  NumberType["MAX"] = "MAX";
  NumberType["MIN"] = "MIN";
  NumberType["COUNT"] = "COUNT";
})(NumberType || (exports.NumberType = NumberType = {}));
/**
 * 日期
 */


var DateType;
exports.DateType = DateType;

(function (DateType) {
  DateType["Y"] = "Y";
  DateType["YQ"] = "YQ";
  DateType["YM"] = "YM";
  DateType["YW"] = "YW";
  DateType["YMD"] = "YMD";
})(DateType || (exports.DateType = DateType = {}));
/**
 * 聚合类型
 */


var AggregateResultType;
exports.AggregateResultType = AggregateResultType;

(function (AggregateResultType) {
  AggregateResultType["DEFAULT"] = "DEFAULT";
  AggregateResultType["PERCENT"] = "PERCENT";
})(AggregateResultType || (exports.AggregateResultType = AggregateResultType = {}));

var _default = {
  string: [{
    label: '计数',
    value: StringType.COUNT
  }],
  number: [{
    label: '总和值',
    value: NumberType.SUM
  }, {
    label: '平均值',
    value: NumberType.AVG
  }, {
    label: '最大值',
    value: NumberType.MAX
  }, {
    label: '最小值',
    value: NumberType.MIN
  }, {
    label: '计数',
    value: NumberType.COUNT
  }],
  date: [{
    label: '年',
    value: DateType.Y
  }, {
    label: '年-季度',
    value: DateType.YQ
  }, {
    label: '年-月',
    value: DateType.YM
  }, {
    label: '年-周',
    value: DateType.YW
  }, {
    label: '年-月-日',
    value: DateType.YMD
  }],
  address: [{
    label: '总和值',
    value: NumberType.SUM
  }, {
    label: '计数',
    value: NumberType.COUNT
  }],
  aggregateResult: [{
    label: '显示为实际值',
    value: AggregateResultType.DEFAULT
  }, {
    label: '显示为占比',
    value: AggregateResultType.PERCENT
  }]
};
exports.default = _default;