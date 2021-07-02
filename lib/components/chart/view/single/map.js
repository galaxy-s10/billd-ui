"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _number = require("../../../../utils/number");

var _view = require("../../utils/view");

var _options = require("../options");

var _filterType = require("../../../../enum/filter-type");

var _string = require("../../../../utils/string");

var _pcaCode = _interopRequireDefault(require("../../../../enum/pca-code"));

var _map = require("../../../../enum/map");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制地图图表
 * @param chartOptions
 * @param options
 * @param chartData
 * @param vm
 * @param eChartInstance
 */
function mapOptions(chartOptions, options, chartData) {
  var vm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var eChartInstance = arguments.length > 4 ? arguments[4] : undefined;
  var metricFormatOptions = options.metric && options.metric[0] && options.metric[0].options && options.metric[0].options.numberFormat ? options.metric[0].options.numberFormat : {
    comma: false,
    fraction: 0,
    percent: false
  };

  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    tooltip: {
      trigger: "item",
      formatter: function formatter(params) {
        var name = params.name;
        var value = params.name !== "南海诸岛" ? params.value : "";

        if (params.name === "南海诸岛") {
          return "".concat(name);
        }

        value = value ? (0, _number.convertNumber)(value, metricFormatOptions) : value;
        return "".concat(value, " <br /> ").concat(name);
      }
    },
    grid: {
      top: 10,
      right: 10,
      left: 10,
      bottom: 10
    },
    series: getSeries(options, chartData, eChartInstance)
  }),
      tooltip = _viewOptions.tooltip,
      series = _viewOptions.series,
      grid = _viewOptions.grid;

  _extends(chartOptions, {
    tooltip: tooltip,
    series: series,
    grid: grid,
    visualMap: getVisualMap(options, chartData),
    graphic: getGraphic(options, chartData, vm)
  });

  delete chartOptions.dataset;
  delete chartOptions.color;
  delete chartOptions.legend;
  return chartOptions;
}
/**
 * 获取映射
 * @param options
 * @param chartData
 * @param vm
 */


function getGraphic(options, chartData, vm) {
  var country = {
    code: "100000",
    name: "全国"
  }; // 面包屑

  var link = options.mapSource.code === country.code ? [country] : (0, _view.getAddressLink)(_pcaCode.default, options.mapSource, country);
  var textList = [];
  var leftLength = 0;
  link.forEach(function (item, index) {
    var name = (index === 0 ? "" : " / ") + item.name;
    var textItem = {
      type: "text",
      left: (index === 2 ? leftLength - 5 : leftLength) + "px",
      top: 0,
      style: {
        text: name,
        textAlign: "center",
        fill: link.length === index + 1 ? _options.fontColor : "#107FFF",
        font: '12px "Microsoft YaHei", sans-serif'
      },
      onclick: function onclick() {
        if (link.length !== index + 1 && options.mapDrill && options.mapDrill.drill !== "disabled") {
          vm.clickChart([{
            field: options.dimension,
            formula: _filterType.StringType.Equal,
            text: item.code
          }], {
            data: item
          });
        }
      }
    };
    leftLength += (0, _string.getStrLen)(name) * 6; // 计算

    textList.push(textItem);
  });
  return [{
    type: "group",
    left: "right",
    top: 10,
    children: textList.length > 1 ? textList : [] // children: textList

  }];
}
/**
 * 获取映射
 * @param options
 * @param chartData
 */


function getVisualMap(options, chartData) {
  var mapArea = options.mapArea,
      mapDigitalSet = options.mapDigitalSet,
      mapDrill = options.mapDrill,
      mapTheme = options.mapTheme;
  var maxMetric = chartData.maxMetric,
      minMetric = chartData.minMetric;
  var max = minMetric === maxMetric ? (maxMetric ? maxMetric : 0) + 1 : maxMetric;
  var min = minMetric ? minMetric : 0;
  return {
    type: "continuous",
    min: min,
    max: max,
    top: 0,
    text: [max, min],
    show: true,
    realtime: false,
    calculable: true,
    inRange: {
      color: _map.mapColorOptions[mapTheme.theme] ? _map.mapColorOptions[mapTheme.theme].mainColor : _map.mapColorOptions.pro.mainColor
    },
    outOfRange: {
      color: ["#ECF0F6"]
    }
  };
}
/**
 * 获取系列列表，每个系列通过 type 决定自己的图表类型
 * @param options
 * @param chartData
 * @param eChartInstance
 */


function getSeries(options, chartData, eChartInstance) {
  var mapName = chartData.mapName,
      data = chartData.data,
      dimensionArray = chartData.dimensionArray,
      mapJson = chartData.mapJson,
      maxDimension = chartData.maxDimension,
      maxMetric = chartData.maxMetric,
      minMetric = chartData.minMetric;
  var mapArea = options.mapArea,
      mapDigitalSet = options.mapDigitalSet,
      mapDrill = options.mapDrill,
      mapTheme = options.mapTheme;
  var theme = _map.mapColorOptions[mapTheme.theme] ? _map.mapColorOptions[mapTheme.theme] : _map.mapColorOptions.pro.mainColor;
  var wrapWidth = eChartInstance.getWidth();
  var wrapHeight = eChartInstance.getHeight();
  var metricFormatOptions = options.metric && options.metric[0] && options.metric[0].options && options.metric[0].options.numberFormat ? options.metric[0].options.numberFormat : {
    comma: false,
    fraction: 0,
    percent: false
  };
  var size = mapName === "海南" ? "500%" : "110%";
  var center = mapName === "海南" ? ["110%", "260%"] : ["50%", "50%"];
  var fontSize = wrapHeight < 300 ? 8 : wrapHeight > 500 && wrapWidth > 500 ? 12 : 10;
  var optionData = [{
    type: "map",
    roam: true,
    mapType: mapName === "全国" ? "china" : mapName,
    data: data,
    layoutCenter: center,
    layoutSize: size,
    aspectScale: 0.75,
    label: {
      show: true,
      fontSize: fontSize,
      formatter: function formatter(params) {
        var name = options.mapDigitalSet.displayDimension ? params.name : "";
        var value = params.value;

        if (!options.mapDigitalSet.displayMetric) {
          return "".concat(name);
        }

        if (params.name === "南海诸岛") {
          return "".concat(name);
        }

        if (value || value === 0) {
          value = (0, _number.convertNumber)(value, metricFormatOptions);
          return "".concat(value, " \n ").concat(name, " ");
        } else {
          return "";
        }
      }
    },
    itemStyle: {
      borderColor: theme.borderColor,
      areaColor: theme.mainColor,
      borderWidth: theme.borderWidth
    },
    emphasis: {
      label: {
        show: true,
        color: _options.black
      },
      itemStyle: {
        areaColor: theme.hoverColor,
        borderWidth: theme.hoverBorderWidth,
        borderColor: theme.hoverBorderColor
      }
    }
  }];
  return optionData;
}

var _default = mapOptions;
exports.default = _default;