"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolBarMaps = exports.TabOptions = exports.NumberTagOptions = exports.LegendOptions = exports.sortOptions = exports.setOption = void 0;

var _elementTools = require("./element-tools");

var _moduleState = require("./module-state");

var _ToolBarMaps;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 工具栏confirm配置
 */
var deleteConfirm = {
  title: "确认要删除该图表吗?",
  okText: "确定",
  cancelText: "取消"
};
/**
 * 数值格式设置
 */

var setOption = {
  icon: "iconsetting-o",
  label: "数值格式"
};
/**
 * 图例默认选项
 */

exports.setOption = setOption;
var sortOptions = [{
  label: "默认",
  value: ""
}, {
  label: "升序",
  value: "asc"
}, {
  label: "降序",
  value: "desc"
}];
/**
 * 图例默认选项
 */

exports.sortOptions = sortOptions;
var LegendOptions = [{
  value: "hide",
  label: "隐藏"
}, {
  value: "bottom",
  label: "底部"
}, {
  value: "top",
  label: "顶部"
}, {
  value: "left",
  label: "左边"
}, {
  value: "right",
  label: "右边"
}];
/**
 * 数据标签选项
 */

exports.LegendOptions = LegendOptions;
var NumberTagOptions = [{
  value: 0,
  label: "隐藏"
}, {
  value: 1,
  label: "显示"
}];
/**
 * 数据标签选项
 */

exports.NumberTagOptions = NumberTagOptions;
var TabOptions = [{
  label: "公共",
  value: _moduleState.TabState.PUBLIC
}, {
  label: "个人",
  value: _moduleState.TabState.PERSON
}];
/**
 * 图表工具栏默认配置
 */

exports.TabOptions = TabOptions;
var ToolBarMaps = (_ToolBarMaps = {}, _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.EXPORT, {
  label: "导出Excel",
  value: _elementTools.ToolsBarType.EXPORT,
  icon: "icondownload-o",
  callBackName: ""
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.REFRESH, {
  label: "刷新",
  value: _elementTools.ToolsBarType.REFRESH,
  icon: "iconreload-o1",
  callBackName: _elementTools.ToolsBarType.REFRESH
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.NARROW, {
  label: "退出全屏",
  value: _elementTools.ToolsBarType.NARROW,
  icon: "iconfullscreen-restore-ox",
  callBackName: _elementTools.ToolsBarType.NARROW
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.FULLSCREEN, {
  label: "全屏",
  value: _elementTools.ToolsBarType.FULLSCREEN,
  icon: "iconfullscreen-ox",
  callBackName: _elementTools.ToolsBarType.FULLSCREEN
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.SORT, {
  label: "排序",
  value: _elementTools.ToolsBarType.SORT,
  icon: "iconsort-o",
  callBackName: _elementTools.ToolsBarType.SORT
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.EDIT, {
  label: "编辑",
  value: _elementTools.ToolsBarType.EDIT,
  icon: "iconedit-o",
  callBackName: _elementTools.ToolsBarType.EDIT
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.REMOVE, {
  label: "删除",
  value: _elementTools.ToolsBarType.REMOVE,
  icon: "icondelete-o",
  confirm: deleteConfirm,
  callBackName: _elementTools.ToolsBarType.REMOVE
}), _defineProperty(_ToolBarMaps, _elementTools.ToolsBarType.DRAG, {
  label: "拖拽",
  value: _elementTools.ToolsBarType.DRAG,
  icon: "icondrag-o",
  event: "mousedown",
  callBackName: _elementTools.ToolsBarType.DRAG
}), _ToolBarMaps);
exports.ToolBarMaps = ToolBarMaps;