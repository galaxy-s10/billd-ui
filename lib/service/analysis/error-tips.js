"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = _interopRequireDefault(require("../../dist/options"));

var _responseCode = _interopRequireDefault(require("../../enum/response-code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 统计分析错误提示
 * @param code
 */
function analysisTips(code, msg) {
  if (!_options.default.message) return;
  var message = _options.default.message;

  switch (code) {
    case _responseCode.default.SUCCESS:
      break;

    default:
      message.error(msg);
      break;
  }
}

var _default = analysisTips;
exports.default = _default;