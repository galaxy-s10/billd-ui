"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilters = handleFilters;
exports.handleSchemaModal = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    var schemaCode = item.associationCode;
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
      visible: item.visible,
      specialType: item.specialType || "",
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