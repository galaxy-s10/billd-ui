"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _login = require("./login");

require("./style.less");

var _dom = require("../../utils/dom");

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

var H3YunLoginUtils = /*#__PURE__*/function (_Vue) {
  _inherits(H3YunLoginUtils, _Vue);

  var _super = _createSuper(H3YunLoginUtils);

  function H3YunLoginUtils() {
    var _this;

    _classCallCheck(this, H3YunLoginUtils);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-dashboard-dev';
    _this.corpId = 'mq9lled9hm7aeq7dhj1v14495'; // 开发环境

    _this.reportId = 'u8dd91d7c89654e0cb36d8d7c54f984ac'; // 开发环境有

    _this.config = {
      token: '2959425970274ae0ad6b21e35a8449fe',
      userId: 'de6b554a-b319-4916-9ead-66202039bdfb'
    };
    return _this;
  }

  _createClass(H3YunLoginUtils, [{
    key: "getCookie",
    value: function getCookie(name) {
      var reg = new RegExp("(^| )".concat(name, "=([^;]*)(;|$)"));
      var arr = document.cookie.match(reg);

      if (arr) {
        return unescape(arr[2]);
      }

      return null;
    }
  }, {
    key: "setOptions",
    value: function setOptions() {
      this.corpId = this.getCookie('h3_EngineCode');
      this.config.token = this.getCookie('h3_Session');
      this.config.userId = this.config.userId || this.getCookie('gr_user_id');
      if (!this.corpId) // 开发环境
        this.config.extra = {
          appCode: 'A6804c3b3fcfc419aa3e03d65e4d7ffd9',
          isAppSetting: false,
          icon: 'icon-cgfk',
          parentCode: null
        };
    }
  }, {
    key: "created",
    value: function created() {
      var _this2 = this;

      this.setOptions();

      if (!this.corpId) {
        (0, _login.loginAccount)('infrastructure').then(function () {
          _this2.setOptions();
        });
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var parentNode = (0, _dom.closest)(this.$el, '.theme-default-content');

      if (parentNode) {
        parentNode.classList.add('demo-content');
      }
    }
  }]);

  return H3YunLoginUtils;
}(_vuePropertyDecorator.Vue);

H3YunLoginUtils = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-yun-login-utils'
})], H3YunLoginUtils);
var _default = H3YunLoginUtils;
exports.default = _default;