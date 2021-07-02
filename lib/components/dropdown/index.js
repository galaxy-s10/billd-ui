"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/icon/style/css");

var _icon = _interopRequireDefault(require("ant-design-vue/lib/icon"));

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

require("ant-design-vue/lib/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("ant-design-vue/lib/checkbox"));

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("babel-helper-vue-jsx-merge-props"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vClickOutsideX = require("v-click-outside-x");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _vuePopper = _interopRequireDefault(require("./vue-popper"));

var _vueFragment = require("vue-fragment");

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

var H3Dropdown = /*#__PURE__*/function (_Mixins) {
  _inherits(H3Dropdown, _Mixins);

  var _super = _createSuper(H3Dropdown);

  function H3Dropdown() {
    var _this;

    _classCallCheck(this, H3Dropdown);

    _this = _super.apply(this, arguments);
    _this.dropdownParent = _assertThisInitialized(_this); // 搜索键值

    _this.searchKey = "";
    _this.width = "auto";
    _this.showPane = false;
    return _this;
  }

  _createClass(H3Dropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
        // {...{
        //   directives: [
        //     {
        //       name: "click-outside",
        //       value: this.handleOutsideClick,
        //       modifiers: {
        //         mousedown:true
        //       },
        //     },
        //     {
        //       name: "click-outside",
        //       value: this.handleOutsideClick,
        //       modifiers: {
        //         touchstart:true
        //       },
        //     },
        //     {
        //       name: "click-outside",
        //       value: this.handleOutsideClick,
        //       modifiers: {},
        //     },
        //   ],
        // }}
        "class": ["h3-dropdown", this.prefixCls],
        style: this.prefixStyle
      }, {
        on: {
          "!click": this.visibleChange
        }
      }]), [h("span", {
        "class": ['h3-dropdown__select-suffix', {
          'h3-dropdown__select-suffix--up': !this.suffixIcon && this.showPane && this.handleShow
        }]
      }, [this.suffixIcon ? h("i", {
        ref: "suffix",
        "class": "aufontAll ".concat(this.suffixIcon),
        style: "color: ".concat(this.suffixColor),
        on: {
          "click": function click($event) {
            $event.stopPropagation();
            return function () {
              return _this2.onClickSuffix;
            }($event);
          }
        }
      }) : h("a-icon", {
        attrs: {
          type: "down"
        },
        "class": "h3-dropdown__arrow"
      })]), h("a-select", {
        ref: "dropdown",
        attrs: {
          VModel: this.selectedData,
          mode: this.mode,
          showArrow: false,
          placeholder: this.selectPlaceholder,
          allowClear: this.allowClear,
          dropdownClassName: "h3-dropdown--select-dropdown"
        },
        style: [{
          width: '100%'
        }, this.selectStyle],
        "class": "h3-dropdown__select",
        on: {
          "deselect": function deselect() {
            return _this2.deselect;
          },
          "search": function search(e) {
            return _this2.searchChange(e.target.value);
          },
          "change": function change() {
            return _this2.change;
          }
        }
      }, [this.value.map(function (i) {
        return h("a-select-option", [i[_this2.propLabel.name] || i]);
      })]), h("transition", {
        attrs: {
          name: "h3-report-dropdown"
        }
      }, [h("div", {
        directives: [{
          name: "show",
          value: this.showPane && this.handleShow
        }],
        ref: "contentPane",
        style: {
          'width': this.width
        },
        "class": "h3-dropdown-content"
      }, [this.showSearch ? h("a-vue-fragment", [h("div", {
        "class": "h3-dropdown-content-search"
      }, [h("a-input", {
        attrs: {
          placeholder: this.searchPlaceholder,
          model: {
            value: _this2.searchKey,
            callback: function callback($$v) {
              _this2.searchKey = $$v;
            }
          }
        },
        on: {
          "change": function change(e) {
            return _this2.searchChange(e.target.value);
          }
        }
      }, [h("a-icon", {
        slot: "prefix",
        attrs: {
          type: "search"
        }
      }), h("a-icon", {
        directives: [{
          name: "show",
          value: this.searchKey !== ''
        }],
        slot: "suffix",
        attrs: {
          type: "close-circle"
        },
        on: {
          "click": this.clearSearchKey
        }
      })])]), this.$slots.default]) : ""])])]);
    }
  }, {
    key: "selectedData",
    get: function get() {
      var _this3 = this;

      return this.value.map(function (i) {
        return _this3.propLabel.key ? i[_this3.propLabel.key] : i;
      });
    },
    set: function set(val) {// this.$emit('change', val);
    }
  }, {
    key: "debounceUpdatePopper",
    get: function get() {
      var _this4 = this;

      return (0, _debounce.default)(function () {
        _this4.updatePopper();
      }, 300, {
        leading: false
      });
    }
  }, {
    key: "resisePane",
    value: function resisePane() {
      this.showPane && this.mode === "multiple" && this.debounceUpdatePopper();
    }
  }, {
    key: "showPaneHandler",
    value: function showPaneHandler(val, oldVal) {
      if (val) {
        this.$emit("showPane"); // 具体是否有使用待校验
      } else {
        this.searchKey = "";
      }

      if (val !== oldVal) {
        this.width = this.$refs.dropdown.$el.getBoundingClientRect().width + "px";
      }

      this.showPopper = val;
      this.$emit(this.showPane ? "onShow" : "onHide");
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.popperElm = this.$refs.contentPane;
      this.referenceElm = this.$refs.dropdown.$el;
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(e) {
      if (e.target === this.popperElm || this.popperElm.contains(e.target)) {
        return;
      }

      this.showPane = false;
    }
    /**
     * 选择框聚焦事件
     */

  }, {
    key: "visibleChange",
    value: function visibleChange(e) {
      // span.ant-select-selection__choice__remove > i > svg > path
      var tagCloseCls = "ant-select-selection__choice__remove";

      function checkTagClick(target, limit) {
        var result = target ? target.classList.contains(tagCloseCls) : false;
        return !result && target && limit > 0 ? checkTagClick(target.parentNode, limit - 1) : result;
      }

      if (e && (e.target === this.$refs.suffix || ["span", "i", "svg", "path"].includes((e.target.tagName || "").toLowerCase()) && checkTagClick(e.target, 3))) {
        return;
      }

      this.showPane = !this.showPane;
    }
    /**
     * 搜索框变化事件
     */

  }, {
    key: "searchChange",
    value: function searchChange(val) {
      var _this5 = this;

      this.searchKey = val;
      this.$nextTick(function () {
        _this5.$emit("onSearch", _this5.searchKey);
      });
    }
    /**
     * change
     */

  }, {
    key: "change",
    value: function change(value) {
      this.$emit("change", value);
      this.showPane && this.mode === "multiple" && this.debounceUpdatePopper();
    }
  }, {
    key: "deselect",
    value: function deselect(value) {
      this.$emit("deselect", value);
      this.showPane && this.mode === "multiple" && this.debounceUpdatePopper();
    }
  }, {
    key: "clearSearchKey",
    value: function clearSearchKey() {
      this.searchKey = "";
      this.$emit("onSearch", "");
    }
  }, {
    key: "onClickSuffix",
    value: function onClickSuffix() {
      this.showPane = false;
      this.$emit("onClickSuffix");
    }
  }]);

  return H3Dropdown;
}((0, _vuePropertyDecorator.Mixins)(_vuePopper.default));

