"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.analysisApi = void 0;

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

var AnalysisApi = /*#__PURE__*/function (_API) {
  _inherits(AnalysisApi, _API);

  var _super = _createSuper(AnalysisApi);

  function AnalysisApi() {
    _classCallCheck(this, AnalysisApi);

    return _super.call(this, {
      errorTips: _errorTips.default
    });
  }
  /**
   *  获取报表信息
   *  @param dataSourceId
   *  @param ownerId
   *  @param shareStatus 0 表示个人  1 表示公共
   */


  _createClass(AnalysisApi, [{
    key: _apiType.AnalysisApis.GETREPORTINFO,
    value: function value(dataSourceId, ownerId, shareStatus) {
      var request = this.fetch({
        url: "statistic/v1/statistic/statisticPage",
        method: "post",
        data: {
          ownerId: ownerId,
          dataSourceId: dataSourceId,
          shareStatus: shareStatus
        }
      });
      return request.promise;
    }
    /**
     *  获取个人报表信息
     *  @param dataSourceId
     *  @param ownerId
     */

  }, {
    key: _apiType.AnalysisApis.GETPERSONALINFO,
    value: function value(dataSourceId, ownerId) {
      var request = this.fetch({
        url: "statistic/v1/statistic/ownerStatisticPage",
        method: "post",
        data: {
          ownerId: ownerId,
          dataSourceId: dataSourceId
        }
      });
      return request.promise;
    }
    /**
     *  获取公共报表信息
     *  @param dataSourceId
     *  @param ownerId
     */

  }, {
    key: _apiType.AnalysisApis.GETPUBLICINFO,
    value: function value(dataSourceId, ownerId) {
      var request = this.fetch({
        url: "statistic/v1/statistic/publicStatisticPage",
        method: "post",
        data: {
          dataSourceId: dataSourceId,
          ownerId: ownerId
        }
      });
      return request.promise;
    }
    /**
     *  删除单个图表信息
     *  @param objectId
     */

  }, {
    key: _apiType.AnalysisApis.REMOVECHART,
    value: function value(objectId) {
      var request = this.fetch({
        url: "statistic/v1/statistic/removeStatisticChart",
        method: "post",
        data: {
          objectId: objectId
        }
      });
      return request.promise;
    }
    /**
     *  批量删除图表信息
     *  @param objectIds
     */

  }, {
    key: _apiType.AnalysisApis.REMOVECHARTS,
    value: function value(objectIds) {
      var request = this.fetch({
        url: "statistic/v1/statistic/removeStatisticCharts",
        method: "post",
        data: {
          objectIds: objectIds
        }
      });
      return request.promise;
    }
    /**
     *  保存报表信息
     *  @param report
     */

  }, {
    key: _apiType.AnalysisApis.SAVECHARTS,
    value: function value(report) {
      var request = this.fetch({
        url: "statistic/v1/statistic/saveStatisticPage",
        method: "post",
        data: {
          report: report
        }
      });
      return request.promise;
    }
    /**
     *  获取个人模块统计分析报表的图表数量
     */

  }, {
    key: _apiType.AnalysisApis.GETCHARTSLENGTH,
    value: function value(dataSourceId, ownerId) {
      var request = this.fetch({
        url: "statistic/v1/statistic/countNotShareCharts",
        method: "post",
        data: {
          dataSourceId: dataSourceId,
          ownerId: ownerId
        }
      });
      return request.promise;
    }
    /**
     *  保存图表信息
     *  @param chart
     */

  }, {
    key: _apiType.AnalysisApis.SAVECHART,
    value: function value(chart) {
      var request = this.fetch({
        url: "statistic/v1/statistic/saveStatisticChart",
        method: "post",
        data: {
          chart: chart
        }
      });
      return request.promise;
    }
    /**
     * 获取指定dataSourceId的数据源
     */

  }, {
    key: _apiType.AnalysisApis.GETDATASOURCE,
    value: function value(dataSourceId) {
      var request = this.fetch({
        url: "statistic/v1/reporting/datasourcemodel",
        method: "post",
        data: {
          dataSourceInfos: [{
            dataSourceId: dataSourceId,
            useType: 1
          }]
        }
      });
      return request.promise;
    }
    /**
     *  保存图表个人偏好信息
     *  @param chart
     */

  }, {
    key: _apiType.AnalysisApis.SAVEOWNERCHART,
    value: function value(chart) {
      var request = this.fetch({
        url: "statistic/v1/statistic/saveOwnerChart",
        method: "post",
        data: {
          ownerChartInfo: chart
        }
      });
      return request.promise;
    }
    /**
     *  图表数据加载
     *  @param chart
     *  @param corpId
     */
    // [AnalysisApis.GETCHARTDATA](
    //   chart: H3.ReportAPI.Chart,
    //   corpId?: string
    // ): Promise<any> {
    //   const request = this.fetch<boolean | H3.AnalysisAPI.ChartRealData>({
    //     url: "statistic/v1/reporting/loadChartData",
    //     method: "post",
    //     data: {
    //       chart,
    //       dataSourceId: chart.dataSourceId,
    //       corpId
    //     }
    //   });
    //   return request.promise;
    // }

    /**
     *  图表数据加载
     *  @param code
     */

  }, {
    key: _apiType.AnalysisApis.GETMAPJSON,
    value: function value(code) {
      var request = this.fetch({
        url: "statistic/v1/statistic/mapJson?code=".concat(code),
        method: "get",
        data: {// code
        }
      });
      return request.promise;
    }
  }]);

  return AnalysisApi;
}(_api.default);

var analysisApi = new AnalysisApi();
exports.analysisApi = analysisApi;
var _default = {
  analysisApi: analysisApi
};
exports.default = _default;