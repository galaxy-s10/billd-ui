"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetch;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var instance = _axios.default.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

var DATA_PARAM_PREFIX = 'PostData'; // 请求统一前缀管理
// 请求拦截器

instance.interceptors.request.use(function (config) {
  var data = config.data;

  if (DATA_PARAM_PREFIX in data) {
    var requestData = data[DATA_PARAM_PREFIX];

    if (_typeof(requestData) === 'object') {
      requestData = JSON.stringify(requestData);
    }

    var requestParams = {
      PostData: requestData
    };
    config.data = _qs.default.stringify(requestParams);
  } else {
    config.data = _qs.default.stringify(data);
  }

  return config;
}, function (error) {
  return error;
}); // 响应拦截器

instance.interceptors.response.use(function (response) {
  var responseData = response.data;

  if (_typeof(responseData) !== 'object') {
    responseData = JSON.parse(responseData);
    response.data = responseData;
  }

  return response.data;
}, function (error) {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.log(401);
        break;

      default:
        break;
    }
  }

  return error;
});

function fetch() {
  var defaultReturnData = {
    Successful: false,
    ReturnData: {}
  };
  var requestConfig;
  var allowAnonymous = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    if (args[4]) {
      _axios.default.defaults.baseURL = args[4];
    }

    return Promise.resolve(defaultReturnData);
  } else if (_typeof(args[0]) === 'object') {
    requestConfig = args[0];
    allowAnonymous = !!args[1];
  } else {
    var url = args[0],
        data = args[1],
        _args$ = args[2],
        method = _args$ === void 0 ? 'Get' : _args$,
        allowAnonymousTemp = args[3],
        baseURL = args[4];
    _axios.default.defaults.baseURL = baseURL;
    allowAnonymous = allowAnonymousTemp;
    requestConfig = {
      url: url,
      data: data,
      method: method.toUpperCase()
    };
  }

  return new Promise(function (resolve) {
    instance.request(requestConfig).then(function (response) {
      var responseData = response;

      if (!responseData) {
        resolve(defaultReturnData);
      }

      if (!responseData.Logined && !allowAnonymous) {
        window.location.href = process.env.NODE_ENV === 'production' ? '/Login/' : '/login.html';
      }

      if (!responseData.Successful && responseData.ErrorMessage && responseData.ErrorMessage.indexOf('MetadataLocked') > -1) {}

      resolve(responseData);
      return responseData;
    }).catch(function (error) {
      if (error.responseJSON && error.responseJSON.ErrorMessage.indexOf('MetadataLocked') > -1) {}

      resolve(error);
      return error;
    });
  });
}