"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _antdVue = require("@h3/antd-vue");

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

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

var ReportStep = /*#__PURE__*/function (_Vue) {
  _inherits(ReportStep, _Vue);

  var _super = _createSuper(ReportStep);

  function ReportStep() {
    var _this;

    _classCallCheck(this, ReportStep);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-yun-guide-step-3";
    _this.dataSourcPrefixCls = "h3-report-data-source";
    _this.toolsPrefixCls = "h3-report-tools";
    _this.isDragging = false;
    _this.dragOptions = {
      group: {
        name: "fields",
        pull: "clone",
        put: false
      },
      sort: false,
      forceFallback: true,
      fallbackClass: "".concat(_this.dataSourcPrefixCls, "__dragging-field"),
      fallbackOnBody: true
    };
    _this.dataSource = {
      displayName: "深圳奥力给营业报表",
      title: "深圳奥力给营业报表",
      schema: [{
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "Name",
        name: "数据标题",
        dataType: 14,
        visible: true,
        type: "string",
        alias: "",
        needAlias: false,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "Name",
        name: "店铺名称",
        dataType: 14,
        visible: true,
        type: "string",
        alias: "",
        needAlias: false,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "CreatedBy",
        name: "店铺编号",
        dataType: 14,
        visible: true,
        type: "string",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "OwnerId",
        name: "营业额",
        dataType: 7,
        visible: true,
        type: "number",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "OwnerDeptId",
        name: "净利润",
        dataType: 26,
        visible: true,
        type: "string",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "CreatedTime",
        name: "创建时间",
        dataType: 5,
        visible: true,
        type: "date",
        alias: "",
        needAlias: false,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "ModifiedTime",
        name: "修改时间",
        dataType: 5,
        visible: true,
        type: "date",
        alias: "",
        needAlias: false,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "F0000001",
        name: "季度",
        dataType: 14,
        visible: true,
        type: "string",
        alias: "",
        needAlias: false,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "CreatedBy",
        name: "创建人",
        dataType: 26,
        visible: true,
        type: "string",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "OwnerId",
        name: "拥有者",
        dataType: 26,
        visible: true,
        type: "string",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }, {
        uid: "",
        schemaCode: "z7wpswkjztvcheut840dioiq6",
        field: "OwnerDeptId",
        name: "所属部门",
        dataType: 26,
        visible: true,
        type: "string",
        alias: "",
        needAlias: true,
        relation: false,
        options: {}
      }]
    };
    _this.dimensionField = [];
    _this.metricField = [];
    _this.filterField = [];
    return _this;
  }

  _createClass(ReportStep, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return this.step > 2 && h("div", {
        "class": this.prefixCls
      }, [h("div", {
        "class": "h3-report-models"
      }, [h("div", {
        "class": this.dataSourcPrefixCls
      }, [h("div", {
        "class": "".concat(this.dataSourcPrefixCls, "__title")
      }, [h("i", {
        "class": "h3-report-icon form"
      }), h("span", [this.dataSource.displayName])]), h("div", {
        ref: "authorization",
        "class": "".concat(this.dataSourcPrefixCls, "__authorization")
      }, [h("label", ["\u56FE\u8868\u6743\u9650"]), h("a-radio-group", {
        attrs: {
          value: "a",
          name: "dataSourceGroup"
        },
        "class": "".concat(this.dataSourcPrefixCls, "__dataSourceGroup")
      }, [h("a-radio", {
        attrs: {
          value: "a"
        }
      }, ["\u6210\u5458\u5BF9\u6570\u636E\u6E90\u8868\u5355\u7684\u6743\u9650"]), h("a-radio", {
        attrs: {
          value: "b"
        }
      }, ["\u6570\u636E\u6E90\u8868\u5355\u4E2D\u7684\u5168\u90E8\u6570\u636E"])])]), h("div", {
        "class": "".concat(this.dataSourcPrefixCls, "__fields")
      }, [h("label", ["\u5B57\u6BB5\u5217\u8868"]), h("div", {
        "class": "".concat(this.dataSourcPrefixCls, "__fields--content")
      }, [h("div", {
        "class": "".concat(this.dataSourcPrefixCls, "__schema")
      }, [h("label", [this.dataSource.displayName]), h("h3-draggable", {
        attrs: {
          handle: ".report-field",
          value: this.dataSource.schema,
          options: this.dragOptions,
          clone: this.fieldClone
        },
        on: {
          "start": this.fieldDragging,
          "end": this.fieldDragEnd
        }
      }, [this.dataSource.schema.map(function (field, i) {
        return h("div", {
          key: i,
          attrs: {
            id: "".concat(_this2.dataSourcPrefixCls, "__field-").concat(i)
          },
          "class": ["".concat(_this2.dataSourcPrefixCls, "__field"), "report-field"]
        }, [h("i", {
          "class": "h3-report-icon down-o"
        }), h("i", {
          "class": ["h3-report-icon", field.type]
        }), h("span", [field.name])]);
      })])])])])]), h("div", {
        "class": "h3-report-models__header"
      }, [h("label", ["\u6570\u636E\u6765\u6E90"]), h("a", ["\u66F4\u6539"])])]), h("div", {
        "class": "h3-report-tools"
      }, [h("a-tabs", {
        "class": "tab-nav",
        attrs: {
          activeKey: "a"
        }
      }, [h("a-tab-pane", {
        key: "a",
        attrs: {
          tab: "数据设置"
        }
      }, [h("div", {
        "class": "".concat(this.toolsPrefixCls, "__wrap")
      }, [h("div", {
        "class": "h3-report-chart-switch-module report-modules",
        attrs: {
          data: "图表类型"
        }
      }, [h("div", {
        "class": "h3-report-chart-switch-module__header report-modules__header"
      }, [h("label", ["\u56FE\u8868\u7C7B\u578B"])]), h("div", {
        "class": "h3-report-chart-switch-module__switch"
      }, [h("img", {
        attrs: {
          src: ""
        }
      }), h("label", ["\u67F1\u72B6\u56FE"]), h("i", {
        "class": "h3yun_All down-o"
      })])])]), h("div", {
        "class": ["h3-report-dimension-module", "report-modules", this.step === 3 ? "introjs-showElement introjs-relativePosition" : ""]
      }, [h("div", {
        "class": "h3-report-dimension-module__header report-modules__header"
      }, [h("label", ["\u7EF4\u5EA6"]), h("i", {
        "class": "h3yun_All question-circle-o h3-report-dimension-module__icon"
      })]), h("div", {
        "class": ["h3-report-fields", this.step === 3 && this.isDragging ? "h3-report-fields--dragging" : ""]
      }, [h("h3-draggable", {
        attrs: {
          handle: ".report-field",
          group: {
            name: "fields"
          },
          model: {
            value: _this2.dimensionField,
            callback: function callback($$v) {
              _this2.dimensionField = $$v;
            }
          }
        },
        "class": "h3-report-fields__list"
      }, [this.dimensionField.map(function (field, i) {
        return h("div", {
          key: i,
          "class": "h3-report-fields__field report-field"
        }, [h("i", {
          "class": "h3-report-icon down-o"
        }), h("span", [field.name]), h("i", {
          "class": "h3-report-icon h3-close"
        })]);
      })]), this.step < 4 && this.dimensionField.length < 1 && h("div", {
        "class": "h3-report-fields__empty"
      }, ["\u62D6\u52A8\u5DE6\u4FA7\u5B57\u6BB5\u5230\u6B64\u5904"])])]), h("div", {
        "class": ["h3-report-metric-module", "report-modules", this.step === 4 ? "introjs-showElement introjs-relativePosition" : ""]
      }, [h("div", {
        "class": "h3-report-metric-module__header report-modules__header"
      }, [h("label", ["\u6307\u6807"]), h("i", {
        "class": "h3yun_All question-circle-o h3-report-metric-module__icon"
      })]), h("div", {
        "class": ["h3-report-fields", this.step === 4 && this.isDragging ? "h3-report-fields--dragging" : ""]
      }, [h("h3-draggable", {
        attrs: {
          handle: ".report-field",
          group: {
            name: "fields"
          },
          model: {
            value: _this2.metricField,
            callback: function callback($$v) {
              _this2.metricField = $$v;
            }
          }
        },
        "class": "h3-report-fields__list"
      }, [this.metricField.map(function (field, i) {
        return h("div", {
          key: i,
          "class": "h3-report-fields__field report-field"
        }, [h("i", {
          "class": "h3-report-icon down-o"
        }), h("span", [field.name]), h("i", {
          "class": "h3-report-icon h3-close"
        })]);
      })]), this.step < 5 && this.metricField.length < 1 && h("div", {
        "class": "h3-report-fields__empty"
      }, ["\u62D6\u52A8\u5DE6\u4FA7\u5B57\u6BB5\u5230\u6B64\u5904"])])]), h("div", {
        "class": ["h3-report-screen-module", "report-modules", this.step === 5 ? "introjs-showElement introjs-relativePosition" : ""]
      }, [h("div", {
        "class": "h3-report-screen-module__header report-modules__header"
      }, [h("label", ["\u8FC7\u6EE4\u6761\u4EF6"])]), h("div", {
        "class": ["h3-report-fields", this.step === 5 && this.isDragging ? "h3-report-fields--dragging" : ""]
      }, [h("h3-draggable", {
        attrs: {
          handle: ".report-field",
          group: {
            name: "fields"
          },
          model: {
            value: _this2.filterField,
            callback: function callback($$v) {
              _this2.filterField = $$v;
            }
          }
        },
        "class": "h3-report-fields__list"
      }, [this.filterField.map(function (field, i) {
        return h("div", {
          key: i,
          "class": "h3-report-fields__field report-field"
        }, [h("i", {
          "class": "h3-report-icon down-o"
        }), h("span", [field.name]), h("i", {
          "class": "h3-report-icon h3-close"
        })]);
      })]), this.step < 6 && this.filterField.length < 1 && h("div", {
        "class": "h3-report-fields__empty"
      }, ["\u62D6\u52A8\u5DE6\u4FA7\u5B57\u6BB5\u5230\u6B64\u5904"])])]), h("div", {
        "class": ["".concat(this.toolsPrefixCls, "__wrap--help")]
      }, ["\u8BE6\u7EC6\u4E86\u89E3\u7EF4\u5EA6\u3001\u6307\u6807\u548C\u8FC7\u6EE4\u6761\u4EF6"])]), h("a-tab-pane", {
        key: "b",
        attrs: {
          tab: "显示设置"
        }
      })])])]);
    }
  }, {
    key: "fieldDragging",
    value: function fieldDragging(evt) {
      this.isDragging = true;
    }
    /**
     * 排序结束
     */

  }, {
    key: "fieldDragEnd",
    value: function fieldDragEnd(evt) {
      this.isDragging = false;
      var endClass = evt.to.className;

      if (endClass === "h3-report-fields__list") {
        if (this.step === 3) {
          this.dimensionField.push(this.dataSource.schema[1]);
          this.setStep(4);
        } else if (this.step === 4) {
          this.metricField.push(this.dataSource.schema[2]);
          this.setStep(5);
        } else if (this.step === 5) {
          this.filterField.push(this.dataSource.schema[7]);
          this.setStep(6);
        }
      }
    }
  }, {
    key: "fieldClone",
    value: function fieldClone(field) {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return ReportStep;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportStep.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportStep.prototype, "visible", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportStep.prototype, "step", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportStep.prototype, "setStep", void 0);

ReportStep = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-yun-guide-step-3",
  components: {
    AModal: _antdVue.Modal,
    AInput: _antdVue.Input,
    AIcon: _antdVue.Icon,
    ARadio: _antdVue.Radio,
    ARadioGroup: _antdVue.Radio.Group,
    ATabs: _antdVue.Tabs,
    ATabPane: _antdVue.Tabs.TabPane,
    H3Draggable: _vuedraggable.default
  }
})], ReportStep);
var _default2 = ReportStep;
exports.default = _default2;