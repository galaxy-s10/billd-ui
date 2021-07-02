"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PopupManager", {
  enumerable: true,
  get: function get() {
    return _popupManager.default;
  }
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _popupManager = _interopRequireDefault(require("./popup-manager"));

var _scrollbarWidth = _interopRequireDefault(require("../scrollbar-width"));

var _dom = require("../dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1;
var scrollBarWidth;
var _default = {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  beforeMount: function beforeMount() {
    this._popupId = "popup-" + idSeed++;

    _popupManager.default.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    _popupManager.default.deregister(this._popupId);

    _popupManager.default.closeModal(this._popupId);

    this.restoreBodyStyle();
  },
  data: function data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        if (this._opening) return;

        if (!this.rendered) {
          this.rendered = true;

          _vue.default.nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },
  methods: {
    open: function open(options) {
      var _this2 = this;

      if (!this.rendered) {
        this.rendered = true;
      }

      var props = (0, _merge.default)({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }

      clearTimeout(this._openTimer);
      var openDelay = Number(props.openDelay);

      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;

          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;
      this._opening = true;
      var dom = this.$el;
      var modal = props.modal;
      var zIndex = props.zIndex;

      if (zIndex) {
        _popupManager.default.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          _popupManager.default.closeModal(this._popupId);

          this._closing = false;
        }

        _popupManager.default.openModal(this._popupId, _popupManager.default.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);

        if (props.lockScroll) {
          this.withoutHiddenClass = !(0, _dom.hasClass)(document.body, "el-popup-parent--hidden");

          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt((0, _dom.getStyle)(document.body, "paddingRight"), 10);
          }

          scrollBarWidth = (0, _scrollbarWidth.default)();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          var bodyOverflowY = (0, _dom.getStyle)(document.body, "overflowY");

          if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + "px";
          }

          (0, _dom.addClass)(document.body, "el-popup-parent--hidden");
        }
      }

      if (getComputedStyle(dom).position === "static") {
        dom.style.position = "absolute";
      }

      dom.style.zIndex = _popupManager.default.nextZIndex();
      this.opened = true;
      this.onOpen && this.onOpen();
      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;

      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }

      clearTimeout(this._closeTimer);
      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;

          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true; // WarningBlock.onClose && WarningBlock.onClose();

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }

      this.opened = false;
      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      _popupManager.default.closeModal(this._popupId);

      this._closing = false;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        (0, _dom.removeClass)(document.body, "el-popup-parent--hidden");
      }

      this.withoutHiddenClass = true;
    }
  }
};
exports.default = _default;