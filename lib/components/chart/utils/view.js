"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewOptions = viewOptions;
exports.legendSetting = legendSetting;
exports.metricRangeMatrixing = metricRangeMatrixing;
exports.numericalFormatting = numericalFormatting;
exports.warningLine = warningLine;
exports.fontSetting = fontSetting;
exports.handleBigData = handleBigData;
exports.analysisChartData = analysisChartData;
exports.getMaxMetricLength = getMaxMetricLength;
exports.getDataZoom = getDataZoom;
exports.newDataZoomEvent = newDataZoomEvent;
exports.getMapJson = getMapJson;
exports.getAddressLink = getAddressLink;
exports.default = void 0;

var _number = require("../../../utils/number");

var _options = require("../view/options");

var _string = require("../../../utils/string");

var _filterType = require("../../../enum/filter-type");

var _alias = _interopRequireDefault(require("../../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 生成图表配置
 * @param options
 * @param chartData
 * @param config  对图表属性做配置,提供7个默认配置tooltip，xAxis，yAxis，legend，dataset，color，grid
 *  例： {
 *           tooltip: 'default',             // ‘default’使用tooltip默认配置
 *           xAxis: {
 *               axisLine: {  show: false } // 在提供默认的配置上扩展 axisLine: {  show: false }，已有这个属性，则会覆盖掉
 *              }，
 *           radar: {
 *                radius: '55%'             // 新增radar配置
 *           }
 *        }
 */
function viewOptions(options, chartData, config) {
  var chartOptions = {};
  var chartConfigMap = {
    tooltip: getTooltip(options, chartData),
    xAxis: getXAxis(options, chartData),
    yAxis: getYAxis(options, chartData),
    legend: getLegend(options, chartData),
    dataset: getDataset(options, chartData),
    color: options.colors,
    grid: getGrid(options, chartData)
  }; // await setLegendTooltip(chartConfigMap.legend);

  Object.keys(config).forEach(function (key) {
    // config { key : value}  1. value为'default'，用默认的配置 2 .value 等于Object，扩展默认配置 3. value为其它类型，以其它为准
    if (chartConfigMap[key]) {
      chartOptions[key] = config[key] === "default" ? chartConfigMap[key] : Object.prototype.toString.call(config[key]) === "[object Object]" ? _extends(chartConfigMap[key], config[key]) : config[key];
    } else {
      chartOptions[key] = config[key];
    }
  });
  return chartOptions;
}
/**
 *  获取tooltip
 * @param options
 * @param chartData
 */


function getTooltip(options, chartData) {
  return {
    trigger: "axis",
    backgroundColor: _options.tooltipBgColor,
    extraCssText: "padding: 10px;border-radius: 4px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);",
    textStyle: {
      color: "#fff",
      fontSize: 12
    },
    position: function position(pos, params, dom, rect, size) {
      // 0.05为grid.right边距的值
      var pw = size.viewSize[0] - pos[0] - size.contentSize[0] * 0.05;
      var x = pw >= size.contentSize[0] ? pos[0] : size.viewSize[0] - size.contentSize[0] - size.contentSize[0] * 0.1;
      var y = pos[1] >= size.contentSize[1] ? pos[1] - size.contentSize[1] * 0.92 : size.contentSize[1] * 0.08;
      return [x, y];
    },
    formatter: function formatter(params) {
      // 类别与X轴的别名取相同
      var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, params[0].name, options.dataAlias) : "";
      var name = aliaName || params[0].name;
      var seriesName;
      var value;
      var res = name + "<br/>";
      params.forEach(function (item) {
        var aliaValueName = options.groupDimension ? (0, _alias.default)(options.groupDimension.uid, item.seriesName, options.dataAlias) : "";
        seriesName = chartData.groupNameArray ? chartData.groupNameArray[item.seriesName] : aliaValueName || item.seriesName;
        value = numericalFormatting(item, chartData, options);
        res += item.marker + seriesName + "：" + value + "<br/>";
      });
      return res;
    },
    axisPointer: {
      shadowStyle: {
        color: _options.tooltipShadowColor
      }
    }
  };
}
/**
 *  获取tooltip
 * @param options
 * @param chartData
 */


function getDataZoom(options, chartData) {
  var axisx = {
    xAxisIndex: [0],
    bottom: 0,
    height: "24px"
  };

  if (options.type === "stripe") {
    axisx = {
      yAxisIndex: [0]
    };
  }

  var colorOptions = {
    backgroundColor: "#ffffff",
    borderColor: "rgba(231, 231, 231, 1)",
    fillerColor: "rgba(80, 130, 228, 0.05)",
    lineStyleColor: "rgba(231, 231, 231, 1)",
    areaStyleColor: "#F1F1F1",
    handleStyleColor: "rgba(192, 200, 203, 1)",
    textStyleColor: "#333"
  };

  if (options.DataZoom && options.DataZoom.theme === "dark") {
    colorOptions.backgroundColor = "#2A2A2A";
    colorOptions.fillerColor = "rgba(255, 255, 255, 0.12)", colorOptions.borderColor = "#575757";
    colorOptions.lineStyleColor = "#575757";
    colorOptions.areaStyleColor = "#434343";
    colorOptions.handleStyleColor = "#A7A7A7";
    colorOptions.textStyleColor = "#A7A7A7";
  }

  return [_extends(_extends({
    type: "slider",
    start: options.DataZoom ? options.DataZoom.start : 0,
    end: options.DataZoom ? options.DataZoom.end : 100
  }, axisx), {
    show: options.DataZoom ? options.DataZoom.show : false,
    backgroundColor: colorOptions.backgroundColor,
    borderColor: colorOptions.borderColor,
    fillerColor: colorOptions.fillerColor,
    textStyle: {
      color: colorOptions.textStyleColor
    },
    labelFormatter: function labelFormatter(value) {
      var tmpValue = (chartData instanceof Array ? chartData[0] : chartData).data[value][0];
      var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, tmpValue, options.dataAlias) : "";
      var dataAlias = aliaName || tmpValue;
      return dataAlias;
    },
    dataBackground: {
      lineStyle: {
        color: colorOptions.lineStyleColor,
        opacity: 1
      },
      areaStyle: {
        color: colorOptions.areaStyleColor,
        opacity: 0.5
      }
    },
    handleStyle: {
      color: colorOptions.handleStyleColor
    }
  }), _extends(_extends({
    type: "inside"
  }, axisx), {
    disabled: options.DataZoom ? !options.DataZoom.show : true
  })];
}
/**
 *  获取xAxis
 * @param options
 * @param chartData
 */


