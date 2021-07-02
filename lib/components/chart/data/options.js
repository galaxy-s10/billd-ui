"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.maxFunnelGroup = exports.maxGroup = exports.maxDimensionColumns = exports.maxDimension = void 0;
var maxDimension = 10; // 最大维度显示个数

exports.maxDimension = maxDimension;
var maxDimensionColumns = 50; // 最大维度显示数

exports.maxDimensionColumns = maxDimensionColumns;
var maxGroup = 20; // 最大维度

exports.maxGroup = maxGroup;
var maxFunnelGroup = 10; // 最大漏斗维度值

exports.maxFunnelGroup = maxFunnelGroup;
var _default = {
  maxDimension: maxDimension,
  maxDimensionColumns: maxDimensionColumns,
  maxGroup: maxGroup,
  maxFunnelGroup: maxFunnelGroup
};
exports.default = _default;