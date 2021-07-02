"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = _interopRequireDefault(require("../dist/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env;

if (_options.default.baseUrl) {
  env = _options.default.baseUrl;
} else if (window.location.origin.indexOf("h3yun.com") > -1 || window.location.origin.indexOf("authine.com") > -1) {
  env = window.location.origin + "/rx-report/webapi/";
} else {
  var local = window.localStorage.getItem("H3_DEV_GROUP") || window.localStorage.getItem("H3_DEV_GROUP_MOBILE");
  env = process.env.NODE_ENV === "mock" ? window.location.origin + "/" : "https://".concat(local, ".h3yun.com/rx-report/webapi/");
}

var _default = env;
exports.default = _default;