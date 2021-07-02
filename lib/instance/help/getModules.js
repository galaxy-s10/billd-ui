"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMainType = exports.role = exports.chartDMLimit = exports.defaultOptions = exports.getChartModulesGroups = exports.getBaseModules = void 0;

var _chartType = require("../../enum/chart-type");

var _chartModulesType = require("../../enum/chart-modules-type");

var _colors = require("../../enum/colors");

var _elementTools = require("../../enum/element-tools");

var _chartModulesName, _defaultOptions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { getColorByTheme } from "../../enum/map";

/**
 * 获取基础图表类型的配置项
 * @param chartType 图表类型
 */
var getBaseModules = function getBaseModules() {
  var chartType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _chartType.ElementType.BAR;
  var moduleOptions = JSON.parse(JSON.stringify(BaseModules));
  var realType = getMainType(chartType);
  chartModulesName[realType].forEach(function (m) {
    if (defaultOptions[m]) {
      moduleOptions[m] = JSON.parse(JSON.stringify(defaultOptions[m]));
    }
  });

  switch (realType) {
    // 柱状图 折线图
    case _chartType.ElementType.BAR:
    case _chartType.ElementType.LINE:
      break;
    // 饼图

    case _chartType.ElementType.PIE:
      // moduleOptions[ModuleType.Legend].default ={}
      break;
    // 雷达图

    case _chartType.ElementType.RADAR:
      break;
    // 透视图

    case _chartType.ElementType.TABLE:
      moduleOptions[_chartModulesType.ModuleType.Dimension].title = "行维度";
      moduleOptions[_chartModulesType.ModuleType.Dimension].tip = "【行维度】是对透视表行数据做分类的依据";
      break;
    // 指标图

    case _chartType.ElementType.CARD:
      var dataChange = function dataChange(chart, chartModules) {
        if (chart.data.dimension.length === 0) {
          if (chartModules[_chartModulesType.ModuleType.Limit]) {
            chartModules[_chartModulesType.ModuleType.Limit].display = false;
          }

          if (chartModules[_chartModulesType.ModuleType.Limit]) {
            chartModules[_chartModulesType.ModuleType.Sort].display = false;
          }
        } else {
          chartModules[_chartModulesType.ModuleType.Limit].display = true;
          chartModules[_chartModulesType.ModuleType.Sort].display = true;
        }
      };

      moduleOptions[_chartModulesType.ModuleType.Dimension].change = dataChange;
      moduleOptions[_chartModulesType.ModuleType.Metric].change = dataChange;
      break;
    // 漏斗图

    case _chartType.ElementType.FUNNEL:
      moduleOptions[_chartModulesType.ModuleType.Sort].display = false;
      break;
    // 气泡图

    case _chartType.ElementType.SCATTER:
      break;
    // 双轴图

    case _chartType.ElementType.BIAX:
      break;

    case _chartType.ElementType.MAP:
      moduleOptions[_chartModulesType.ModuleType.Dimension].supportedTypes = ["address"]; // console.log("mapOptions:", moduleOptions[ModuleType.ChartSwitch]);

      break;

    default:
      break;
  }

  return moduleOptions;
};
/**
 * 各个图表所拥有的模块
 * 格式说明:
 */


