"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _step = _interopRequireDefault(require("./step1"));

var _step2 = _interopRequireDefault(require("./step2"));

var _step3 = _interopRequireDefault(require("./step3"));

var _step4 = _interopRequireDefault(require("./step4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  step1: _step.default,
  step2: _step2.default,
  step3: _step3.default,
  step4: _step4.default
};
exports.default = _default;