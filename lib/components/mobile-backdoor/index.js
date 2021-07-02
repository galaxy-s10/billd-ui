"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _index = require("../../../thinking-ui/src/index");

var _fetch = _interopRequireDefault(require("../../config/fetch"));

var _env = _interopRequireDefault(require("../../config/env"));

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

// import './style/index.less'

/**
 * 用法：
 * 1.嵌套使用，例如<backdoor><item></backdoor>，此时点击item即可触发
 * 2.直接使用，例如<backdoor />，此时会绝对定位在页面右下角20*20的区域，点击触发
 */
var Backdoor = /*#__PURE__*/function (_Vue) {
  _inherits(Backdoor, _Vue);

  var _super = _createSuper(Backdoor);

  function Backdoor() {
    var _this;

    _classCallCheck(this, Backdoor);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-backdoor";
    _this.count = 0;
    _this.countdown = 0;
    _this.canGetVersion = true;
    _this.version = "";
    _this.buildTimestamp = "";
    _this.pomVersion = "";
    _this.showModal = false;
    _this.webVersion = window.rx_report || "";
    return _this;
  }

  _createClass(Backdoor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, this.hasSlot ? "" : "".concat(this.prefixCls, "-free")],
        on: {
          "click": function click() {
            return _this2.showVersion;
          }
        }
      }, [this.$slots.default, h("h3-modal", {
        attrs: {
          showCancel: "false",
          confirmText: "确定",
          title: "系统版本号",
          model: {
            value: _this2.showModal,
            callback: function callback($$v) {
              _this2.showModal = $$v;
            }
          }
        }
      }, [h("p", ["\u524D\u7AEF\u7248\u672C\u53F7: ", this.webVersion]), h("p", ["\u540E\u7AEF\u7248\u672C\u53F7: ", this.version]), h("p", ["\u4EE3\u7801\u7248\u672C: ", this.pomVersion]), h("p", ["\u6784\u5EFA\u65F6\u95F4: ", this.buildTimestamp])])]);
    }
  }, {
    key: "hasSlot",
    get: function get() {
      return this.$slots.default && this.$slots.default.length > 0;
    } //点击开始计时，3秒内点击10次

  }, {
    key: "showVersion",
    value: function showVersion() {
      var _this3 = this;

      if (this.canGetVersion) {
        this.count++;

        if (!this.countdown) {
          this.countdown = setTimeout(function () {
            _this3.deleteTimeout();
          }, 3000);
        }

        if (this.count >= 10) {
          this.getVersion().then(function (res) {
            _this3.version = res.version;
            _this3.pomVersion = res.pomVersion;
            _this3.buildTimestamp = res.buildTimestamp;
            _this3.showModal = true;
          });
        }
      }
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      var _this4 = this;

      if (this.canGetVersion) {
        this.canGetVersion = false;
        setTimeout(function () {
          _this4.canGetVersion = true;
        }, 5000); // todo,有问题这里

        return new Promise(function (resolve, reject) {
          var req = (0, _fetch.default)({
            url: "".concat(_env.default, "dashboard/v1/service/info"),
            method: "get",
            data: {},
            autoGet: {}
          }).promise;
          req.then(function (res) {
            if (res && res.data) {
              resolve(res.data);
            } else {
              reject();
            }
          }).catch(function () {
            reject();
          });
        });
      } else {
        return new Promise(function (resolve) {
          resolve();
        });
      }
    }
  }, {
    key: "deleteTimeout",
    value: function deleteTimeout() {
      this.count = 0;
      clearTimeout(this.countdown);
      this.countdown = null;
    }
  }]);

  return Backdoor;
}(_vuePropertyDecorator.Vue);

Backdoor = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-backdoor",
  components: {
    H3Modal: _index.H3Modal
  }
})], Backdoor);
var _default = Backdoor;
exports.default = _default;