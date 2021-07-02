"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("ant-design-vue/lib/button/style/css");

var _button = _interopRequireDefault(require("ant-design-vue/lib/button"));

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

var _vuePropertyDecorator = require("vue-property-decorator");

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

_vuePropertyDecorator.Vue.use(_modal.default);

var FormConfirm = /*#__PURE__*/function (_Vue) {
  _inherits(FormConfirm, _Vue);

  var _super = _createSuper(FormConfirm);

  function FormConfirm() {
    _classCallCheck(this, FormConfirm);

    return _super.apply(this, arguments);
  }

  _createClass(FormConfirm, [{
    key: "render",
    value: function render(h) {
      var _this = this;

      var self = this;
      var buttonsRender = [];
      var cops = null;

      if (typeof self.content === 'function') {
        cops = self.content(h);
      } else {
        cops = h('p', {
          ref: 'content'
        }, self.content);
      }

      if (this.buttons && this.buttons.length) {} else {
        buttonsRender.push(h(_button.default, {
          on: {
            click: function click(e) {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
                var ret;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(this.cancel && cops)) {
                          _context.next = 8;
                          break;
                        }

                        e.contentVNode = cops.componentInstance || cops.context;
                        _context.next = 4;
                        return this.cancel(e);

                      case 4:
                        ret = _context.sent;

                        if (ret !== false) {
                          self.$destroy();
                        }

                        _context.next = 9;
                        break;

                      case 8:
                        self.$destroy();

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }
          }
        }, '取消'));
        buttonsRender.push(h(_button.default, {
          domProps: {
            style: self.primaryButtonStyle
          },
          props: {
            type: 'primary'
          },
          on: {
            click: function click(e) {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
                var ret;
                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        e.contentVNode = cops.componentInstance || cops.context;

                        if (!this.ok) {
                          _context2.next = 8;
                          break;
                        }

                        _context2.next = 4;
                        return this.ok(e);

                      case 4:
                        ret = _context2.sent;

                        if (ret !== false) {
                          self.$destroy();
                        }

                        _context2.next = 9;
                        break;

                      case 8:
                        self.$destroy();

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }
        }, '确定'));
      }

      return h(_modal.default, {
        class: {
          'h3-report-form-confirm': true
        },
        props: {
          title: self.title,
          visible: true,
          width: self.width,
          maskClosable: false,
          mask: self.showMask,
          wrapClassName: self.wrapClassName,
          footer: function footer() {
            return buttonsRender;
          }
        },
        on: {
          cancel: function cancel(e) {
            self.$emit('cancel', cops);
            self.$destroy();
          }
        }
      }, [cops]);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.$emit('destroy');
    }
  }]);

  return FormConfirm;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], FormConfirm.prototype, "title", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], FormConfirm.prototype, "content", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 600
})], FormConfirm.prototype, "width", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], FormConfirm.prototype, "showMask", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], FormConfirm.prototype, "ok", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], FormConfirm.prototype, "cancel", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], FormConfirm.prototype, "buttons", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], FormConfirm.prototype, "primaryButtonStyle", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ''
})], FormConfirm.prototype, "wrapClassName", void 0);

FormConfirm = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'form-confirm'
})], FormConfirm);

var _default2 = function _default2(options) {
  // export default (options: H3.ReportConfirm.Options) => {
  var Instance = new _vuePropertyDecorator.Vue({
    router: options.router,
    store: options.store,
    destroyed: function destroyed() {
      document.body.removeChild(Instance.$el);
    },
    render: function render(h) {
      var on = {};

      on.destroy = function () {
        return Instance.$destroy();
      };

      return h(FormConfirm, {
        props: options,
        on: on
      });
    }
  });
  var component = Instance.$mount();
  document.body.appendChild(component.$el);
  return {
    Instance: Instance,
    close: function close() {
      Instance.$destroy();
    }
  };
};

exports.default = _default2;