__decorate([(0, _vuePropertyDecorator.Provide)("dropdownParent")], H3Dropdown.prototype, "dropdownParent", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], H3Dropdown.prototype, "prefixCls", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], H3Dropdown.prototype, "prefixStyle", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], H3Dropdown.prototype, "selectStyle", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], H3Dropdown.prototype, "allowClear", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: String,
  default: "multiple"
})], H3Dropdown.prototype, "mode", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "请选择"
})], H3Dropdown.prototype, "selectPlaceholder", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], H3Dropdown.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({})], H3Dropdown.prototype, "suffixIcon", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "#C9CCD8"
})], H3Dropdown.prototype, "suffixColor", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Boolean,
  default: true
})], H3Dropdown.prototype, "showSearch", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "请输入"
})], H3Dropdown.prototype, "searchPlaceholder", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Boolean,
  default: true
})], H3Dropdown.prototype, "handleShow", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Object,
  default: function _default() {
    return {
      value: "value",
      key: "key",
      name: "name"
    };
  }
})], H3Dropdown.prototype, "propLabel", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("value")], H3Dropdown.prototype, "resisePane", null);

__decorate([(0, _vuePropertyDecorator.Watch)("showPane")], H3Dropdown.prototype, "showPaneHandler", null);

H3Dropdown = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "H3Dropdown",
  components: {
    ASelect: _select.default,
    ASelectOption: _select.default.Option,
    ACheckbox: _checkbox.default,
    AInput: _input.default,
    AIcon: _icon.default,
    AVueFragment: _vueFragment.Fragment
  },
  directives: {
    ClickOutside: _vClickOutsideX.directive
  }
})], H3Dropdown);
var _default2 = H3Dropdown;
exports.default = _default2;