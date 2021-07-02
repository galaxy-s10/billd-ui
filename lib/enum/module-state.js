"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabState = exports.ModuleState = void 0;

/**
 * 激活模块类型
 */
var ModuleState;
exports.ModuleState = ModuleState;

(function (ModuleState) {
  ModuleState["VIEW"] = "view";
  ModuleState["DESIGN"] = "design";
  ModuleState["PREVIEW"] = "preview";
})(ModuleState || (exports.ModuleState = ModuleState = {}));

var TabState;
exports.TabState = TabState;

(function (TabState) {
  TabState[TabState["PERSON"] = 0] = "PERSON";
  TabState[TabState["PUBLIC"] = 1] = "PUBLIC";
})(TabState || (exports.TabState = TabState = {}));