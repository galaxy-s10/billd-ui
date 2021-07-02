"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dashboardApi = void 0;

var _api = _interopRequireDefault(require("../apis/api"));

var _errorTips = _interopRequireDefault(require("./error-tips"));

var _apiType = require("./api-type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DashboardApi = /*#__PURE__*/function (_API) {
  _inherits(DashboardApi, _API);

  var _super = _createSuper(DashboardApi);

  function DashboardApi() {
    _classCallCheck(this, DashboardApi);

    return _super.call(this, {
      errorTips: _errorTips.default
    });
  }
  /**
   * 保存取图表数据
   */


  _createClass(DashboardApi, [{
    key: _apiType.DashbordApis.SAVEREPORT,
    value: function value(report) {
      var request = this.fetch({
        url: 'dashboard/v1/report/reportpage',
        method: 'post',
        data: {
          report: report
        }
      });
      return request.promise;
    }
    /**
     * 获取图表配置信息
     */

  }, {
    key: _apiType.DashbordApis.GETREPORT,
    value: function value(corpId, objectId) {
      var request = this.fetch({
        url: 'dashboard/v1/report/config',
        method: 'post',
        data: {
          corpId: corpId,
          objectId: objectId
        }
      });
      return request.promise;
    }
    /**
     * 获取数据源列表
     */

  }, {
    key: _apiType.DashbordApis.GETDATASOURCELIST,
    value: function value() {
      var request = this.fetch({
        url: 'dashboard/v1/report/v2/datasourcelist',
        method: 'post',
        data: {}
      });
      return request.promise;
    }
    /**
     * 获取指定dataSourceId的数据源
     */

  }, {
    key: _apiType.DashbordApis.GETDATASOURCE,
    value: function value(dataSourceInfos) {
      var request = this.fetch({
        url: 'dashboard/v1/report/v2/datasource',
        method: 'post',
        data: {
          dataSourceInfos: dataSourceInfos
        }
      });
      return request.promise;
    }
    /**
     * 获取图表数据
     */
    // [DashbordApis.GETCHARTDATA](chart: H3.ReportAPI.Chart, corpId?: string) :Promise<any>{
    //   const request = this.fetch<H3.DashboardAPI.ChartRealData| boolean>({
    //     url: 'dashboard/v1/report/v3/chartData',
    //     method: 'post',
    //     data: {
    //       chart,
    //       dataSourceId: chart.dataSourceId,
    //       corpId
    //     }
    //   });
    //   return request.promise;
    // }

    /**
     * 导出数据 明细表
     */

  }, {
    key: _apiType.DashbordApis.DATAEXPORT,
    value: function value(chart, corpId) {
      var request = this.fetch({
        url: 'dashboard/v1/export/dataExport',
        method: 'post',
        data: {
          chart: chart,
          dataSourceId: chart.dataSourceId,
          corpId: corpId
        },
        responseType: 'blob'
      });
      return request.promise;
    }
  }]);

  return DashboardApi;
}(_api.default);

var dashboardApi = new DashboardApi();
exports.dashboardApi = dashboardApi;
var _default = {
  dashboardApi: dashboardApi
};
exports.default = _default;