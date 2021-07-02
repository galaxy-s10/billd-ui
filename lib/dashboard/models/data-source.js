"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/radio/style/css");

var _radio = _interopRequireDefault(require("ant-design-vue/lib/radio"));

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _awesomeUi = require("awesome-ui");

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

var _types = require("../../store/dashboard/types");

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _uid = require("../../utils/uid");

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

var ReportDataSource = /*#__PURE__*/function (_Vue) {
  _inherits(ReportDataSource, _Vue);

  var _super = _createSuper(ReportDataSource);

  function ReportDataSource() {
    var _this;

    _classCallCheck(this, ReportDataSource);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-data-source";
    _this.authorizationList = [{
      label: "成员对数据源表单的权限",
      value: 1
    }, {
      label: "数据源表单中的全部数据",
      value: 0
    }];
    _this.dragOptions = {
      group: {
        name: "fields",
        pull: "clone",
        put: false
      },
      sort: false,
      forceFallback: true,
      fallbackClass: "".concat(_this.prefixCls, "__dragging-field"),
      fallbackOnBody: true
    };
    return _this;
  }

  _createClass(ReportDataSource, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return this.dataSource ? h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__title")]
      }, [h("i", {
        "class": "h3-report-icon form"
      }), h("span", {
        attrs: {
          title: this.dataSource.displayName
        }
      }, [this.dataSource.displayName])]), h("div", {
        ref: "authorization",
        "class": ["".concat(this.prefixCls, "__authorization")]
      }, [h("label", ["\u56FE\u8868\u6743\u9650"]), h("a-radio-group", {
        attrs: {
          name: "dataSourceGroup",
          value: this.chart.authorization
        },
        "class": ["".concat(this.prefixCls, "__dataSourceGroup")],
        on: {
          "change": this.changeAuthorization
        }
      }, [this.authorizationList.map(function (item, index) {
        return h("a-radio", {
          key: item.label,
          attrs: {
            value: item.value,
            "get-popup-container": _this2.getPopupContainer
          }
        }, [item.label]);
      })])]), h("div", {
        "class": ["".concat(this.prefixCls, "__fields")]
      }, [h("label", ["\u5B57\u6BB5\u5217\u8868"]), h("div", {
        "class": ["".concat(this.prefixCls, "__fields--content")]
      }, [Object.values(this.dataSourceFilter).map(function (schema, key) {
        return h("div", {
          key: "key",
          "class": ["".concat(_this2.prefixCls, "__schema")]
        }, [h("label", [key]), h("h3-draggable", {
          attrs: {
            handle: ".report-field",
            value: schema,
            options: _this2.dragOptions,
            clone: _this2.fieldClone
          },
          on: {
            "start": _this2.fieldDragging,
            "end": _this2.fieldDragEnd
          }
        }, [schema.map(function (field, i) {
          return h("div", {
            key: i,
            attrs: {
              id: "".concat(_this2.prefixCls, "__field-").concat(i),
              "data-key": key,
              "data-index": i
            },
            "class": ["".concat(_this2.prefixCls, "__field"), "report-field"]
          }, [h("i", {
            "class": "h3-report-icon down-o"
          }), h("i", {
            "class": ["h3-report-icon", field.type]
          }), h("span", [field.name])]);
        })])]);
      })])])]) : h("div", {
        "class": ["".concat(this.prefixCls, "__emptyDataSource")]
      }, [h("img", {
        attrs: {
          src: require("../../assets/pro/bg-source.png"),
          alt: "数据源不存在"
        }
      }), h("label", ["\u6570\u636E\u6E90\u4E0D\u5B58\u5728"])]);
    }
  }, {
    key: "dataSourceFilter",
    get: function get() {
      var fields = {};
      this.dataSource.properties.forEach(function (field) {
        if (field.visible && field.type !== "other") {
          if (!fields[field.tableName]) fields[field.tableName] = [];
          fields[field.tableName].push(field);
        }
      });
      return fields;
    }
  }, {
    key: "getPopupContainer",
    value: function getPopupContainer() {
      return this.$refs.authorization;
    }
  }, {
    key: "changeAuthorization",
    value: function changeAuthorization(e) {
      this.chart.authorization = e.target.value;
    }
    /**
     * 数据源字段拖动
     */

  }, {
    key: "fieldDragging",
    value: function fieldDragging(evt) {
      var key = evt.item.getAttribute("data-key");
      var index = evt.item.getAttribute("data-index");

      if (key && index) {
        var field = JSON.parse(JSON.stringify(this.dataSourceFilter[key][index]));
        this.setDragField(field);
      }
    }
    /**
     * 排序结束
     */

  }, {
    key: "fieldDragEnd",
    value: function fieldDragEnd() {
      this.setDragField(null);
    }
  }, {
    key: "fieldClone",
    value: function fieldClone(field) {
      var newField = JSON.parse(JSON.stringify(field));
      newField.uid = (0, _uid.uuid)(8, 16);
      return newField;
    }
  }, {
    key: "updated",
    value: function updated() {
      if (this.$refs.scroll) {
        this.$refs.scroll.setScrollBar();
      }
    }
  }]);

  return ReportDataSource;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportDataSource.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportDataSource.prototype, "dataSource", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETDRAGFIELD)], ReportDataSource.prototype, "setDragField", void 0);

ReportDataSource = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-data-source",
  components: {
    ASelect: _select.default,
    ARadio: _radio.default,
    ARadioGroup: _radio.default.Group,
    H3Draggable: _vuedraggable.default,
    H3Button: _awesomeUi.H3Button,
    H3Scroll: _scroll.default
  }
})], ReportDataSource);
var _default = ReportDataSource;
exports.default = _default;