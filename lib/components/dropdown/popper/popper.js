"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _core = require("@popperjs/core");

var _modifiers = require("./modifiers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var popper = _vue.default.extend({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      validator: function validator(value) {
        return /^(auto|top|bottom|left|right)(-start|-end)?$/g.test(value);
      },
      default: "bottom-start"
    },
    transformOrigin: {
      type: [String, Boolean],
      default: true
    },
    strategy: {
      type: String,
      validator: function validator(value) {
        return ["absolute", "fixed"].includes(value);
      },
      default: "absolute"
    },
    modifiers: {
      type: Array,
      default: function _default() {
        return [];
      } // default: () => [],

    },
    sameWidth: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    getParentContainer: Function,
    getBoundaryContainer: Function,
    reference: Object,
    popper: Object
  },
  data: function data() {
    return {
      popperVisible: false,
      popperInstance: null,
      currentPlacement: "",
      referenceElm: null,
      popperElm: null,
      destroyTimer: null
    };
  },
  computed: {
    innerModifiers: function innerModifiers() {
      var boundary = this.getBoundaryContainer ? this.getBoundaryContainer() : "clippingParents";
      return [{
        name: "computeStyles",
        options: {
          gpuAcceleration: false
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: 10,
          boundary: boundary
        }
      }, {
        name: "flip",
        options: {
          padding: 10,
          boundary: boundary
        }
      }, _modifiers.resetTransformOrigin, {
        name: "resetTransformOrigin",
        options: {
          transformOrigin: this.transformOrigin
        }
      }].concat(_toConsumableArray(this.sameWidth ? [_modifiers.sameWidth] : []), [_modifiers.setZIndex], _toConsumableArray(this.modifiers));
    }
  },
  watch: {
    visible: function visible(nVal) {
      this.popperVisible = nVal;
    },
    popperVisible: function popperVisible(nVal) {
      this.$emit("toggle", nVal);

      if (nVal) {
        this.showPopper();
        this.$emit("show");
      } else {
        this.hidePopper();
        this.$emit("hide");
      }
    },
    placement: function placement(nVal) {
      this.updatePopper({
        placement: nVal
      });
    },
    innerModifiers: function innerModifiers(nVal) {
      this.updatePopper({
        modifiers: nVal
      });
    }
  },
  // call destroy in keep-alive mode
  deactivated: function deactivated() {
    this.hidePopper(true);
  },
  beforeDestroy: function beforeDestroy() {
    this.hidePopper(true);

    if (this.popperElm && this.popperElm.parentNode === document.body) {
      document.body.removeChild(this.popperElm);
    }
  },
  methods: {
    refreshPopper: function refreshPopper() {
      if (this.popperInstance) {
        this.popperInstance.update();
      }
    },
    updatePopper: function updatePopper(opitons) {
      if (this.popperInstance) {
        this.popperInstance.setOptions(opitons);
      }
    },
    showPopper: function showPopper() {
      this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!this.referenceElm && this.$slots.reference && this.$slots.reference[0]) {
        this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!this.popperElm || !this.referenceElm) return;
      var options = {
        placement: this.placement,
        strategy: this.strategy,
        modifiers: this.innerModifiers
      };

      if (typeof this.getParentContainer === "function") {
        var parentContainer = this.getParentContainer(this.referenceElm.parentNode);

        if (parentContainer && this.popperElm.parentNode !== parentContainer) {
          parentContainer.appendChild(this.popperElm);
        }
      } else if (this.appendToBody) {
        this.popperElm.parentNode !== document.body && document.body.appendChild(this.popperElm);
      }

      this.popperInstance = (0, _core.createPopper)(this.referenceElm, this.popperElm, options);
    },
    hidePopper: function hidePopper() {
      var _this = this;

      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.popperInstance) {
        if (immediate) {
          this.popperInstance.destroy();
          this.popperInstance = null;
          clearTimeout(this.destroyTimer);
        } else {
          this.destroyTimer = setTimeout(function () {
            _this.popperInstance && _this.popperInstance.destroy();
            _this.popperInstance = null;
          }, 300);
        }
      }
    }
  }
});

var _default2 = popper;
exports.default = _default2;