function getXAxis(options, chartData) {
  var axisLineShow = true;
  var axisLabelShow = true;

  if (options.axisX) {
    axisLineShow = options.axisX.displayAxisX === null ? true : options.axisX.displayAxisX;
    axisLabelShow = options.axisX.displayLabel === null ? true : options.axisX.displayLabel;
  }

  return {
    type: "category",
    axisLabel: {
      formatter: function formatter(value, index) {
        // x轴永远是dimension的值 使用dimension的uid拼value取别名
        var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, value, options.dataAlias) : "";
        var dataAlias = aliaName || value;
        var limitDataAlias = (0, _string.subStr)(dataAlias, 14, true); // 刻度竖直显示时，限制高度，保证图表的正常显示

        return options.axisX && options.axisX.direction === "endwise" ? limitDataAlias.split("").join("\n") : dataAlias;
      },
      color: fontSetting(options),
      rotate: mapAxisRotate(options),
      show: axisLabelShow
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: _options.lineColor
      }
    },
    axisLine: {
      lineStyle: {
        color: _options.lineColor
      },
      show: axisLineShow
    }
  };
}
/**
 *  计算坐标轴刻度角度
 * @param options
 */


function mapAxisRotate(options) {
  var rotate = 0;

  if (options.axisX && options.axisX.direction) {
    if (options.axisX.direction === "leftBank") {
      rotate = 45;
    } else if (options.axisX.direction === "rightBank") {
      rotate = -45;
    }
  }

  return rotate;
}
/**
 *  获取yAxis
 * @param options
 * @param chartData
 */


