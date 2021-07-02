"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.formatDataList = exports.dateFilterTypeList = exports.dateFilterType = exports.FormatDateType = exports.DateFilterType = exports.NumberType = exports.DateType = exports.StringType = void 0;
var StringType;
exports.StringType = StringType;

(function (StringType) {
  StringType["Equal"] = "Equal";
  StringType["NotEqual"] = "NotEqual";
  StringType["StartWith"] = "StartWith";
  StringType["In"] = "In";
  StringType["NotIn"] = "NotIn";
  StringType["None"] = "None";
  StringType["NotNone"] = "NotNone";
  StringType["Match"] = "Match";
  StringType["NotMatch"] = "NotMatch"; // 模糊匹配 不包含
})(StringType || (exports.StringType = StringType = {}));

var DateType;
exports.DateType = DateType;

(function (DateType) {
  DateType["Equal"] = "Equal";
  DateType["NotEqual"] = "NotEqual";
  DateType["Range"] = "Range";
  DateType["Above"] = "Above";
  DateType["NotBelow"] = "NotBelow";
  DateType["Below"] = "Below";
  DateType["NotAbove"] = "NotAbove";
  DateType["None"] = "None";
  DateType["NotNone"] = "NotNone"; // 不为空
})(DateType || (exports.DateType = DateType = {}));

var NumberType;
exports.NumberType = NumberType;

(function (NumberType) {
  NumberType["Equal"] = "Equal";
  NumberType["NotEqual"] = "NotEqual";
  NumberType["Range"] = "Range";
  NumberType["Above"] = "Above";
  NumberType["NotBelow"] = "NotBelow";
  NumberType["Below"] = "Below";
  NumberType["NotAbove"] = "NotAbove";
  NumberType["None"] = "None";
  NumberType["NotNone"] = "NotNone"; // 不为空
})(NumberType || (exports.NumberType = NumberType = {}));

var DateFilterType;
exports.DateFilterType = DateFilterType;

(function (DateFilterType) {
  DateFilterType["Custom"] = "Custom";
  DateFilterType["Today"] = "Today";
  DateFilterType["Yesterday"] = "Yesterday";
  DateFilterType["ThisWeek"] = "ThisWeek";
  DateFilterType["LastWeek"] = "LastWeek";
  DateFilterType["ThisMonth"] = "ThisMonth";
  DateFilterType["LastMonth"] = "LastMonth";
})(DateFilterType || (exports.DateFilterType = DateFilterType = {}));

var FormatDateType;
exports.FormatDateType = FormatDateType;

(function (FormatDateType) {
  FormatDateType["Date"] = "Date";
  FormatDateType["Time"] = "Time";
  FormatDateType["Month"] = "Month";
})(FormatDateType || (exports.FormatDateType = FormatDateType = {}));

var dateFilterType = [{
  label: "自定义",
  value: DateFilterType.Custom
}, {
  label: "今天",
  value: DateFilterType.Today
}, {
  label: "昨天",
  value: DateFilterType.Yesterday
}, {
  label: "本周",
  value: DateFilterType.ThisWeek
}, {
  label: "上周",
  value: DateFilterType.LastWeek
}, {
  label: "本月",
  value: DateFilterType.ThisMonth
}, {
  label: "上月",
  value: DateFilterType.LastMonth
}];
exports.dateFilterType = dateFilterType;
var dateFilterTypeList = {
  Today: "今天",
  Yesterday: "昨天",
  ThisWeek: "本周",
  LastWeek: "上周",
  ThisMonth: "本月",
  LastMonth: "上月",
  Custom: "自定义"
};
exports.dateFilterTypeList = dateFilterTypeList;
var formatDataList = [{
  label: "日期",
  value: FormatDateType.Date
}, {
  label: "日期和时间",
  value: FormatDateType.Time
}, {
  label: "年月",
  value: FormatDateType.Month
}];
exports.formatDataList = formatDataList;
var _default = {
  string: [{
    label: "等于",
    value: StringType.Equal
  }, {
    label: "不等于",
    value: StringType.NotEqual
  }, // { label: '开头为', value: StringType.StartWith },
  {
    label: "等于任意一个",
    value: StringType.In
  }, {
    label: "不等于任意一个",
    value: StringType.NotIn
  }, {
    label: "为空",
    value: StringType.None
  }, {
    label: "不为空",
    value: StringType.NotNone
  }],
  date: [{
    label: "等于",
    value: DateType.Equal
  }, {
    label: "不等于",
    value: DateType.NotEqual
  }, {
    label: "范围",
    value: DateType.Range
  }, {
    label: "大于",
    value: DateType.Above
  }, {
    label: "大于等于",
    value: DateType.NotBelow
  }, {
    label: "小于",
    value: DateType.Below
  }, {
    label: "小于等于",
    value: DateType.NotAbove
  }, {
    label: "为空",
    value: DateType.None
  }, {
    label: "不为空",
    value: DateType.NotNone
  }],
  number: [{
    label: "等于",
    value: NumberType.Equal
  }, {
    label: "不等于",
    value: NumberType.NotEqual
  }, {
    label: "范围",
    value: NumberType.Range
  }, {
    label: "大于",
    value: NumberType.Above
  }, {
    label: "大于等于",
    value: NumberType.NotBelow
  }, {
    label: "小于",
    value: NumberType.Below
  }, {
    label: "小于等于",
    value: NumberType.NotAbove
  }, {
    label: "为空",
    value: NumberType.None
  }, {
    label: "不为空",
    value: NumberType.NotNone
  }]
};
exports.default = _default;