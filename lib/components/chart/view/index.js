"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.chartView = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/bar");

require("echarts/lib/chart/line");

require("echarts/lib/chart/pie");

require("echarts/lib/chart/funnel");

require("echarts/lib/chart/radar");

require("echarts/lib/chart/scatter");

require("echarts/lib/chart/map");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/title");

require("echarts/lib/component/legend");

require("echarts/lib/component/markLine");

require("echarts/lib/component/legendScroll");

require("echarts/lib/component/dataZoom");

require("echarts/lib/component/visualMap");

require("echarts/lib/component/graphic");

require("echarts/lib/component/geo");

var _data = require("../data");

var _view = require("../utils/view");

var _chartType = require("../../../enum/chart-type");

var _specialMap = require("../../../enum/special-map");

var _single = _interopRequireDefault(require("./single"));

var _composite = _interopRequireDefault(require("./composite"));

var _localforage = _interopRequireDefault(require("../../../instance/localforage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

/**
 * 获取图表实例
 * @param container
 * @param options
 * @param vm
 * @param showDataZoom  // 获取默认是否大数据配置 todo 老统计分析不上datazoom 后期可以优化掉
 */
var chartView = function chartView(container, options, vm) {
  var showDataZoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var extendData, _options$mapSource, name, code, mapJson, chartData, isBigData, bigDataOption, animate, isScrollY, isScrollX;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(options.mapSource && isMapType(options))) {
              _context.next = 6;
              break;
            }

            _options$mapSource = options.mapSource, name = _options$mapSource.name, code = _options$mapSource.code;
            _context.next = 4;
            return getMapJsonByStorage(vm.api, code);

          case 4:
            mapJson = _context.sent;

            _echarts.default.registerMap(name === "全国" ? "china" : name, mapJson);

          case 6:
            chartData = (0, _data.handleData)(options);
            isBigData = false;

            if (!showDataZoom) {
              bigDataOption = getDefaultBigData(chartData, options);
              animate = bigDataOption.animate, isScrollY = bigDataOption.isScrollY, isScrollX = bigDataOption.isScrollX;
              isBigData = bigDataOption.isBigData;
              vm.isScrollY = isScrollY;
              vm.isScrollX = isScrollX;
            }

            return _context.abrupt("return", new Promise(function (resolve) {
              vm.$nextTick(function () {
                if (!vm.$refs.chartBody) return;
                var echart = getEchart(vm, showDataZoom, chartData, isBigData, options);
                console.log(echart);
                console.log('------echart');
                resolve(echart);
              });
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};
/**
 * 获取地图json
 * @param name
 * @param code
 */


exports.chartView = chartView;

function getMapJsonByStorage(fetchApi, code) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var mapJson;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _localforage.default.getItem(code);

          case 2:
            mapJson = _context2.sent;

            if (mapJson) {
              _context2.next = 8;
              break;
            }

            _context2.next = 6;
            return (0, _view.getMapJson)(fetchApi, code);

          case 6:
            mapJson = _context2.sent;

            _localforage.default.setItem(code, mapJson);

          case 8:
            return _context2.abrupt("return", mapJson);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}
/**
 * 生成echart实例
 * @param vm
 * @param showDataZoom
 * @param chartData
 * @param isBigData
 * @param options
 */


function getEchart(vm, showDataZoom, chartData, isBigData, options) {
  var echart = _echarts.default.init(vm.$refs.chartBody, null, {
    renderer: "canvas"
  });

  var defaultOptions = getDefaultOptions(true, chartData, options);

  var chartsMap = _extends({}, _single.default, _composite.default);

  var chartOptions = chartsMap[options.type](defaultOptions, options, chartData, vm, echart);
  var myZoom;

  if (!showDataZoom && isBigData) {
    (0, _view.handleBigData)(echart, chartOptions, vm.$refs.scroll.$el.querySelector(".h3-scroll__content"), chartData, options);
  }

  if (chartOptions) {
    echart.setOption(chartOptions);
  }

  echart.on("click", function (params) {
    if (allowClick(params, options)) {
      vm.clickChart((0, _view.analysisChartData)(params, options), params);
    }
  });

  if (isMapType(options)) {
    var tmpSize;
    echart.on("georoam", function (params) {
      // 移动时屏蔽
      if (params.dy || params.dx) {
        return;
      }

      var chartOption = echart.getOption();
      var _zoom = chartOption.series[0].zoom;
      var fontSize = chartOption.series[0].label.fontSize;

      if (!tmpSize) {
        tmpSize = fontSize;
      }

      var value = Math.floor(tmpSize * _zoom * 0.9);
      fontSize = value > 18 ? 18 : value < 8 ? 8 : value; // if (myZoom == _zoom) {
      //   return;
      // }
      // if (_zoom > myZoom) {
      //   if (fontSize + 1 > 20) {
      //     fontSize = 20;
      //   } else {
      //     fontSize = fontSize + 1;
      //   }
      // } else {
      //   if (fontSize - 1 < 8) {
      //     fontSize = 8;
      //   } else {
      //     fontSize = fontSize - 1;
      //   }
      // }

      echart.setOption({
        series: {
          label: {
            fontSize: fontSize
          }
        }
      });
      myZoom = _zoom;
    });
  } // 图表滚动条的保存提供数据


  if (showDataZoom) {
    echart.on("datazoom", function (params) {
      options.uid && (0, _view.newDataZoomEvent)(options.uid, params);
    });
  }

  return echart;
}
/**
 * 处理图表点击事件
 * @param params
 * @param options
 */


function allowClick(params, options) {
  if (params.componentType === "graphic") {
    return false;
  }

  if (options.type === _chartType.ElementType.MAP && params.data) {
    var data = params.data;

    if (_specialMap.SpecialCity.includes(data.code)) {
      return false;
    }

    if (data.code && data.code.slice(4, 6) !== "00") {
      return false;
    }

    if (options.mapDrill && options.mapDrill.drill) {
      var drill = options.mapDrill.drill;

      if (drill === "province" && data.code.slice(2, 6) !== "0000") {
        return false;
      }

      if (drill === "disabled") {
        return false;
      }
    }
  }

  return true;
}
/**
 * 获取图表的默认参数
 * @param animate
 * @param chartData
 * @param options
 */


function getDefaultOptions(animate, chartData, options) {
  var defaultOptions = (0, _view.viewOptions)(options, chartData, {
    grid: "default",
    legend: "default",
    dataset: "default",
    color: "default",
    animation: animate
  });
  (0, _view.legendSetting)(defaultOptions, options); // 图例设置

  return defaultOptions;
}
/**
 * 获取大数据的默认配置参数
 * @param chartData 图标数据
 * @param options 图标配置项
 */


function getDefaultBigData(chartData, options) {
  var isArray = chartData instanceof Array; // 如果是数组的话先判断第一个是否超出, 未超出的话

  var targetChartData = isArray ? chartData[0] : chartData;
  var animate = true;
  var isBigData = false;
  var isScrollY = true;
  var isScrollX = true; // 类型包含

  if ([_chartType.ElementType.BAR, _chartType.ElementType.STRIPE, _chartType.ElementType.LINE, _chartType.ElementType.AREA, _chartType.ElementType.BIAX].includes(options.type) && targetChartData.dimensionLength > targetChartData.maxDimension) {
    animate = false;
    isBigData = true;
  } else {
    isScrollY = false;
    isScrollX = false;
  }

  if (![_chartType.ElementType.TABLE, _chartType.ElementType.LIST, _chartType.ElementType.CARD].includes(options.type)) {
    isScrollY = false;
  }

  return {
    animate: animate,
    isBigData: isBigData,
    isScrollY: isScrollY,
    isScrollX: isScrollX
  };
}
/**
 * 依据当前数据，判断是否为地图类型
 * @param options
 */


var isMapType = function isMapType(options) {
  return options.type === "map";
};

var _default = chartView;
exports.default = _default;