function getYAxis(options, chartData) {
  var rangeData = metricRangeMatrixing(options, chartData);
  return {
    type: "value",
    axisLabel: {
      formatter: function formatter(value) {
        // 数值显示功能以第一个指标的设置为主
        var numberFormat = options.metric[0].options.numberFormat;

        if (numberFormat) {
          value = (0, _number.convertNumber)(value, numberFormat);
        }

        if (!numberFormat || !numberFormat.fraction && !numberFormat.percent) {
          value = (0, _number.stringNumber)(value);
        }

        return value;
      },
      color: fontSetting(options),
      rotate: 0
    },
    min: rangeData.min,
    max: rangeData.max,
    axisTick: {
      show: false
    },
    axisLine: {
      show: options.axisYSet === undefined ? true : !!options.axisYSet,
      lineStyle: {
        color: _options.lineColor
      }
    },
    splitLine: {
      show: options.splitLine === undefined ? true : !!options.splitLine,
      lineStyle: {
        color: _options.lineColor,
        type: "dashed"
      }
    }
  };
}
/**
 *  获取gird
 * @param options
 * @param chartData
 */


function getGrid(options, chartData) {
  return {
    top: "10%",
    right: "5%",
    left: "4%",
    bottom: 64,
    containLabel: true // 区域是否包含坐标轴的刻度标签

  };
}
/**
 *  获取dataset
 * @param options
 * @param chartData
 */


function getDataset(options, chartData) {
  var dataSource;
  var realSource = [];
  var datas = [];

  if (chartData instanceof Array) {
    chartData.forEach(function (chart) {
      datas.push(chart.data);
    });
    var length = datas.length;

    if (length > 0) {
      datas[0].forEach(function (d, index) {
        var item = _toConsumableArray(d);

        var i = 1;

        while (i < length) {
          var splice = datas[i][index].slice(1, datas[i][index].length);
          item = [].concat(_toConsumableArray(item), _toConsumableArray(splice));
          i += 1;
        }

        realSource.push(item);
      });
    }

    dataSource = realSource;
  } else {
    dataSource = chartData.data;
  }

  return {
    source: dataSource
  };
}
/**
 *  获取异步设置Legend
 */


function setLegendTooltip(legend) {
  setTimeout(function () {
    if (legend.maxLength && legend.maxLength >= 12) {
      legend.tooltip.show = true;
    }
  }, 0);
}
/**
 *  获取Legend
 * @param options
 * @param chartData
 */


function getLegend(options, chartData) {
  var groupArray = [];
  var groupNameArray = {};
  var maxLength = 0;

  if (chartData instanceof Array) {
    chartData.forEach(function (chart) {
      var _groupArray;

      (_groupArray = groupArray).push.apply(_groupArray, _toConsumableArray(chart.groupArray));

      groupNameArray = _extends(groupNameArray, chart.groupNameArray);
    });
  } else {
    groupNameArray = chartData.groupNameArray;
    groupArray = chartData.groupArray;
  }

  return {
    textStyle: {
      color: fontSetting(options)
    },
    type: "scroll",
    bottom: 0,
    data: groupArray,
    formatter: function formatter(value) {
      var legendValue = getLengedValue(value, options, groupNameArray);
      var strLength = (0, _string.getStrLen)(legendValue);
      maxLength = maxLength < strLength ? strLength : maxLength;
      return (0, _string.subStr)(legendValue, 12, true);
    },
    show: options.legend ? options.legend.checked === null ? true : options.legend.checked : true,
    tooltip: {
      show: true,
      formatter: function formatter(obj) {
        return getLengedValue(obj.name, options, groupNameArray);
      },
      confine: true
    }
  };
}
/**
 * 图例格式化
 * @param value
 */


function getLengedValue(value, options, groupNameArray) {
  // 二唯一指标时value为 具体值，需要通过groupDimension 次纬度的uid_value去拿到别名
  // 一唯一指标和一纬多指标时，value为Uid，没有groupDimension 次纬度，通过groupNameArray[uid]拿值
  // 漏斗图/饼图只有一唯一指标所以用 options.dimension作为纬度图例
  var realName = options.groupDimension ? (0, _alias.default)(options.groupDimension.uid, value, options.dataAlias) : options.dimension ? (0, _alias.default)(options.dimension.uid, value, options.dataAlias) : "";
  var legendValue = groupNameArray && groupNameArray[value] ? groupNameArray[value] : realName ? realName : value;
  return legendValue;
}
/**
 * 图例设置
 * @param chartOptions
 * @param options
 */


