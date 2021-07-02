"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _dataSource = require("../../service/data-source");

var _types = require("./types");

var _uid = require("../../utils/uid");

var _actions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var actions = (_actions = {}, _defineProperty(_actions, _types.ReportAction.GETMODELLIST, function (_ref) {
  var dispatch = _ref.dispatch,
      state = _ref.state;
  return _dataSource.dataSourceApi.getModelList();
}), _defineProperty(_actions, _types.ReportAction.GETMODELINFO, function (_ref2, schemaCode) {
  var dispatch = _ref2.dispatch,
      state = _ref2.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var res, main, subs, i, sub;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _dataSource.dataSourceApi.getModelInfo(schemaCode);

          case 2:
            res = _context.sent;

            if (!res) {
              _context.next = 10;
              break;
            }

            main = res.main, subs = res.subs;

            if (main && main.fields && main.fields.length > 0) {
              main.fields = main.fields.filter(function (item) {
                return item.visible;
              });
            }

            if (subs && subs.length > 0) {
              for (i = 0; i < subs.length; i++) {
                sub = subs[i];

                if (sub && sub.fields && sub.fields.length > 0) {
                  sub.fields = sub.fields.filter(function (item) {
                    return item.visible;
                  });
                }
              }
            }

            return _context.abrupt("return", {
              main: main,
              subs: subs
            });

          case 10:
            return _context.abrupt("return", null);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}), _defineProperty(_actions, _types.ReportAction.GETSTAGEMODELINFO, function (_ref3, _ref4) {
  var dispatch = _ref3.dispatch,
      state = _ref3.state;
  var nodeId = _ref4.nodeId,
      source = _ref4.source;

  var setting = _extends({}, {
    nodeId: nodeId,
    objectId: state.dataSourceId,
    groupObjectId: state.groupId
  }, source);

  return _dataSource.dataSourceApi.getStageModelInfo(setting);
}), _defineProperty(_actions, _types.ReportAction.GETDATASOURCENODEINFO, function (_ref5) {
  var commit = _ref5.commit,
      state = _ref5.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!state.dataSourceId) {
              _context2.next = 5;
              break;
            }

            _context2.next = 3;
            return _dataSource.dataSourceApi.getDataSourceNodeInfo(state.dataSourceId).then(function (res) {
              if (res) {
                state.title = res.title;

                if (res.options) {
                  state.options = res.options;
                }

                commit(_types.ReportMutation.UPDATECANVAS, {
                  originalNodes: [],
                  originalEdges: [],
                  nodes: res.nodes || [],
                  edges: res.edges || []
                });
                commit(_types.ReportMutation.UPDATESTAGE, {
                  models: res.models || [],
                  merges: res.merges || [],
                  relations: res.relations || [],
                  computes: res.computes || [],
                  groups: res.groups || [],
                  notDif: true
                });
              }
            });

          case 3:
            _context2.next = 7;
            break;

          case 5:
            state.dataSourceId = "".concat((0, _uid.guid)());
            state.title = "未命名的数据源";

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}), _defineProperty(_actions, _types.ReportAction.SAVEDATASOURCESETTING, function (_ref6, nodeId) {
  var dispatch = _ref6.dispatch,
      state = _ref6.state;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var source;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            source = {
              nodeId: nodeId,
              title: state.title,
              objectId: state.dataSourceId,
              groupObjectId: state.groupId,
              edges: state.edges,
              nodes: state.nodes,
              models: state.models,
              groups: state.groups,
              merges: state.merges,
              relations: state.relations,
              computes: state.computes,
              options: state.options
            };
            return _context3.abrupt("return", _dataSource.dataSourceApi.saveDataSourceSetting(source));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}), _defineProperty(_actions, _types.ReportAction.PREVIEWSOURCEDATA, function (_ref7, _ref8) {
  var dispatch = _ref7.dispatch,
      state = _ref7.state;
  var node = _ref8.node,
      source = _ref8.source;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    var params;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = {
              nodeId: node.id,
              objectId: state.dataSourceId,
              groupObjectId: state.groupId
            };

            _extends(params, source);

            return _context4.abrupt("return", _dataSource.dataSourceApi.previewSourceData(params));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}), _defineProperty(_actions, _types.ReportAction.CHECKCOMPUTE, function (_ref9, _ref10) {
  var dispatch = _ref9.dispatch,
      state = _ref9.state;
  var formula = _ref10.formula,
      fields = _ref10.fields;
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    var compute;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            compute = {
              expression: formula,
              fieldPrefix: "@@",
              fields: fields
            };
            return _context5.abrupt("return", _dataSource.dataSourceApi.checkCompute(compute));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}), _actions);
var _default = actions;
exports.default = _default;