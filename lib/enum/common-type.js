"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelationTypeList = exports.DirectionList = exports.PositionList = exports.RelationType = exports.DirectionType = exports.PositionType = void 0;
var PositionType;
exports.PositionType = PositionType;

(function (PositionType) {
  PositionType["Top"] = "top";
  PositionType["Bottom"] = "bottom";
  PositionType["Left"] = "left";
  PositionType["Right"] = "right";
})(PositionType || (exports.PositionType = PositionType = {}));

var DirectionType;
exports.DirectionType = DirectionType;

(function (DirectionType) {
  DirectionType["Crosswise"] = "crosswise";
  DirectionType["Endwise"] = "endwise";
  DirectionType["LeftBank"] = "leftBank";
  DirectionType["RightBank"] = "rightBank";
})(DirectionType || (exports.DirectionType = DirectionType = {}));

var RelationType;
exports.RelationType = RelationType;

(function (RelationType) {
  RelationType["Left"] = "left";
  RelationType["Right"] = "right";
  RelationType["Inner"] = "inner";
})(RelationType || (exports.RelationType = RelationType = {}));

var PositionList = [{
  label: '底部',
  value: PositionType.Bottom
}, {
  label: '顶部',
  value: PositionType.Top
}, {
  label: '左边',
  value: PositionType.Left
}, {
  label: '右边',
  value: PositionType.Right
}];
exports.PositionList = PositionList;
var DirectionList = [{
  label: '横向',
  value: DirectionType.Crosswise
}, {
  label: '纵向',
  value: DirectionType.Endwise
}, {
  label: '左倾斜',
  value: DirectionType.LeftBank
}, {
  label: '右倾斜',
  value: DirectionType.RightBank
}];
exports.DirectionList = DirectionList;
var RelationTypeList = [{
  label: '左连接',
  value: RelationType.Left
}, {
  label: '右链接',
  value: RelationType.Right
}, {
  label: '内连接',
  value: RelationType.Inner
}];
exports.RelationTypeList = RelationTypeList;