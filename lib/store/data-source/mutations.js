"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

var _types = require("./types");

var _dataSource = require("../../service/data-source");

var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mutations = (_mutations = {}, _defineProperty(_mutations, _types.ReportMutation.UPDATECANVAS, function (state, payload) {
  state.originalNodes = payload.originalNodes;
  state.originalEdges = payload.originalEdges;
  state.nodes = payload.nodes;
  state.edges = payload.edges;
}), _defineProperty(_mutations, _types.ReportMutation.UPDATESTAGE, function (state, payload) {
  state.models = payload.models;
  state.relations = payload.relations;
  state.merges = payload.merges;
  state.computes = payload.computes;
  state.groups = payload.groups;
  state.isEdit = !payload.notDif;
}), _defineProperty(_mutations, _types.ReportMutation.UPDATEOPTIONS, function (state, height) {
  console.log("UPDATEOPTIONS", height);
  state.options.height = height;
}), _defineProperty(_mutations, _types.ReportMutation.UPDATESETTING, function (state, _ref) {
  var stage = _ref.stage,
      stageType = _ref.stageType,
      _ref$isDelete = _ref.isDelete,
      isDelete = _ref$isDelete === void 0 ? false : _ref$isDelete;
  if (stageType === "output") return;
  var tmpIndex = state[stageType].findIndex(function (item) {
    return item.id === stage.id;
  });

  if (tmpIndex > -1) {
    if (isDelete) {
      state[stageType].splice(tmpIndex, 1);
    } else {
      state[stageType].splice(tmpIndex, 1, stage);
    }
  } else {
    var initStage = {
      id: stage.id
    };

    if (stageType === "merges") {
      initStage.groups = [];
    }

    if (stageType === "relations") {
      initStage.join = "left"; // 默认左连接

      initStage.groups = [];
    }

    state[stageType].push(initStage);
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETDATASOURCEOPTIONS, function (state, _ref2) {
  var corpId = _ref2.corpId,
      config = _ref2.config,
      groupId = _ref2.groupId,
      dataSourceId = _ref2.dataSourceId;

  if (corpId) {
    state.corpId = corpId;
  }

  if (config) {
    state.config = config;
  }

  if (groupId) {
    state.groupId = groupId;
  }

  if (dataSourceId) {
    state.dataSourceId = dataSourceId;
  }

  _dataSource.dataSourceApi.setConfig({
    corpId: corpId,
    config: config
  });
}), _defineProperty(_mutations, _types.ReportMutation.SETDATASOURCETITLE, function (state, title) {
  state.title = title;
}), _defineProperty(_mutations, _types.ReportMutation.CHANGEEDITSTATUS, function (state, status) {
  state.isEdit = status;
}), _defineProperty(_mutations, _types.ReportMutation.STOREAXIOSDATA, function (state, _ref3) {
  var corpId = _ref3.corpId,
      config = _ref3.config;
  state.corpId = corpId;
  state.config = config;
}), _defineProperty(_mutations, _types.ReportMutation.INITDATESOURCE, function (state) {
  _extends(state, new _.ReportDataSourceState());
}), _mutations);
var _default = mutations;
exports.default = _default;