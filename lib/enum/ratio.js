"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.analysisRatio = exports.Ratio = void 0;

/**
 * 同/环比
 * inc = increase增长
 */
var Ratio;
exports.Ratio = Ratio;

(function (Ratio) {
  Ratio[Ratio["INCVALUE"] = 1] = "INCVALUE";
  Ratio[Ratio["INCRATE"] = 2] = "INCRATE";
  Ratio[Ratio["LASTYEARINCVALUE"] = 3] = "LASTYEARINCVALUE";
  Ratio[Ratio["LASTYEARINCRATE"] = 4] = "LASTYEARINCRATE";
  Ratio[Ratio["LASTMONTHINCVALUE"] = 5] = "LASTMONTHINCVALUE";
  Ratio[Ratio["LASTMONTHINCRATE"] = 6] = "LASTMONTHINCRATE";
  Ratio[Ratio["LASTWEEKINCVALUE"] = 7] = "LASTWEEKINCVALUE";
  Ratio[Ratio["LASTWEEKINCRATE"] = 8] = "LASTWEEKINCRATE"; // 上周同比增长率
})(Ratio || (exports.Ratio = Ratio = {}));

var analysisRatio = {
  // 年
  Y: [{
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }],
  // 年-季
  YQ: [{
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-月
  YM: [{
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-周
  YW: [{
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-月-日
  YMD: [{
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }, {
    label: "上月同比增长值",
    value: Ratio.LASTMONTHINCVALUE
  }, {
    label: "上月同比增长率",
    value: Ratio.LASTMONTHINCRATE
  }, {
    label: "上周同比增长值",
    value: Ratio.LASTWEEKINCVALUE
  }, {
    label: "上周同比增长率",
    value: Ratio.LASTWEEKINCRATE
  }]
};
exports.analysisRatio = analysisRatio;
var _default = {
  // 年
  Y: [{
    label: "无",
    value: undefined
  }, {
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }],
  // 年-季
  YQ: [{
    label: "无",
    value: undefined
  }, {
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-月
  YM: [{
    label: "无",
    value: undefined
  }, {
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-周
  YW: [{
    label: "无",
    value: undefined
  }, {
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }],
  // 年-月-日
  YMD: [{
    label: "无",
    value: undefined
  }, {
    label: "环比增长值",
    value: Ratio.INCVALUE
  }, {
    label: "环比增长率",
    value: Ratio.INCRATE
  }, {
    label: "上年同比增长值",
    value: Ratio.LASTYEARINCVALUE
  }, {
    label: "上年同比增长率",
    value: Ratio.LASTYEARINCRATE
  }, {
    label: "上月同比增长值",
    value: Ratio.LASTMONTHINCVALUE
  }, {
    label: "上月同比增长率",
    value: Ratio.LASTMONTHINCRATE
  }, {
    label: "上周同比增长值",
    value: Ratio.LASTWEEKINCVALUE
  }, {
    label: "上周同比增长率",
    value: Ratio.LASTWEEKINCRATE
  }]
};
exports.default = _default;