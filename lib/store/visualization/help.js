"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilters = handleFilters;
exports.handleSchemaModal = void 0;

/**
 * 氚云数据特殊处理
 */
// 数据项的逻辑类型
var BizDataType;

(function (BizDataType) {
  // 空值
  BizDataType[BizDataType["Unspecified"] = -1] = "Unspecified"; // 逻辑型

  BizDataType[BizDataType["Bool"] = 1] = "Bool"; // 日期型

  BizDataType[BizDataType["DateTime"] = 5] = "DateTime"; // 双精度数值型

  BizDataType[BizDataType["Double"] = 7] = "Double"; // 整数

  BizDataType[BizDataType["Int"] = 9] = "Int"; // 长整数

  BizDataType[BizDataType["Long"] = 11] = "Long"; // 长文本

  BizDataType[BizDataType["String"] = 13] = "String"; // 短文本

  BizDataType[BizDataType["ShortString"] = 14] = "ShortString"; // 二进制流

  BizDataType[BizDataType["ByteArray"] = 20] = "ByteArray"; // 图片类型

  BizDataType[BizDataType["Image"] = 23] = "Image"; // 未指定类型的附件

  BizDataType[BizDataType["File"] = 24] = "File"; // 时间段型

  BizDataType[BizDataType["TimeSpan"] = 25] = "TimeSpan"; // 参与者（单人）

  BizDataType[BizDataType["Unit"] = 26] = "Unit"; // 参与者（多人）

  BizDataType[BizDataType["UnitArray"] = 27] = "UnitArray"; // Html

  BizDataType[BizDataType["Html"] = 30] = "Html"; // Xml

  BizDataType[BizDataType["Xml"] = 32] = "Xml"; // 业务对象

  BizDataType[BizDataType["BizObject"] = 40] = "BizObject"; // 业务对象数组

  BizDataType[BizDataType["BizObjectArray"] = 41] = "BizObjectArray"; // 业务结构

  BizDataType[BizDataType["BizStructure"] = 42] = "BizStructure"; // 业务结构数组

  BizDataType[BizDataType["BizStructureArray"] = 43] = "BizStructureArray"; // 关联到其他的对象，这种字段在表单上通常是以开窗查询的形式出现

  BizDataType[BizDataType["Association"] = 50] = "Association"; // 关联对象数组

  BizDataType[BizDataType["AssociationArray"] = 51] = "AssociationArray"; // 地图类型,存json格式：{Address:"",Point:{lat:32323.43,lng:323.232}}

  BizDataType[BizDataType["Map"] = 55] = "Map"; // 地址类型,存json格式:{"Province":"福建省","City":"泉州市","Town":"惠安县","Detail":"32323"}

  BizDataType[BizDataType["Address"] = 56] = "Address"; // 公式型控件

  BizDataType[BizDataType["Formula"] = 57] = "Formula";
})(BizDataType || (BizDataType = {}));
/**
 * 处理数据类型
 * @param type
 */


var handleSchemaType = function handleSchemaType(type) {
  var fieldType = '';

  switch (type) {
    case BizDataType.Unit:
    case BizDataType.String:
    case BizDataType.ShortString:
    case BizDataType.Address:
      fieldType = 'string';
      break;

    case BizDataType.DateTime:
      fieldType = 'date';
      break;

    case BizDataType.Int:
    case BizDataType.Long:
    case BizDataType.Double:
      fieldType = 'number';
      break;

    default:
      fieldType = 'other';
      break;
  }

  return fieldType;
};

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
  var relation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var fields = [];
  schemaCodes.push(schema.SchemaCode);
  schema.Properties.forEach(function (item) {
    if (!relation && [BizDataType.Association, BizDataType.BizObject, BizDataType.BizObjectArray].includes(item.DataType) || relation === 1 && [BizDataType.BizObject, BizDataType.BizObjectArray].includes(item.DataType)) {
      var schemaCode = item.AssociationSchemaCode !== '' ? item.AssociationSchemaCode : item.Name;

      if (!schemaCodes.includes(schemaCode)) {
        var relationSchema = relationSchemas.find(function (relation) {
          return relation.SchemaCode === schemaCode;
        });

        if (relationSchema) {
          relationFields = relationFields.concat(groupSchema(relationSchema, relationSchemas, item.DisplayName, relation + 1));
        }
      }
    }

    if (['Status', 'ObjectId', 'WorkflowInstanceId', 'IconId', 'ParentObjectId'].includes(item.Name)) {
      item.Visible = false;
    }

    var type = handleSchemaType(item.DataType);

    if (type) {
      var field = {
        uid: '',
        parentSchemaCode: schema.ParentSchemaCode,
        schemaCode: schema.SchemaCode,
        tableName: tableName || schema.DisplayName,
        tableId: schema.TableName,
        field: item.Name,
        name: item.DisplayName,
        dataType: item.DataType,
        visible: item.Visible,
        type: type,
        options: {}
      };
      fields.push(field);
    }
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
  var fields = groupSchema(schemaModel.Schema, schemaModel.RelationSchemas);
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