function legendSetting(chartOptions, options) {
  if (options.legend) {
    var position = options.legend.position;

    if (options.legend.checked) {
      chartOptions.legend[position] = position;

      if (position === "top" || position === "bottom") {
        chartOptions.legend.orient = "horizontal";
      } else {
        chartOptions.legend.top = "middle";
        chartOptions.legend.orient = "vertical";
      }

      switch (position) {
        case "top":
          break;

        case "bottom":
          chartOptions.legend.bottom = options.DataZoom && options.DataZoom.show ? "36" : "10"; // chartOptions.legend.bottom = 0;

          break;

        case "left":
          chartOptions.grid.left = "120";
          break;

        case "right":
          chartOptions.grid.right = "125";
          break;

        default:
          break;
      }
    }
  }
}
/**
 * 自定义范围数值换算
 * @param options
 * @param chartData
 * @param isGetOriginal 是否取原始值
 */


function metricRangeMatrixing(options, chartData) {
  var isGetOriginal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var min;
  var max;

  if (isGetOriginal) {
    min = options.metricRange ? options.metricRange.min || chartData.minMetric : chartData.minMetric;
    max = options.metricRange ? options.metricRange.max || chartData.maxMetric : chartData.maxMetric;
  } else {
    min = options.metricRange ? options.metricRange.min : null;
    max = options.metricRange ? options.metricRange.max : null;
  }

  if (options.multiMetricType && options.multiMetricType.length > 0 && options.multiRange && options.multiRange.length > 0) {
    var index = options.multiMetricType.findIndex(function (i) {
      return i === options.type;
    });
    min = options.multiRange[index] ? options.multiRange[index].min : null;
    max = options.multiRange[index] ? options.multiRange[index].max : null;
  }

  var res = handleMetricRange(chartData);
  max = res.max;
  min = res.min; // 判断输入的最小值如果比原始值还大，则最小值变为原始值

  if (chartData.minMetric && min > chartData.minMetric) {
    min = chartData.minMetric;
  }

  return {
    max: max,
    min: min
  };
}
/**
 * 圈复杂度处理最大值最小值
 * @param chartData
 */


function handleMetricRange(chartData) {
  var min;
  var max;

  if (min && !max) {
    var numLen = parseInt(chartData.maxMetric.toString().replace("-", ""), 10).toString().length - 1 || 1;
    max = Math.ceil(chartData.maxMetric / Math.pow(10, numLen)) * Math.pow(10, numLen);

    if (max <= min) {
      var minLen = parseInt(min.toString().replace("-", ""), 10).toString().length - 1 || 1;
      max = (Math.ceil(min / Math.pow(10, minLen)) + 1) * Math.pow(10, minLen);
    }
  } else if (max < 0 && !min && max) {
    var _numLen = parseInt(max.toString().replace("-", ""), 10).toString().length - 1 || 1;

    min = (Math.floor(max / Math.pow(10, _numLen)) - 1) * Math.pow(10, _numLen);
  } else if (max === 0) {
    min = -100;
  }

  return {
    max: max,
    min: min
  };
}
/**
 * 获取最大指标的显示值
 * @param chartOptions
 * @param options
 * @param chartData
 */


function getMaxMetricLength(chartOptions, options, chartData) {
  var length = 0;
  var numberFormat = options.metric[0].options.numberFormat;

  if (numberFormat && (numberFormat.fraction || numberFormat.percent) && chartData.maxMetric) {
    if (chartData.maxMetric) {
      var pow = Math.pow(10, Math.ceil(chartData.maxMetric).toString().length - 1);
      var maxMetricLabel = chartOptions.yAxis.axisLabel.formatter(Math.ceil(chartData.maxMetric / pow) * pow);
      var span = document.createElement("span");
      span.innerText = maxMetricLabel;
      document.body.appendChild(span);
      length = span.offsetWidth + 10;
      document.body.removeChild(span);
    }
  }

  return length;
}
/**
 * 数值格式设置
 * @param params
 * @param chartData
 * @param options
 * @param beforeIndex 真实数据index的前置index  用于复合图表-双轴图
 *   ['bar', 'stripe', 'area', 'line', 'pileBar']
 */


