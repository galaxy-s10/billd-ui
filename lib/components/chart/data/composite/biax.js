"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bar = _interopRequireDefault(require("../single/bar"));

var _line = _interopRequireDefault(require("../single/line"));

var _pileBar = _interopRequireDefault(require("../single/pile-bar"));

var _area = _interopRequireDefault(require("../single/area"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 处理双轴图的数据
 * @param options
 */
function handleBiaxData(options) {
  var metricTypes = options.multiMetricType;
  var metricGroup = options.metricGroup;
  var multiRange = options.multiRange;
  var chartDatas = [];

  if (metricTypes && metricTypes.length > 0 && metricGroup && metricGroup.length > 0) {
    metricTypes.forEach(function (type, index) {
      var res;

      var singleOptions = _extends({}, options, {
        metric: metricGroup && [index] ? _toConsumableArray(metricGroup[index]) : [],
        metricRange: multiRange ? multiRange[index] : null
      });

      switch (type) {
        case 'bar':
          res = (0, _bar.default)(singleOptions);
          break;

        case 'line':
          res = (0, _line.default)(singleOptions);
          break;

        case 'pileBar':
          res = (0, _pileBar.default)(singleOptions);
          break;

        case 'area':
          res = (0, _area.default)(singleOptions);
          break;

        default:
          res = (0, _bar.default)(singleOptions);
          break;
      }

      chartDatas.push(res);
    });
  }

  return chartDatas;
}

var _default = handleBiaxData;
exports.default = _default;