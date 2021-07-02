"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/input/style/css");

var _input = _interopRequireDefault(require("ant-design-vue/lib/input"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _filterMixins = _interopRequireDefault(require("../../../mixins/filter-mixins"));

var _regexp = _interopRequireDefault(require("../../../utils/regexp"));

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

{
  /* <template>
  <div :class="`${prefixCls}`">
    <h3-input
      v-model="inputValue"
      :placeholder = "placeholderText"
      @input = "changeText($event)"
      :maxlength = "200"
    />
  </div>
  </template> */
}

var ReportElementFilterInput = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportElementFilterInput, _Mixins);

  var _super = _createSuper(ReportElementFilterInput);

  function ReportElementFilterInput() {
    var _this;

    _classCallCheck(this, ReportElementFilterInput);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "".concat(_this.comPrefixCls, "__input");
    _this._inputValue = ''; // 实际值

    return _this;
  }

  _createClass(ReportElementFilterInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("h3-input", {
        attrs: {
          placeholder: this.placeholderText,
          maxlength: "200",
          model: {
            value: _this2.inputValue,
            callback: function callback($$v) {
              _this2.inputValue = $$v;
            }
          }
        },
        on: {
          "input": function input(e) {
            return _this2.changeText(e);
          }
        }
      })]);
    }
    /**
     * 获取输入值
     */

  }, {
    key: "inputValue",
    get: function get() {
      return this.value.length ? this.value[0] : '';
    }
    /**
     * 设置输入值
     */
    ,
    set: function set(value) {
      this._inputValue = value;
    }
    /**
     * 输入框空状态提示
     */

  }, {
    key: "placeholderText",
    get: function get() {
      return this.field.type === 'number' ? '请输入数值' : '请输入';
    }
    /**
     * 修改值
     * @param text
     */

  }, {
    key: "changeText",
    value: function changeText(text) {
      if (this.field.type === 'number') {
        if (!(0, _regexp.default)('NUMBER', text.target.value, true)) return;
      }

      this._inputValue = text.target.value;
      this.emitValue(this._inputValue.trim());
    }
  }, {
    key: "created",
    value: function created() {}
  }]);

  return ReportElementFilterInput;
}((0, _vuePropertyDecorator.Mixins)(_filterMixins.default));

ReportElementFilterInput = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-report-element-filter-input',
  components: {
    H3Input: _input.default
  }
})], ReportElementFilterInput);
var _default = ReportElementFilterInput;
exports.default = _default;