"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReport = getReport;
exports.saveReport = saveReport;
exports.removeChart = removeChart;
exports.loadChartData = loadChartData;
exports.default = exports.getSchemaModel = void 0;

var _options = _interopRequireDefault(require("../dist/options"));

var _visualization = require("../store/visualization");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelToken = _axios.default.CancelToken;
var cancelTokenArray = {};

function fetch(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'get' : _ref$method,
      data = _ref.data;
  var source = CancelToken.source();
  var requestConfig = {
    url: url,
    data: data,
    method: method.toUpperCase(),
    cancelToken: source.token
  };
  return {
    promise: new Promise(function (resolve) {
      _options.default.axios.request(requestConfig).then(function (response) {
        // 兼容氚云移动端
        if (response.data && response.headers) {
          response = response.data;
        }

        if (response.Successful) {
          resolve(response);
        } else if (response.StatusCode) {
          resolve(response);
        } else if (response.ErrorMessage) {
          _options.default.message.error(response.ErrorMessage);

          resolve(false);
        } else if (response.message === 'Network Error') {
          _options.default.message.error('网络异常请重试');

          resolve(false);
        } else {
          resolve(false);
        }
      }).catch(function (error) {
        _options.default.message.error(error);
      });
    }),
    source: source
  };
}
/**
 * 获取SchemaModel
 * @param SchemaCode
 */


var getSchemaModel = function getSchemaModel(SchemaCode) {
  var request = fetch({
    url: '/NewReporting/OnAction',
    method: 'post',
    data: {
      PostData: {
        ActionName: 'GetBizObjectSchemas',
        SchemaCode: SchemaCode
      }
    }
  });
  return request.promise;
};
/**
 * 获取简易报表
 * @param SchemaCode
 */


exports.getSchemaModel = getSchemaModel;

function getReport(SchemaCode) {
  var request = fetch({
    url: '/NewReporting/OnAction',
    method: 'post',
    data: {
      PostData: {
        ActionName: 'GetReportStyle',
        SchemaCode: SchemaCode
      }
    }
  });
  return request.promise;
}
/**
 * 保存报表
 * @param report
 * 返回ObjectId;
 */


function saveReport(report) {
  var request = fetch({
    url: '/NewReporting/OnAction',
    method: 'post',
    data: {
      PostData: {
        ActionName: 'SaveReportStyle',
        SchemaCode: _visualization.reportState.state.schemaCode,
        PostValue: report
      }
    }
  });
  return request.promise;
}
/**
 * 删除图表
 * @param chart
 */


function removeChart(chart) {
  var request = fetch({
    url: '/NewReporting/OnAction',
    method: 'post',
    data: {
      PostData: {
        ActionName: 'RemoveReportChart',
        SchemaCode: _visualization.reportState.state.schemaCode,
        ChartId: chart.uid
      }
    }
  });
  return request.promise;
}
/**
 * 加载图表数据
 * @param chart
 */


function loadChartData(chart) {
  var PostData = {
    ActionName: 'LoadChartData',
    SchemaCode: _visualization.reportState.state.schemaCode
  };
  PostData.Chart = chart;
  if (cancelTokenArray[chart.uid]) cancelTokenArray[chart.uid].cancel('abort');
  var request = fetch({
    url: '/NewReporting/OnAction',
    method: 'post',
    data: {
      PostData: PostData
    }
  });
  cancelTokenArray[chart.uid] = request.source;
  return request.promise;
}

var _default = {
  getSchemaModel: getSchemaModel,
  saveReport: saveReport,
  removeChart: removeChart,
  loadChartData: loadChartData
};
exports.default = _default;