function numericalFormatting(params, chartData, options) {
  var beforeIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var groupData = chartData.metricRangeData[chartData.index + params.dataIndex] || [];
  var value = groupData[params.componentIndex - beforeIndex];
  var metricGroupItem = [];

  if (!value && value !== 0) {
    value = groupData[params.componentIndex - beforeIndex + 1] || 0;
  }

  if (options.metricGroup && options.metricGroup.length) {
    metricGroupItem = beforeIndex > 0 ? options.metricGroup[1] : options.metricGroup[0];
    metricGroupItem.forEach(function (item, index) {
      // beforeIndex 正对于双轴图 多轴计算第几个指标
      if (params.componentIndex - beforeIndex === index && item.options.numberFormat) {
        value = (0, _number.convertNumber)(value, item.options.numberFormat);
      }
    });
  } else {
    options.metric.forEach(function (item, index) {
      if (item.options.numberFormat) {
        if (options.metric.length > 1) {
          if (params.componentIndex === index) {
            value = (0, _number.convertNumber)(value, item.options.numberFormat);
          }
        } else {
          // 等一个指标
          value = (0, _number.convertNumber)(value, item.options.numberFormat);
        }
      }
    });
  }

  return value;
}
/**


 
/**
 * 处理警戒线自定义指标范围，
 * @param options
 * @param chartData
 * @param chartOptions
 * @param line
 */


function handleMarkLineMetricRange(chartData, chartOptions, options, line) {
  var labelValue; // label展示值

  var axisValue; // 坐标刻度的值

  if (line.type === "dynamic") {
    axisValue = getMarkLineValue(chartData, options, line);
    labelValue = axisValue;
    options.metric.forEach(function (item) {
      if (line.field === item.uid && item.options && item.options.percent === "PERCENT") {
        labelValue = Number(labelValue) * 100 + "%";
      }
    });
  } else {
    labelValue = line.value;

    if (/%$/.test("".concat(line.value))) {
      axisValue = Number("".concat(line.value).replace("%", "")) / 100;
    } else {
      axisValue = labelValue;
    }
  } // 取整数，echart对某些太精确的小数位，坐标轴刻度自动计算会有问题。


  var rangeAxisValue = axisValue < 0 ? Math.floor(axisValue) : Math.ceil(axisValue);

  if (axisValue > chartData.maxMetric && !(options.metricRange && options.metricRange.max)) {
    if (chartOptions.yAxis.max) {
      chartOptions.yAxis.max = chartOptions.yAxis.max > axisValue ? chartOptions.yAxis.max : rangeAxisValue;
    } else {
      chartOptions.yAxis.max = rangeAxisValue;
    }
  }

  if (axisValue < chartData.minMetric && !(options.metricRange && options.metricRange.min)) {
    if (chartOptions.yAxis.min) {
      chartOptions.yAxis.min = chartOptions.yAxis.min < axisValue ? chartOptions.yAxis.min : rangeAxisValue;
    } else {
      chartOptions.yAxis.min = rangeAxisValue;
    }
  }

  if (options.metricRange) {
    if (options.metricRange.max && axisValue > options.metricRange.max) {
      axisValue = options.metricRange.max;
    }

    if (options.metricRange.min && axisValue < options.metricRange.min) {
      axisValue = options.metricRange.min;
    }
  }

  return {
    axisValue: axisValue,
    labelValue: labelValue
  };
}
/**
 * 动态模式计算警戒线值
 * @param chartData
 * @param line
 * @param options
 */


