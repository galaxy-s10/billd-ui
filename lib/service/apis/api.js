"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _responseCode = _interopRequireDefault(require("../../enum/response-code"));

var _fetch2 = _interopRequireDefault(require("../../config/fetch"));

var _options = _interopRequireDefault(require("../../dist/options"));

var _env = _interopRequireDefault(require("../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 接口通用配置标准
 */
// export default abstract class API {
// export default abstract class API implements H3.ReportAPI.Instance {
var API = /*#__PURE__*/function () {
  function API(config) {
    _classCallCheck(this, API);

    this.config = {
      corpId: null,
      config: null,
      host: null
    };
    this.config = _extends(this.config, config);
    this.config.host = _env.default;
  }
  /**
   * 获取图表数据
   */
  //  [Apis.GETCHARTDATA](chart: H3.ReportAPI.Chart, corpId?: string): Promise<any | boolean>;
  //  [Apis.GETCHARTDATA]: Promise<any | boolean>;

  /**
   * fetch方法
   * @param options 配置参数
   */


  _createClass(API, [{
    key: "fetch",
    value: function fetch(options) {
      var _this = this;

      if (options.data) {
        if (options.method !== "get") {
          options.data = _extends(options.data, {
            corpId: this.config.corpId,
            config: this.config.config
          });
        }
      }

      var complete = options.complete || this.config.complete; // 成功回调函数

      var error = options.error || this.config.error; // 失败回调函数

      delete options.complete;
      delete options.error;

      var fetchOptions = _extends({
        host: this.config.host
      }, options);

      var req = (0, _fetch2.default)(fetchOptions);
      return {
        promise: new Promise(function (resolve, reject) {
          req.promise.then(function (res) {
            if (res && res.code === _responseCode.default.SUCCESS) {
              resolve(complete ? complete(res) : res.data);
            } else if (res.errorCode) {
              typeof _options.default.interfaceErrorCb === "function" && _options.default.interfaceErrorCb(res.errorCode);
            } else if (res instanceof Blob) {
              // 下载文件
              resolve(res);
            } else {
              _this.config.errorTips && _this.config.errorTips(res.code, res.msg);
              reject(error ? error(res) : res);
            }
          });
        }),
        source: req.source
      };
    }
  }, {
    key: "setConfig",
    value: function setConfig(_ref) {
      var corpId = _ref.corpId,
          config = _ref.config;

      if (corpId) {
        this.config.corpId = corpId;
      }

      if (config) {
        this.config.config = config;
      }
    }
  }]);

  return API;
}();

exports.default = API;