"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dataSourceApi = void 0;

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

var DataSourceApi = /*#__PURE__*/function (_API) {
  _inherits(DataSourceApi, _API);

  var _super = _createSuper(DataSourceApi);

  function DataSourceApi() {
    _classCallCheck(this, DataSourceApi);

    return _super.call(this, {
      errorTips: _errorTips.default
    });
  }
  /**
   * 获取数据源列表
   */


  _createClass(DataSourceApi, [{
    key: _apiType.DataSourceApis.GETDATASOURCENODES,
    value: function value() {
      var request = this.fetch({
        url: 'data-source/v1/advanced/getDataSourceNodes',
        method: 'post',
        data: {}
      });
      return request.promise;
    }
    /**
     * 移动分组节点
     * @param groupObjectIds
     * @param nodeObjectIds
     * @param parentObjectId
     */

  }, {
    key: _apiType.DataSourceApis.MOVEDATASOURCENODE,
    value: function value(_ref) {
      var groupObjectIds = _ref.groupObjectIds,
          nodeObjectIds = _ref.nodeObjectIds,
          parentObjectId = _ref.parentObjectId;
      var request = this.fetch({
        url: 'data-source/v1/advanced/moveDataSourceNode',
        method: 'post',
        data: {
          groupObjectIds: groupObjectIds,
          nodeObjectIds: nodeObjectIds,
          parentObjectId: parentObjectId
        }
      });
      return request.promise;
    }
    /**
     * 排序
     * @param sortModels
     */

  }, {
    key: _apiType.DataSourceApis.UPDATEDATASOURCENODESORT,
    value: function value(sortModels) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/updateDataSourceNodeSort',
        method: 'post',
        data: {
          sortModels: sortModels
        }
      });
      return request.promise;
    }
    /**
     * 删除分组节点
     * @param groupObjectIds
     * @param nodeObjectIds
     */

  }, {
    key: _apiType.DataSourceApis.REMOVEDATASOURCENODE,
    value: function value(_ref2) {
      var groupObjectIds = _ref2.groupObjectIds,
          nodeObjectIds = _ref2.nodeObjectIds;
      var request = this.fetch({
        url: 'data-source/v1/advanced/removeDataSourceNode',
        method: 'post',
        data: {
          groupObjectIds: groupObjectIds,
          nodeObjectIds: nodeObjectIds
        }
      });
      return request.promise;
    }
    /**
     * 更新高级数据源节点名称
     * @param name
     * @param objectId
     * @param type
     */

  }, {
    key: _apiType.DataSourceApis.UPDATEDATASOURCENAME,
    value: function value(_ref3) {
      var name = _ref3.name,
          objectId = _ref3.objectId,
          type = _ref3.type;
      var request = this.fetch({
        url: 'data-source/v1/advanced/updateDataSourceNode',
        method: 'post',
        data: {
          name: name,
          objectId: objectId,
          type: type
        }
      });
      return request.promise;
    }
    /**
     * 添加高级数据源组节点
     * @param dataSourceGroup
     */

  }, {
    key: _apiType.DataSourceApis.ADDDATASOURCEGROUP,
    value: function value(dataSourceGroup) {
      // [DataSourceApis.ADDDATASOURCEGROUP](dataSourceGroup: H3.DataSource.DataSourceGroup): Promise<any> {
      dataSourceGroup.corpId = this.config.corpId;
      var request = this.fetch({
        url: 'data-source/v1/advanced/addDataSourceGroup',
        method: 'post',
        data: {
          dataSourceGroup: dataSourceGroup
        }
      });
      return request.promise;
    }
    /**
     * 预览高级数据源数据
     * @param objectId
     */

  }, {
    key: _apiType.DataSourceApis.PREVIEWADVANCEDDATA,
    value: function value(objectId) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/previewAdvancedData',
        method: 'post',
        data: {
          objectId: objectId
        }
      });
      return request.promise;
    }
    /**
     * 预览高级数据源数据
     * @param setting
     */

  }, {
    key: _apiType.DataSourceApis.PREVIEWSOURCEDATA,
    value: function value(setting) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/previewSourceData',
        method: 'post',
        data: {
          setting: setting
        }
      });
      return request.promise;
    }
    /**
     * 高级数据源获取模型列表
     */

  }, {
    key: _apiType.DataSourceApis.GETMODELLIST,
    value: function value() {
      var request = this.fetch({
        url: 'data-source/v1/advanced/getModelList',
        method: 'post',
        data: {}
      });
      return request.promise;
    }
    /**
     * 高级数据源获取模型以及子模型的属性信息
     */

  }, {
    key: _apiType.DataSourceApis.GETMODELINFO,
    value: function value(schemaCode) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/getModelInfo',
        method: 'post',
        data: {
          schemaCode: schemaCode
        }
      });
      return request.promise;
    }
    /**
     * 获取高级数据源节点信息
     */

  }, {
    key: _apiType.DataSourceApis.GETDATASOURCENODEINFO,
    value: function value(objectId) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/getDataSourceNodeInfo',
        method: 'post',
        data: {
          objectId: objectId
        }
      });
      return request.promise;
    }
    /**
     * 高级数据源获取模型以及子模型的属性信息
     */

  }, {
    key: _apiType.DataSourceApis.SAVEDATASOURCESETTING,
    value: function value(setting) {
      // [DataSourceApis.SAVEDATASOURCESETTING](setting: H3.FallsAPI.DataSource): Promise<any> {
      var request = this.fetch({
        url: 'data-source/v1/advanced/saveDataSourceSetting',
        method: 'post',
        data: {
          setting: setting
        }
      });
      return request.promise;
    }
    /**
     * 高级数据源获取不同阶段的节点对应的模型属性
     */
    // [DataSourceApis.GETSTAGEMODELINFO](setting: H3.FallsAPI.DataSource): Promise<any> {

  }, {
    key: _apiType.DataSourceApis.GETSTAGEMODELINFO,
    value: function value(setting) {
      var request = this.fetch({
        url: 'data-source/v1/advanced/getStageModelInfo',
        method: 'post',
        data: {
          setting: setting
        }
      });
      return request.promise;
    }
    /**
     * 校验公式
     */

  }, {
    key: _apiType.DataSourceApis.CHECKCOMPUTE,
    value: function value(compute) {
      var request = this.fetch({
        url: 'data-source/v1/formula/validateAndAnalyse',
        method: 'post',
        data: {
          expression: compute.expression,
          fieldPrefix: compute.fieldPrefix,
          fields: compute.fields
        }
      });
      return request.promise;
    }
  }]);

  return DataSourceApi;
}(_api.default);

var dataSourceApi = new DataSourceApi();
exports.dataSourceApi = dataSourceApi;
var _default = {
  dataSourceApi: dataSourceApi
};
exports.default = _default;