function getMarkLineValue(chartData, options, line) {
  var markLineValue;
  var fieldData = [];

  if (options.groupDimension && options.groupDimension.field && options.metric.length) {
    var _iterator = _createForOfIteratorHelper(chartData.metricRangeData),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        fieldData = fieldData.concat(value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var tmpIndex = chartData.groupArray.findIndex(function (uid) {
      return line.field === uid;
    });

    if (tmpIndex === 0 || tmpIndex) {
      fieldData = chartData.metricRangeData.map(function (data) {
        return data[tmpIndex];
      });
    }
  }

  switch (line.aggregate) {
    case "max":
      markLineValue = Math.max.apply(Math, _toConsumableArray(fieldData));
      break;

    case "min":
      markLineValue = Math.min.apply(Math, _toConsumableArray(fieldData));
      break;

    case "average":
      var total = 0;
      fieldData.forEach(function (num) {
        total += num;
      });
      markLineValue = total / fieldData.length;
      break;

    default:
      break;
  }

  return markLineValue;
}
/**
 * 构造警戒线data数据
 * @param chartOptions
 * @param line
 * @param chartData
 * @param options
 * @param axis
 */


function createWarningLineData(chartOptions, line, chartData, options, axis) {
  var _handleMarkLineMetric = handleMarkLineMetricRange(chartData, chartOptions, options, line),
      axisValue = _handleMarkLineMetric.axisValue,
      labelValue = _handleMarkLineMetric.labelValue;

  var optJson = {
    lineStyle: {
      normal: {
        width: 1,
        type: "dashed",
        color: line.color
      }
    },
    label: {
      formatter: function formatter(param) {
        var value = labelValue;

        if (line.is_title && line.is_value) {
          return line.title + "：" + value;
        } else {
          return line.is_title ? line.title : value;
        }
      }
    }
  };

  if (axis === "x") {
    optJson.yAxis = axisValue;
  } else {
    optJson.xAxis = axisValue;
  }

  return optJson;
}
/**
 * 警戒线配置
 * @param chartOptions
 * @param chartData
 * @param options
 * @param axis 警戒线在x轴/y轴
 */


function warningLine(chartOptions, chartData, options) {
  var axis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "x";
  var warningOpt = {
    silent: true,
    symbol: [],
    label: {
      position: "middle" // 数值显示在中间

    },
    data: []
  }; // 判断存在字段，列表分析没有该字段和警戒线功能

  if (options.warningLine) {
    options.warningLine.forEach(function (item) {
      // 警戒线markLine属性添加在series[0]中
      var dateItem = createWarningLineData(chartOptions, item, chartData, options, axis);

      if (!chartOptions.series[0].markLine) {
        // 警戒线前置配置
        chartOptions.series[0].markLine = warningOpt;
      }

      chartOptions.series[0].markLine.data.push(dateItem);
    });
  }
}
/**
 * 字体设置
 * @param options
 */


function fontSetting(options) {
  var defaultColor = "#304265";
  return options.fontColor ? options.fontColor : defaultColor;
}
/**
 * 处理大数据
 * @param chart
 * @param chartOptions
 * @param container
 * @param chartDatas
 * @param options
 */


function handleBigData(chart, chartOptions, container, chartDatas, options) {
  var isArray = chartDatas instanceof Array;
  var chartData;
  var otherChartData = isArray ? chartDatas[1] : null;
  chartData = isArray ? chartDatas[0] : chartDatas;
  chartData.data = chartOptions.dataset.source;

  if (chartData.dimensionLength > chartData.maxDimension) {
    container.style.position = "relative";
    var div = document.createElement("div");
    var scrollDirection = "X"; // 判断是否为横向出现滚动条

    if (!options.direction || ["bottom", "top"].includes(options.direction)) {
      div.style.width = chartData.dimensionLength / chartData.maxDimension * 100 + "%";
      div.style.height = "1px";
      scrollDirection = "X";
    } else {
      div.style.height = chartData.dimensionLength / chartData.maxDimension * 100 + "%";
      div.style.width = "1px";
      scrollDirection = "Y";
    }

    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = "0px";
    div.style.zIndex = "-1";
    container.appendChild(div);
    var warp = container.firstChild;
    warp.style.position = "absolute";
    warp.style.top = "0px";
    warp.style.left = "0px"; // 监听滚动条方向

    var pi = 0;
    container.addEventListener("scroll", function (e) {
      // 判断滚动条生成方向，X or Y方向
      if (scrollDirection == "X") {
        var left = container.scrollLeft;
        var width = e.target.clientWidth;
        warp.style.left = left + "px";
        pi = Math.round(left / width * chartData.maxDimension);
        pi = isNaN(pi) ? 0 : pi;
        chartOptions.dataset.source = chartData.data.slice(pi, chartData.maxDimension + pi);
      } else {
        var top = container.scrollTop;
        var height = e.target.clientHeight;
        warp.style.top = top + "px";
        pi = Math.round(top / height * chartData.maxDimension);
        pi = isNaN(pi) ? 0 : pi;
        chartOptions.dataset.source = chartData.data.slice(pi, chartData.maxDimension + pi);
      }

      chartData.index = pi;

      if (otherChartData) {
        otherChartData.index = pi;
      }

      chart.setOption(chartOptions);
    }, false);
  }

  chartOptions.dataset.source = chartData.data.slice(0, chartData.maxDimension);
}
/**
 * 解析图表数据
 */


function analysisChartData(params, options) {
  var linkageList = [];
  var dimensionData = {
    field: options.dimension,
    formula: _filterType.StringType.Equal,
    text: params.name === "未知" ? [""] : [params.name]
  };

  if (params.componentSubType === "scatter") {
    dimensionData.text = params.value.slice(-2, -1);
  }

  linkageList.push(dimensionData); // 判断是否有groupDimension，有则为2维，无则1维

  if (options.groupDimension) {
    var groupDimensionData = {
      field: options.groupDimension,
      formula: _filterType.StringType.Equal,
      text: params.seriesName === "未知" ? [""] : [params.seriesName]
    };
    linkageList.push(groupDimensionData);
  }

  return linkageList;
}
/**
 * 获取图表数据
 */


function getMapJson(api, code) {
  // 不足六位，补齐0
  var key = (0, _string.makeStr)(code, "0", 6);
  return new Promise(function (resolve, reject) {
    api.getMapJson(key).then(function (res) {
      resolve(res);
    }).catch(function (res) {}).finally(function () {});
  });
}
/**
 * 根据指定地址，获取地址面包屑
 * @param list
 * @param target
 * @param top
 */


function getAddressLink(list, target, top) {
  top.level = 0;
  var his = [top]; // 缓存数据,减少循环

  var flag = false;

  var rev = function rev(data, size, parent) {
    for (var i = 0, length = data.length; i < length; i++) {
      if (flag) return;
      var item = data[i];
      item.level = parent.level + 1;

      if (item.code == size.code) {
        his.splice(parent.level + 1, his.length);
        his.push({
          code: item.code,
          name: item.name
        });
        flag = true;
        return;
      } else {
        if (!!item.children) {
          his[item.level] = {
            code: item.code,
            name: item.name
          };
          rev(item.children, size, item);
        }
      }
    }
  };

  rev(list, target, top);
  return his;
}
/**
 *
 * 设置全局windos时间监听
 */


function newDataZoomEvent(uid, params) {
  var myEvent = new CustomEvent("DatazoomChange-".concat(uid), {
    detail: params
  }); // 随后在对应的元素上触发该事件

  if (window.dispatchEvent) {
    window.dispatchEvent(myEvent);
  } else {
    window.fireEvent(myEvent);
  }
} // function () {}

/**
 * 节流
 */
// function


var _default = {
  viewOptions: viewOptions,
  legendSetting: legendSetting,
  metricRangeMatrixing: metricRangeMatrixing,
  numericalFormatting: numericalFormatting,
  warningLine: warningLine,
  fontSetting: fontSetting,
  handleBigData: handleBigData,
  analysisChartData: analysisChartData,
  getMaxMetricLength: getMaxMetricLength,
  getDataZoom: getDataZoom,
  newDataZoomEvent: newDataZoomEvent,
  getMapJson: getMapJson,
  getAddressLink: getAddressLink // 获取地址链路

};
exports.default = _default;