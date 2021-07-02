"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ResponseCode = void 0;
var ResponseCode;
exports.ResponseCode = ResponseCode;

(function (ResponseCode) {
  ResponseCode["PARAMINVALID"] = "param.invalid";
  ResponseCode["SUCCESS"] = "success";
  ResponseCode["NETWORKERROR"] = "network.error";
  ResponseCode["SERVERERROR"] = "server.error";
  ResponseCode["REPORTNOTEXIST"] = "reporter.not.exist";
  ResponseCode["UNKNOWNERROR"] = "unknown.error";
  ResponseCode["LOGINERROR"] = "login.error";
  ResponseCode["CONNSTRINGEMPTY"] = "conn.string.empty";
  ResponseCode["DATASOURCENOTEXIST"] = "data.source.not.exist";
  ResponseCode["PARAMCHARTERROR"] = "param.chart.error";
  ResponseCode["PARAMSCHEMACODENOTEXIST"] = "param.schemacode.not.exist";
  ResponseCode["DATAOVERFLOW"] = "data.overflow";
  ResponseCode["PIVOTTABLEERROR"] = "pivottable.error";
  ResponseCode["FIELDMISSING"] = "field.missing";
  ResponseCode["MODELNOTEXIST"] = "model.not.exist";
  ResponseCode["RATIOERROR"] = "ratio.error"; // 同环比分析错误
})(ResponseCode || (exports.ResponseCode = ResponseCode = {}));

var _default = ResponseCode;
exports.default = _default;