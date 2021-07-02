"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleData = handleData;
exports.default = void 0;

var _single = _interopRequireDefault(require("./single"));

var _composite = _interopRequireDefault(require("./composite"));

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 处理所有图表数据
 * @param options
 */
function handleData(options) {
  var date = new Date().getTime();
  options.data = JSON.parse(JSON.stringify(options.data));
  var chartData;
  options.data = JSON.parse(JSON.stringify(options.data));
  _options.default.maxDimension = options.maxDimension || 10;
  _options.default.maxDimensionColumns = options.maxDimensionColumns || 50;
  chartData = _extends({}, _single.default, _composite.default)[options.type](options);
  console.log('CHART HANDLE DATA:', new Date().getTime() - date, 'ms', chartData);
  return chartData;
}

var _default = {
  handleData: handleData
};
exports.default = _default;