"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _options = _interopRequireDefault(require("../../../options"));

var _scroll = _interopRequireDefault(require("../../../components/scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportPro = (0, _vuexClass.namespace)("report");

var SetFilterField = /*#__PURE__*/function (_Vue) {
  _inherits(SetFilterField, _Vue);

  var _super = _createSuper(SetFilterField);

  function SetFilterField() {
    var _this;

    _classCallCheck(this, SetFilterField);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-set-field";
    _this.dataSourcesOptions = []; // 数据源集合实际值

    _this.dataSourcesShowValue = []; // 数据源集合展示值

    _this.classification = []; // 字段分类

    _this.tmpDataSourcesList = JSON.parse(JSON.stringify(_this.dataSourcesList));
    return _this;
  }

  _createClass(SetFilterField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return this.dataSourcesShowValue.length > 0 && h("div", {
        "class": "prefixCls"
      }, [this.dataSourcesShowValue.map(function (dataSource, index) {
        var _ref;

        return h("div", {
          "class": ["".concat(_this2.prefixCls, "__item")],
          key: index
        }, [h("div", {
          "class": ["".concat(_this2.prefixCls, "__name")]
        }, [dataSource.displayName]), h("a-select", {
          attrs: {
            showSearch: true,
            placeholder: "请选择字段",
            disabled: index !== 0 && !_this2.tmpDataSourcesList[0].field,
            value: dataSource.defaultValue
          },
          "class": (_ref = {}, _defineProperty(_ref, "".concat(_this2.prefixCls, "__select"), true), _defineProperty(_ref, "".concat(_this2.prefixCls, "__select-error"), false), _ref),
          on: {
            "change": _this2.changeField
          }
        }, [dataSource.properties.map(function (field, i) {
          return h("a-select-option", {
            key: i,
            attrs: {
              value: "".concat(index, "___").concat(dataSource.dataSourceId, "___").concat(JSON.stringify(field))
            }
          }, [h("i", {
            "class": ["".concat(_this2.prefixCls, "__icon"), "h3-report-icon ".concat(field.type)]
          }), field.name]);
        })])]);
      })]);
    }
  }, {
    key: "getDataSourcesOptions",
    value: function getDataSourcesOptions(newFilterDataSource) {
      var _this3 = this;

      // [{ dataSourceId, field }]
      this.tmpDataSourcesList = newFilterDataSource;
      this.dataSourcesOptions.splice(0);
      newFilterDataSource.forEach(function (filterDataSource, index) {
        _this3.dataSourcesOptions[index] = _this3.dataSources[filterDataSource.dataSourceId];
        _this3.dataSourcesOptions[index].properties = _this3.dataSources[filterDataSource.dataSourceId].properties.filter(function (item) {
          return item.visible;
        });
        _this3.dataSourcesOptions[index].defaultValue = null; // 字段反显及兼容字段缺失

        if (filterDataSource && filterDataSource.field) {
          var field = _this3.dataSources[filterDataSource.dataSourceId].properties.find(function (item) {
            return item.field === filterDataSource.field.field && item.schemaCode === filterDataSource.field.schemaCode && item.visible;
          });

          if (field) {
            if (index === 0) {
              _this3.activeType = filterDataSource.field.type;

              if (typeof _options.default.classification === "function" && _options.default.classification(field)) {
                _this3.classification = _options.default.classification(field);
              } else {
                _this3.classification = [];
              }
            }

            _this3.dataSourcesOptions[index].defaultValue = filterDataSource.field.name;
          }
        }
      }); // 展示数据源,字段类型分类

      this.dataSourcesShowValue = JSON.parse(JSON.stringify(this.dataSourcesOptions));
      this.dataSourcesOptions.forEach(function (item, index) {
        if (index === 0) {
          _this3.dataSourcesShowValue[index].properties = item.properties;
        } else if (_this3.classification.length) {
          _this3.dataSourcesShowValue[index].properties = item.properties.filter(function (param) {
            return _this3.classification.includes(param.dataType);
          });
        } else {
          _this3.dataSourcesShowValue[index].properties = item.properties.filter(function (field) {
            return field.type === _this3.activeType;
          });
        }
      });
    }
    /**
     * 改变筛选字段
     * @param value
     */

  }, {
    key: "changeField",
    value: function changeField(value) {
      var tmpList = JSON.parse(JSON.stringify(this.tmpDataSourcesList));
      var tmpValue = value.split("___");
      var activeIndex = Number(tmpValue.shift());
      var tmpSourceItem = {
        dataSourceId: tmpValue[0],
        field: JSON.parse(tmpValue[1])
      };
      this.tmpDataSourcesList.splice(activeIndex, 1, tmpSourceItem); // 当第一个字段改变类型时触发

      if (activeIndex === 0 && tmpSourceItem.field) {
        if (this.activeType !== tmpSourceItem.field.type) {
          this.activeType = tmpSourceItem.field.type;
          tmpList = this.tmpDataSourcesList.map(function (item, index) {
            if (index === 0) return item;
            return {
              dataSourceId: item.dataSourceId,
              field: null
            };
          });
          this.tmpDataSourcesList = tmpList;
          this.dataSourcesOptions.forEach(function (item, index) {
            if (index > 0) {
              item.defaultValue = null;
            }
          });
        }

        this.$emit("change-field-type", this.activeType);
      }

      this.$emit("change-field", this.tmpDataSourcesList);
    }
  }]);

  return SetFilterField;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], SetFilterField.prototype, "dataSourcesList", void 0);

__decorate([ReportPro.State("dataSources")], SetFilterField.prototype, "dataSources", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("dataSourcesList", {
  immediate: true,
  deep: true
})], SetFilterField.prototype, "getDataSourcesOptions", null);

SetFilterField = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-set-field",
  components: {
    H3Scroll: _scroll.default,
    ASelect: _select.default,
    ASelectOption: _select.default.Option
  }
})], SetFilterField);
var _default2 = SetFilterField;
exports.default = _default2;