exports.getBaseModules = getBaseModules;
var chartModulesName = (_chartModulesName = {}, _defineProperty(_chartModulesName, _chartType.ElementType.BAR, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.Limit, _chartModulesType.ModuleType.DataLabel, _chartModulesType.ModuleType.AxisX, _chartModulesType.ModuleType.MetricRange, _chartModulesType.ModuleType.AxisYSet, _chartModulesType.ModuleType.SplitLine, _chartModulesType.ModuleType.DataZoom]), _defineProperty(_chartModulesName, _chartType.ElementType.LINE, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.Limit, _chartModulesType.ModuleType.DataLabel, _chartModulesType.ModuleType.AxisX, _chartModulesType.ModuleType.MetricRange, _chartModulesType.ModuleType.AxisYSet, _chartModulesType.ModuleType.SplitLine, _chartModulesType.ModuleType.DataZoom]), _defineProperty(_chartModulesName, _chartType.ElementType.PIE, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.DimensionLimit, _chartModulesType.ModuleType.MultipleDataLabel]), _defineProperty(_chartModulesName, _chartType.ElementType.RADAR, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.Limit, _chartModulesType.ModuleType.DataLabel, _chartModulesType.ModuleType.MetricRange]), _defineProperty(_chartModulesName, _chartType.ElementType.TABLE, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.GroupDimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.OrderNumber, _chartModulesType.ModuleType.FreezeHead]), _defineProperty(_chartModulesName, _chartType.ElementType.CARD, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Limit]), _defineProperty(_chartModulesName, _chartType.ElementType.FUNNEL, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.Limit, _chartModulesType.ModuleType.DataLabel]), _defineProperty(_chartModulesName, _chartType.ElementType.SCATTER, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.AxisYSet, _chartModulesType.ModuleType.SplitLine]), _defineProperty(_chartModulesName, _chartType.ElementType.BIAX, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.MultiMetricType, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.MetricGroup, _chartModulesType.ModuleType.Sort, _chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.AxisX, _chartModulesType.ModuleType.AxisYSet, _chartModulesType.ModuleType.SplitLine, _chartModulesType.ModuleType.DataZoom]), _defineProperty(_chartModulesName, _chartType.ElementType.MAP, [_chartModulesType.ModuleType.ChartSwitch, _chartModulesType.ModuleType.Dimension, _chartModulesType.ModuleType.Metric, _chartModulesType.ModuleType.MapTheme, _chartModulesType.ModuleType.MapArea, _chartModulesType.ModuleType.MapDrill, _chartModulesType.ModuleType.MapDigitalSet]), _chartModulesName);
/**
 * 初始化示例
 */

var BaseModules = {
  chartSwitch: {
    display: true
  }
};
/**
 * 获取模块组
 */

var getModulesGroup = function getModulesGroup(title, childModules) {
  return {
    title: title,
    display: true,
    isGroup: true,
    childModules: childModules
  };
};
/***
 * 获取按照模块分组以后的功能模块模块群
 */


var getChartModulesGroups = function getChartModulesGroups(modules) {
  // todo 外抛此配置
  var groupOtions = [{
    title: "样式配置",
    key: "styleOption",
    childModules: [_chartModulesType.ModuleType.Theme, _chartModulesType.ModuleType.Legend, _chartModulesType.ModuleType.Limit, _chartModulesType.ModuleType.DataLabel, _chartModulesType.ModuleType.MultipleDataLabel]
  }, {
    title: "X轴",
    key: "axisXOption",
    childModules: [_chartModulesType.ModuleType.AxisX]
  }, {
    title: "Y轴",
    key: "axisYOption",
    childModules: [_chartModulesType.ModuleType.MetricRange, _chartModulesType.ModuleType.AxisYSet, _chartModulesType.ModuleType.SplitLine]
  }, {
    title: "数值标签显示设置",
    key: "mapDigitalDisplaySet",
    childModules: [_chartModulesType.ModuleType.MapDigitalSet]
  }];
  var formateGroupModules = JSON.parse(JSON.stringify(modules));
  groupOtions.forEach(function (g) {
    if (g.childModules) {
      var childModules = {};
      g.childModules.forEach(function (m) {
        if (formateGroupModules[m]) {
          childModules[m] = formateGroupModules[m];
          delete formateGroupModules[m];
        }
      });

      if (Object.keys(childModules).length > 0) {
        formateGroupModules[g.key] = getModulesGroup(g.title, childModules);
      }
    }
  });
  return formateGroupModules;
};
/**
 * 每个功能模块的默认配置值
 */


