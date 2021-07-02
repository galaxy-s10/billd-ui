"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilters = handleFilters;
exports.handleChartFieldDefaultValues = handleChartFieldDefaultValues;
exports.handleGlobalFilter = handleGlobalFilter;
exports.handleSchemaModal = exports.handleAnalysisResponse = void 0;

var _createChart = require("../../instance/element-modules/analysis/create-chart");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 处理返回数据
 * @param report
 */
var handleAnalysisResponse = function handleAnalysisResponse(report) {
  var elements = [];
  var chartsInfo = {};

  if (report.charts && report.charts.length) {
    report.charts.forEach(function (chart) {
      var element = chart.content;
      var chartInfo = {};
      chartInfo = _extends({
        updateDate: chart.updateDate,
        updateUser: chart.updateUser,
        updateUserName: chart.updateUserName
      }, chart.ownerChartInfo ? chart.ownerChartInfo : {});
      chartsInfo[element.uid] = chartInfo;
      element = (0, _createChart.createNewChart)(element.type, element);
      elements.push(element);
    });
  }

  console.log("chartsInfo", chartsInfo);
  return {
    objectId: report.objectId,
    elements: elements,
    reqGlobal: report.global.trim(),
    share: report.shareStatus,
    chartsInfo: chartsInfo
  };
};

exports.handleAnalysisResponse = handleAnalysisResponse;
var relationFields = [];
var schemaCodes = [];
/**
 * 数据分组
 * @param schema 表数据
 * @param relationSchemas 关联表数据
 * @param tableName  显示表名称
 * @param relation  是否关联表
 */

var groupSchema = function groupSchema(schema, relationSchemas) {
  var tableName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var relation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var fields = [];
  schemaCodes.push(schema.schemaCode);
  schema.properties.forEach(function (item) {
    var schemaCode = item.associationCode || item.name;
    if (schemaCodes.includes(schemaCode)) return;
    var relationSchema = relationSchemas.find(function (oRelation) {
      return oRelation.schemaCode === schemaCode;
    });

    if (relationSchema) {
      var _relationFields;

      (_relationFields = relationFields).push.apply(_relationFields, _toConsumableArray(groupSchema(relationSchema, relationSchemas, item.displayName, true)));
    }

    var field = {
      uid: "",
      schemaCode: schema.schemaCode,
      tableName: tableName || schema.displayName,
      tableId: schema.tableName,
      field: item.name,
      name: item.displayName,
      dataType: item.dataType,
      specialType: item.specialType || "",
      visible: item.visible,
      type: item.type.toLocaleLowerCase(),
      alias: "",
      needAlias: item.needAlias,
      relation: relation,
      options: {}
    };
    fields.push(field);
  });
  return fields;
};
/**
 * 处理数据
 * @param schemaModel 数据模型
 */


var handleSchemaModal = function handleSchemaModal(schemaModel) {
  relationFields = [];
  schemaCodes = [];
  var fields = groupSchema(schemaModel.schema, schemaModel.relationSchemas || []);
  relationFields.sort(function (prvField, nextField) {
    return prvField.tableName.localeCompare(nextField.tableName);
  });
  fields = fields.concat(relationFields);
  return fields;
};
/**
 * 处理过滤条件
 */


exports.handleSchemaModal = handleSchemaModal;

function handleFilters(schemas, filters) {
  var globalFilters = [];
  var filterItem;
  filters.forEach(function (param) {
    var field = schemas.find(function (schema) {
      return schema.schemaCode === param.schemaCode && schema.field === param.field;
    });

    if (field) {
      filterItem = {
        field: JSON.parse(JSON.stringify(field)),
        formula: param.formula,
        text: param.value
      };
      globalFilters.push(filterItem);
    }
  });
  return globalFilters;
}
/**
 * 处理图表字段同步数据源的字段默认值
 * @param elements
 * @param dataSources
 */


function handleChartFieldDefaultValues(elements, dataSources) {
  elements.forEach(function (element) {
    var chart = element;
    var chartData = chart.data;
    var chartFields = [];

    if (chart.dataSourceId && dataSources[chart.dataSourceId]) {
      var dataSourceFields = dataSources[chart.dataSourceId].properties;

      if (chartData.dimension && chartData.dimension.length) {
        chartFields.push.apply(chartFields, _toConsumableArray(chartData.dimension));
      }

      if (chartData.groupDimension && chartData.groupDimension.length) {
        chartFields.push.apply(chartFields, _toConsumableArray(chartData.groupDimension));
      }

      if (chartData.metric && chartData.metric.length) {
        chartFields.push.apply(chartFields, _toConsumableArray(chartData.metric));
      }

      if (chartData.sort && chartData.sort.length) {
        chartFields.push.apply(chartFields, _toConsumableArray(chartData.sort));
      }

      if (chartData.metricGroup && chartData.metricGroup.length) {
        chartData.metricGroup.forEach(function (metric) {
          chartFields.push.apply(chartFields, _toConsumableArray(metric));
        });
      }

      if (chartData.filter && chartData.filter.length) {
        chartData.filter.forEach(function (filter) {
          chartFields.push(filter.field);
        });
      }

      dataSourceFields.forEach(function (dataSourceField) {
        chartFields.forEach(function (chartField, index) {
          if (chartField.field === dataSourceField.field && chartField.schemaCode === dataSourceField.schemaCode) {
            _extends(chartField, dataSourceField, {
              uid: chartField.uid,
              alias: chartField.alias,
              options: chartField.options
            });
          }
        });
      });
    }
  });
}
/**
 * 获取完数据源之后处理全局筛选器
 * @param globalFilter
 * @param dataSources
 */


function handleGlobalFilter(globalFilter, dataSources) {
  return globalFilter.filter(function (i) {
    return dataSources.properties.find(function (d) {
      return d.schemaCode === i.field.schemaCode && d.field === i.field.field;
    });
  });
}