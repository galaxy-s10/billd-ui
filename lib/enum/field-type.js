"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BizDataType = void 0;
// 数据项的逻辑类型
var BizDataType;
exports.BizDataType = BizDataType;

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
})(BizDataType || (exports.BizDataType = BizDataType = {}));