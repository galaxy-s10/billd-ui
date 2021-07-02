"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

require("ant-design-vue/lib/radio/style/css");

var _radio = _interopRequireDefault(require("ant-design-vue/lib/radio"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var ReportSortListModule = /*#__PURE__*/function (_Vue) {
  _inherits(ReportSortListModule, _Vue);

  var _super = _createSuper(ReportSortListModule);

  function ReportSortListModule() {
    var _this;

    _classCallCheck(this, ReportSortListModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-sort-module-list";
    _this.comPrefixCls = "report-modules"; // 拖拽配置信息

    _this.dragOptions = {
      group: "sortList",
      // ghostClass: 'h3-report-sort-module-list__sort-item',
      // chosenClass: 'h3-report-sort-module-list__sort-item',
      forceFallback: true,
      animation: 150,
      touchStartThreshold: 5,
      delay: 100,
      filter: ".undrag"
    }; // 渲染的字段列表 搜索暂存列表

    _this.renderList = [];
    _this.tempRenderList = []; // 搜索值

    _this.searchKey = ""; // 添加近排序的字段

    _this.value = [];
    return _this;
  }

  _createClass(ReportSortListModule, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      h("div", {
        "class": [this.prefixCls]
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__left")
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__left-title")
      }, [h("span", ["\u8BF7\u6DFB\u52A0\u9700\u8981\u6392\u5E8F\u7684\u5B57\u6BB5"]), h("span", {
        "class": [!this.allSelect ? "".concat(this.prefixCls, "__left-title-extra") : "".concat(this.prefixCls, "__left-title-extra--disabled")],
        on: {
          "click": this.addAllFileds
        }
      }, ["\u5168\u90E8\u6DFB\u52A0"])]), h("div", {
        "class": "".concat(this.prefixCls, "__left-search")
      }, [h("a-input-search", {
        attrs: {
          placeholder: "搜索",
          model: {
            value: _this2.searchKey,
            callback: function callback($$v) {
              _this2.searchKey = $$v;
            }
          }
        },
        style: "width: 230px;",
        on: {
          "search": this.searchFiled,
          "blur": this.searchFiled
        }
      })]), h("div", {
        "class": "".concat(this.prefixCls, "__left-list")
      }, [this.viewList.map(function (item) {
        return h("div", {
          key: item.uid,
          "class": "".concat(_this2.prefixCls, "__left-list-item")
        }, [h("i", {
          "class": "h3yun_All ".concat(item.type === "date" ? "calendar-o" : item.type === "string" ? "text-a" : item.type)
        }), h("span", {
          "class": "".concat(_this2.prefixCls, "__left-list-item-content "),
          attrs: {
            title: item.alias || item.name
          }
        }, [item.alias || item.name]), !_this2.selectedList[item.uid] && h("span", {
          "class": "".concat(_this2.prefixCls, "__left-list-item--extra"),
          attrs: {
            click: _this2.addSingleFiled(item)
          }
        }, ["\u6DFB\u52A0"])]);
      })])]), h("div", {
        "class": "".concat(this.prefixCls, "__right")
      }, [h("h3-draggable", {
        attrs: {
          id: "sortList",
          handle: ".drag",
          options: this.dragOptions,
          change: this.sortField,
          model: {
            value: _this2.value,
            callback: function callback($$v) {
              _this2.value = $$v;
            }
          }
        },
        "class": ["".concat(this.prefixCls, "__sort")]
      }, [this.value.map(function (item) {
        return h("div", {
          key: item.uid,
          "class": ["".concat(_this2.prefixCls, "__sort-item")]
        }, [h("i", {
          "class": "h3yun_All drag"
        }), h("i", {
          "class": "h3yun_All ".concat(item.type === "date" ? "calendar-o" : item.type === "string" ? "text-a" : item.type)
        }), h("span", {
          "class": ["".concat(_this2.prefixCls, "__sort-item-title")],
          attrs: {
            title: item.alias || item.name
          }
        }, [item.alias || item.name]), h("a-radio-group", {
          attrs: {
            buttonStyle: "solid",
            size: "small",
            defaultValue: item.options.order || "asc"
          },
          on: {
            "change": function change(e) {
              return _this2.changeOrder(e, item);
            }
          }
        }, [h("a-radio-button", {
          attrs: {
            value: "asc"
          }
        }, ["\u5347\u5E8F"]), h("a-radio-button", {
          attrs: {
            value: "desc"
          }
        }, ["\u964D\u5E8F"])])]);
      })])])]);
    } //  所有选中的字段

  }, {
    key: "allFields",
    get: function get() {
      return this.chart.data.dimension;
    } // 是否全部被选中

  }, {
    key: "allSelect",
    get: function get() {
      return this.allFields.length === this.value.length;
    }
  }, {
    key: "selectedList",
    get: function get() {
      var list = {};
      this.value.forEach(function (i) {
        list[i.uid] = true;
      });
      return list;
    }
    /**
     * 实际渲染的左侧未添加排序的字段
     */

  }, {
    key: "viewList",
    get: function get() {
      var _this3 = this;

      return this.allFields.filter(function (i) {
        return _this3.renderList.some(function (r) {
          return r.uid === i.uid;
        });
      });
    }
    /**
     * 添加全部字段
     */

  }, {
    key: "addAllFileds",
    value: function addAllFileds() {
      if (this.allSelect) return;
      this.value = _toConsumableArray(this.allFields);
      this.value.forEach(function (i) {
        if (!i.options.order) {
          i.options.order = "asc";
        }
      });
      this.renderList = [];
      this.tempRenderList = [];
      this.$emit("changeData", this.value);
    }
    /**
     * 添加单个字段
     */

  }, {
    key: "addSingleFiled",
    value: function addSingleFiled(item) {
      if (this.value.find(function (i) {
        return i.uid === item.uid;
      })) return;
      this.renderList = this.renderList.filter(function (i) {
        return i.uid !== item.uid;
      });
      this.tempRenderList = this.tempRenderList.filter(function (i) {
        return i.uid !== item.uid;
      });
      item.options.order = "asc";
      this.value = [].concat(_toConsumableArray(this.value), [item]);
      this.$emit("changeData", this.value);
    }
    /**
     * 删除单独字段
     */

  }, {
    key: "delectFiled",
    value: function delectFiled(item) {
      this.value = this.value.filter(function (i) {
        return i.uid !== item.uid;
      });
      this.renderList = [].concat(_toConsumableArray(this.renderList), [item]);
      this.tempRenderList = _toConsumableArray(this.renderList);
      this.$emit("changeData", this.value);
    }
    /**
     * 改变单个排序规则
     */

  }, {
    key: "changeOrder",
    value: function changeOrder(e, item) {
      var v = this.value.find(function (i) {
        return i.uid === item.uid;
      });
      v && (v.options.order = e.target.value);
      this.$emit("changeData", this.value);
    }
    /**
     * 搜索字段
     */

  }, {
    key: "searchFiled",
    value: function searchFiled(e) {
      var val = this.searchKey;

      if (val === "") {
        this.renderList = _toConsumableArray(this.tempRenderList);
      } else {
        this.renderList = this.tempRenderList.filter(function (i) {
          return i.alias && i.alias.indexOf(val) > -1 || i.name.indexOf(val) > -1;
        });
      }
    }
    /**
     * 排序完毕
     */

  }, {
    key: "sortField",
    value: function sortField(evt) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.$emit("changeData", _this4.value);
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this5 = this;

      this.value = this.chart.data.sort;
      this.renderList = this.allFields.filter(function (f) {
        return !_this5.value.some(function (v) {
          return v.uid === f.uid;
        });
      });
      this.tempRenderList = _toConsumableArray(this.renderList);
      this.$emit("changeData", this.value);
    }
  }]);

  return ReportSortListModule;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportSortListModule.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportSortListModule.prototype, "chartType", void 0);

ReportSortListModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-sort-module-list",
  components: {
    ARadio: _radio.default,
    ARadioButton: _radio.default.Button,
    ARadioGroup: _radio.default.Group,
    AInputSearch: _input.default.Search,
    H3Draggable: _vuedraggable.default
  }
})], ReportSortListModule);
var _default2 = ReportSortListModule;
exports.default = _default2;