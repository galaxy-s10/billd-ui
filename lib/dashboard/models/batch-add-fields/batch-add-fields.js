"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("ant-design-vue/lib/checkbox"));

require("ant-design-vue/lib/icon/style/css");

var _icon = _interopRequireDefault(require("ant-design-vue/lib/icon"));

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _searchTree = _interopRequireDefault(require("../../../components/search-tree"));

var _uid = require("../../../utils/uid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var BatchAddFields = /*#__PURE__*/function (_Vue) {
  _inherits(BatchAddFields, _Vue);

  var _super = _createSuper(BatchAddFields);

  function BatchAddFields() {
    var _this;

    _classCallCheck(this, BatchAddFields);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-add-fields-modal"; // 是否显示弹窗

    _this.showModal = false; // 搜索值

    _this.searchValue = ""; // 是否全选

    _this.checkAll = false; // 数据序列

    _this.sourceList = []; // 搜索序列

    _this.searchList = [];
    return _this;
  }

  _createClass(BatchAddFields, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      h("a-modal", {
        attrs: {
          width: "480px",
          title: "批量添加字段",
          cancelText: "取消",
          okText: "确定",
          visible: "show"
        },
        on: {
          "cancel": this.cancel,
          "ok": this.ok
        }
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__search")]
      }, [h("a-input", {
        attrs: {
          placeholder: "搜索",
          model: {
            value: _this2.searchValue,
            callback: function callback($$v) {
              _this2.searchValue = $$v;
            }
          }
        },
        on: {
          "change": this.search
        }
      }, [h("a-icon", {
        slot: "prefix",
        attrs: {
          type: "search"
        }
      })])]), this.renderList.length > 0 && h("div", {
        "class": ["".concat(this.prefixCls, "__content")]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__content-list")]
      }, [this.renderList.map(function (item, index) {
        return h("div", {
          key: index,
          "class": ["".concat(_this2.prefixCls, "__content-item")]
        }, [h("a-checkbox", {
          attrs: {
            checked: item.check,
            disabled: !item.check && _this2.selectedList.length === _this2.max
          },
          on: {
            "change": function change(e) {
              return _this2.onChange(e, item);
            }
          }
        }, [item.name])]);
      })])]), this.searchValue && this.searchList.length === 0 && h("div", {
        "class": ["".concat(this.prefixCls, "__empty")]
      }, ["\u6682\u65E0\u6570\u636E"])]);
    } // 是否非半选状态

  }, {
    key: "indeterminate",
    get: function get() {
      return this.selectedList.length > 0 && this.selectedList.length < this.list.length;
    } // 渲染序列

  }, {
    key: "renderList",
    get: function get() {
      return this.searchValue === "" ? this.sourceList : this.searchList;
    } // 选中序列

  }, {
    key: "selectedList",
    get: function get() {
      var _this3 = this;

      var temp = [];
      var value = this.sourceList.filter(function (i) {
        return i.check;
      }).map(function (m) {
        var data = _extends({}, m, {
          uid: m.uid === "" ? (0, _uid.uuid)(8, 16) : m.uid
        });

        delete data.check;
        return data;
      });
      this.value.forEach(function (i, index) {
        var alreadynList = value.find(function (l) {
          return l.uid === i.uid;
        });

        if (alreadynList) {
          alreadynList.options = i.options;
          temp.push(alreadynList);
        }
      });
      var newFildes = value.filter(function (f) {
        return !_this3.value.find(function (v) {
          return v.uid === f.uid;
        });
      });
      value = [].concat(temp, _toConsumableArray(newFildes));
      return value;
    }
    /**
     * 确认回调
     */

  }, {
    key: "ok",
    value: function ok() {
      this.$emit("update", JSON.parse(JSON.stringify(this.selectedList)));
      this.$emit("close");
    }
    /**
     * 取消回调
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this.$emit("close");
    }
    /**
     * 搜索框搜索
     */

  }, {
    key: "search",
    value: function search(val) {
      var _this4 = this;

      this.searchList = this.sourceList.filter(function (s) {
        return s.name.indexOf(_this4.searchValue) > -1;
      });
    }
    /**
     * 选中值改变
     */

  }, {
    key: "onChange",
    value: function onChange(e, item) {
      var check = !!e.target.checked;
      this.$set(item, "check", check);
    }
    /**
     * 点击全选
     */

  }, {
    key: "onCheckAllChange",
    value: function onCheckAllChange(e) {
      var _this5 = this;

      var check = !!e.target.checked;
      this.sourceList.forEach(function (item) {
        _this5.$set(item, "check", check);
      });
      this.checkAll = check;
    }
  }, {
    key: "created",
    value: function created() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this6 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.sourceList = this.list.map(function (i) {
                  var item = _this6.value.find(function (d) {
                    return d.field === i.field && i.tableId === d.tableId;
                  });

                  return _extends({}, i, {
                    uid: !!item ? item.uid : "",
                    check: !!item
                  });
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return BatchAddFields;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], BatchAddFields.prototype, "list", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], BatchAddFields.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], BatchAddFields.prototype, "show", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 20
})], BatchAddFields.prototype, "max", void 0);

BatchAddFields = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-add-fields-modal",
  components: {
    H3SearchTree: _searchTree.default,
    AModal: _modal.default,
    AInput: _input.default,
    AIcon: _icon.default,
    ACheckbox: _checkbox.default
  }
})], BatchAddFields);
var _default2 = BatchAddFields;
exports.default = _default2;