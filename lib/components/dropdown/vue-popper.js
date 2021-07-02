"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _popup = require("./popup");

var _popper = _interopRequireDefault(require("popper.js"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

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

var stop = function stop(e) {
  return e.stopPropagation();
};
/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end),left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */


var VuePopper = /*#__PURE__*/function (_Vue) {
  _inherits(VuePopper, _Vue);

  var _super = _createSuper(VuePopper);

  function VuePopper() {
    var _this;

    _classCallCheck(this, VuePopper);

    _this = _super.apply(this, arguments);
    _this.showPopper = false;
    _this.currentPlacement = "";
    _this.referenceElm = null;
    _this.popperElm = null;
    _this.popperJS = null;
    _this.appended = null;
    return _this;
  }

  _createClass(VuePopper, [{
    key: "showPopperHandler",
    value: function showPopperHandler(val) {
      val ? this.updatePopper() : this.destroyPopper();
    }
  }, {
    key: "placementChange",
    value: function placementChange(val) {
      if (val) {
        var popperJS = this.popperJS;

        if (popperJS) {
          this.currentPlacement = "";
          this.createPopper();
        }
      }
    }
  }, {
    key: "createPopper",
    value: function createPopper() {
      var _this2 = this;

      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;

      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      var options = this.popperOptions;
      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);

      if (typeof this.getParentContainer === "function") {
        var parentContainer = this.getParentContainer(reference.parentNode);

        if (parentContainer) {
          parentContainer.appendChild(this.popperElm);
        }
      } else if (this.appendToBody) {
        document.body.appendChild(this.popperElm);
      }

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = {
        offset: this.offset
      };
      var boundariesElement = "window";

      if (typeof this.getOverflowContainer === "function") {
        boundariesElement = this.getOverflowContainer();
      }

      options.modifiers = {
        computeStyle: {
          gpuAcceleration: false
        },
        preventOverflow: {
          boundariesElement: boundariesElement
        }
      };
      options.arrowOffset = this.arrowOffset;

      options.onCreate = function () {
        _this2.$emit("created", _this2);

        _this2.resetTransformOrigin();

        _this2.$nextTick(_this2.updatePopper);
      };

      options.onUpdate = (0, _debounce.default)(function () {
        _this2.resetTransformOrigin();
      }, 300, {
        leading: false
      });
      this.popperJS = new _popper.default(reference, popper, options);
      this.popperJS.popper.style.zIndex = _popup.PopupManager.nextZIndex();
      this.popperElm.addEventListener("click", stop);
    }
  }, {
    key: "updatePopper",
    value: function updatePopper() {
      var popperJS = this.popperJS;

      if (popperJS) {
        popperJS.update();

        if (popperJS.popper) {
          popperJS.popper.style.zIndex = _popup.PopupManager.nextZIndex();
        }
      } else {
        this.createPopper();
      }
    }
  }, {
    key: "doDestroy",
    value: function doDestroy(forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || this.showPopper && !forceDestroy) return;
      this.popperJS.destroy();
      this.popperJS = null;
    }
  }, {
    key: "destroyPopper",
    value: function destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    }
  }, {
    key: "resetTransformOrigin",
    value: function resetTransformOrigin() {
      if (!this.transformOrigin) return;
      var placementMap = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      };
      var placement = this.popperJS.popper.getAttribute("x-placement").split("-")[0];
      var origin = placementMap[placement];
      this.popperJS.popper.style.transformOrigin = typeof this.transformOrigin === "string" ? this.transformOrigin : ["top", "bottom"].indexOf(placement) > -1 ? "center ".concat(origin) : "".concat(origin, " center");
    }
  }, {
    key: "appendArrow",
    value: function appendArrow(element) {
      var hash;

      if (this.appended) {
        return;
      }

      this.appended = true;

      for (var item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      var arrow = document.createElement("div");

      if (hash) {
        arrow.setAttribute(hash, "");
      }

      arrow.setAttribute("x-arrow", "");
      arrow.className = "popper__arrow";
      element.appendChild(arrow);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      this.doDestroy(true);

      if (this.popperElm && this.popperElm.parentNode === document.body) {
        this.popperElm.removeEventListener("click", stop);
        document.body.removeChild(this.popperElm);
      }
    } // call destroy in keep-alive mode

  }, {
    key: "deactivated",
    value: function deactivated() {
      this.$options.beforeDestroy[0].call(this);
    }
  }]);

  return VuePopper;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: [Boolean, String],
  default: true
})], VuePopper.prototype, "transformOrigin", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: String,
  default: "bottom-start"
})], VuePopper.prototype, "placement", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Number,
  default: 5
})], VuePopper.prototype, "boundariesPadding", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Object,
  default: function _default() {
    return {};
  }
})], VuePopper.prototype, "reference", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Object,
  default: function _default() {
    return {};
  }
})], VuePopper.prototype, "popper", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Number,
  default: 0
})], VuePopper.prototype, "offset", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Boolean
})], VuePopper.prototype, "visibleArrow", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Number,
  default: 35
})], VuePopper.prototype, "arrowOffset", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Boolean,
  default: true
})], VuePopper.prototype, "appendToBody", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Function
})], VuePopper.prototype, "getParentContainer", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Function
})], VuePopper.prototype, "getOverflowContainer", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  type: Object,
  default: function _default() {
    return {};
  }
})], VuePopper.prototype, "popperOptions", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("showPopper")], VuePopper.prototype, "showPopperHandler", null);

__decorate([(0, _vuePropertyDecorator.Watch)("placement")], VuePopper.prototype, "placementChange", null);

VuePopper = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "VuePopper"
})], VuePopper);
var _default2 = VuePopper;
exports.default = _default2;