exports.getChartModulesGroups = getChartModulesGroups;
var defaultOptions = (_defaultOptions = {}, _defineProperty(_defaultOptions, _chartModulesType.ModuleType.ChartSwitch, {
  display: true,
  title: "图表类型",
  default: _chartType.ElementType.BAR,
  parentNodeKey: "styles",
  disabled: []
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Dimension, {
  display: true,
  title: "维度",
  tip: "【维度】是对数据做分类的依据",
  max: 20,
  min: 0,
  supportedTypes: ["string", "date"],
  disabled: false,
  default: [],
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.GroupDimension, {
  display: true,
  title: "列维度",
  tip: "【列维度】是对透视表列数据做分类的依据",
  max: 20,
  min: 0,
  supportedTypes: ["string", "date"],
  disabled: false,
  default: [],
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Metric, {
  display: true,
  title: "指标",
  tip: "【指标】是要统计的数据，会根据【维度】中设置的分组方式进行汇总计算",
  max: 20,
  min: 0,
  supportedTypes: ["string", "number", "date"],
  disabled: false,
  default: [],
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MetricGroup, {
  display: true,
  title: "指标组合",
  tip: "指标描述",
  max: 2,
  data: [{
    display: true,
    title: "指标（左）",
    max: 20,
    min: 0,
    supportedTypes: ["string", "number", "date"]
  }, {
    display: true,
    title: "指标（右）",
    max: 20,
    min: 0,
    supportedTypes: ["string", "number", "date"]
  }],
  default: [[], []],
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Sort, {
  display: true,
  title: "排序",
  tip: "排序描述",
  max: 20,
  min: 0,
  moduleTypes: ["dimension", "groupDimension", "metric"],
  supportedTypes: ["string", "number", "date"],
  disabled: false,
  default: [],
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Theme, {
  display: true,
  title: "配色",
  default: _colors.anaiysisColors[0],
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Legend, {
  display: true,
  title: "图例",
  checked: true,
  position: "bottom",
  parentNodeKey: "styles",
  default: {
    checked: true,
    position: "bottom",
    displayAxisX: "",
    displayLabel: "",
    direction: ""
  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.Limit, {
  display: true,
  title: "数据保留",
  default: null,
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.DimensionLimit, {
  display: true,
  title: "数据保留",
  default: null,
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.DataLabel, {
  display: true,
  title: "数值标签",
  default: true,
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.AxisX, {
  display: true,
  title: "X轴",
  axisXTitle: "坐标轴",
  directionTitle: "文字方向",
  parentNodeKey: "styles",
  default: {
    displayAxisX: true,
    displayLabel: true,
    direction: "crosswise" // 方向

  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MetricRange, {
  display: true,
  title: "y轴最大值最小值",
  maxTitle: "最大值",
  minTitle: "最小值",
  parentNodeKey: "styles",
  default: {
    max: null,
    min: null // 最小值

  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.OrderNumber, {
  display: true,
  title: "序号",
  displayOrderName: false,
  checked: true,
  parentNodeKey: "styles",
  default: {
    checked: true,
    orderName: "序号" // 序号别名

  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.FreezeHead, {
  display: true,
  title: "冻结相关",
  rowTitle: "冻结行维度",
  columnTitle: "冻结列维度",
  displayRow: true,
  displayColumn: true,
  displayColumnNumber: false,
  parentNodeKey: "styles",
  default: {
    row: true,
    column: true,
    columnNumber: 0 // 列冻结数量

  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MultipleDataLabel, {
  display: true,
  title: "多种数值格式设置",
  dimensionLabelTitle: "维度标签",
  metricLabelTitle: "数值标签",
  percentLabelTitle: "占比标签",
  parentNodeKey: "styles",
  default: {
    dimensionLabel: true,
    metricLabel: true,
    percentLabel: true
  }
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.SplitLine, {
  display: true,
  title: "网格线",
  default: true,
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.AxisYSet, {
  display: true,
  title: "坐标轴",
  default: true,
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MultiMetricType, {
  display: true,
  title: "多种数据类型",
  default: ["bar", "line"],
  parentNodeKey: "styles",
  data: [{
    title: "左轴",
    options: ["bar", "line", "area", "pileBar"]
  }, {
    title: "右轴",
    options: ["bar", "line", "area", "pileBar"]
  }]
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.DataZoom, {
  display: false,
  title: "是否显示缩略轴",
  default: {
    show: true,
    start: 0,
    end: 100,
    theme: "light"
  },
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MapTheme, {
  display: true,
  title: "地图配色",
  default: {
    theme: "pro"
  },
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MapArea, {
  display: true,
  title: "显示范围",
  default: {
    area: "all"
  },
  parentNodeKey: "data"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MapDrill, {
  display: true,
  title: "地图钻取",
  default: {
    drill: "city"
  },
  parentNodeKey: "styles"
}), _defineProperty(_defaultOptions, _chartModulesType.ModuleType.MapDigitalSet, {
  display: true,
  title: "数值标签显示设置",
  dimensionTitle: "显示维度值",
  metricTitle: "显示指标值",
  default: {
    displayDimension: true,
    displayMetric: true
  },
  parentNodeKey: "styles"
}), _defaultOptions);
/**
 * 数据限制
 * [[[0],[1]],[[2],[3]]] 表示0维0指标及0维1指标，1维0指标及1维1指标
 */

exports.defaultOptions = defaultOptions;
var chartDMLimit = [[[_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.PIE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.CARD, _chartType.ElementType.FUNNEL, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX, _chartType.ElementType.MAP], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.PIE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.CARD, _chartType.ElementType.FUNNEL, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX, _chartType.ElementType.MAP], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX, _chartType.ElementType.MAP]], [[_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.PIE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.CARD, _chartType.ElementType.FUNNEL, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX, _chartType.ElementType.MAP], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.PIE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.CARD, _chartType.ElementType.FUNNEL, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX, _chartType.ElementType.MAP], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.BIAX]], [[_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX], [_chartType.ElementType.BAR, _chartType.ElementType.LINE, _chartType.ElementType.RADAR, _chartType.ElementType.TABLE, _chartType.ElementType.SCATTER, _chartType.ElementType.BIAX], [_chartType.ElementType.TABLE, _chartType.ElementType.SCATTER], [_chartType.ElementType.TABLE, _chartType.ElementType.SCATTER], [_chartType.ElementType.TABLE]], [[_chartType.ElementType.TABLE], [_chartType.ElementType.TABLE], [_chartType.ElementType.TABLE], [_chartType.ElementType.TABLE]]];
exports.chartDMLimit = chartDMLimit;
var role = [{
  // 角色键值
  key: "admin",
  // 角色名称
  name: "管理员",
  // 角色权重
  weight: 1,
  // 角色模块权限
  authority: {
    view: {
      Public: {
        add: true,
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.FULLSCREEN, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE, _elementTools.ToolsBarType.DRAG]
      },
      Person: {
        add: true,
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.FULLSCREEN, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE, _elementTools.ToolsBarType.DRAG]
      }
    },
    design: {
      Public: {
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE]
      },
      Person: {
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE]
      }
    }
  }
}, {
  // 角色键值
  key: "member",
  // 角色名称
  name: "成员",
  // 角色权重
  weight: 0,
  // 角色模块权限
  authority: {
    view: {
      Public: {
        add: false,
        rename: false,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.FULLSCREEN]
      },
      Person: {
        add: true,
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.FULLSCREEN, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE, _elementTools.ToolsBarType.DRAG]
      }
    },
    design: {
      Public: {
        rename: false,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT]
      },
      Person: {
        rename: true,
        tool: [_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT, _elementTools.ToolsBarType.EDIT, _elementTools.ToolsBarType.REMOVE]
      }
    }
  }
}];
/**
 * 获取主图表类型
 * @param t 图表类型
 */

exports.role = role;

var getMainType = function getMainType(t) {
  var type = t;

  switch (type) {
    case _chartType.ElementType.BAR:
    case _chartType.ElementType.PILEBAR:
    case _chartType.ElementType.STRIPE:
      type = _chartType.ElementType.BAR;
      break;

    case _chartType.ElementType.LINE:
    case _chartType.ElementType.AREA:
      type = _chartType.ElementType.LINE;
      break;

    default:
      break;
  }

  return type;
};

exports.getMainType = getMainType;
var _default = getBaseModules;
exports.default = _default;