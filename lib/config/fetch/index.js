"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetch;
exports.Instance = void 0;

var _options = _interopRequireDefault(require("../../dist/options"));

var _axios = _interopRequireDefault(require("axios"));

var _env = _interopRequireDefault(require("../env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CancelToken = _axios.default.CancelToken;

var Instance = _axios.default.create({
  headers: _extends({}, _options.default.requestHeader instanceof Function ? _options.default.requestHeader() : _options.default.requestHeader, {
    "Content-Type": "application/json"
  })
}); // 兼容氚云移动端


exports.Instance = Instance;
Instance.defaults.transformRequest = [function transform(data) {
  return JSON.stringify(data);
}]; // 请求拦截器

Instance.interceptors.request.use(function (config) {
  if (config.method === "get") {
    if (Object.keys(config.data).length) {
      config.url += "?" + Object.keys(config.data).map(function (key) {
        return "".concat(key, "=").concat(_typeof(config.data[key]) ? JSON.stringify(config.data[key]) : key);
      }).join("&");
    }
  } // config.data = qs.stringify(config.data);


  return config;
}, function (error) {
  return console.log(error);
}); // 响应拦截器

Instance.interceptors.response.use(function (response) {
  var responseData = response.data;

  if (_typeof(responseData) !== "object") {
    responseData = JSON.parse(responseData);
    response.data = responseData;
  }

  return response.data;
}, function (error) {
  var res;

  if (error.name === "Error") {
    switch (error.message) {
      case "Network Error":
        res = {
          code: "network.error",
          msg: "网络异常，请稍后再试"
        };
        break;

      default:
        break;
    }
  }

  return res;
});
/**
 * fetch 函数
 * @param url
 * @param method
 * @param data
 * @param responseType
 * @param host
 * @param need
 */

function fetch(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? "get" : _ref$method,
      data = _ref.data,
      responseType = _ref.responseType,
      host = _ref.host;
  // todo 优化
  var realUrl = _options.default.baseUrl || host || _env.default;

  if (realUrl) {
    url = realUrl + "/" + url;
  }

  var source = CancelToken.source();
  var requestConfig = {
    url: url,
    data: data,
    method: method.toUpperCase(),
    cancelToken: source.token,
    headers: _extends({}, _options.default.requestHeader instanceof Function ? _options.default.requestHeader() : _options.default.requestHeader, {
      "Content-Type": "application/json"
    })
  };

  if (responseType) {
    requestConfig["responseType"] = responseType;
  }

  return {
    promise: new Promise(function (resolve) {
      Instance.request(requestConfig).then(function (response) {
        resolve(response);
      });
    }),
    source: source
  };
}