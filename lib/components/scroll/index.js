"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _global = require("../../utils/global");

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
var H3Scroll = /*#__PURE__*/function (_Vue) {
  _inherits(H3Scroll, _Vue);

  var _super = _createSuper(H3Scroll);

  function H3Scroll() {
    var _this;

    _classCallCheck(this, H3Scroll);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-scroll";
    _this.top = 0; // Y

    _this.left = 0; // X

    _this.sX = 0; // 初始X坐标

    _this.sY = 0; // 初始Y坐标

    _this.tX = 0; // 临时X坐标

    _this.tY = 0; // 临时Y坐标

    _this.eX = 0; // 元素的最后X坐标

    _this.eY = 0; // 元素的最后Y坐标

    _this.maxX = 0; // 最大X

    _this.maxY = 0; // 最大Y

    _this.scaleX = 0;
    _this.scaleY = 0;
    _this.eventType = "x";
    _this.scrollState = false;
    _this.scroll = _this.$refs.scroll;
    _this.scrollYWarp = _this.$refs.scrollYWarp;
    _this.scrollXWarp = _this.$refs.scrollXWarp;
    _this.scrollY = _this.$refs.scrollY;
    _this.scrollX = _this.$refs.scrollX;
    _this.timer = 0;
    _this.timer2 = 0;
    return _this;
  }

  _createClass(H3Scroll, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("div", {
        ref: "scroll",
        "class": "".concat(this.prefixCls, "__content")
      }, [this.$slots.content]), h("div", {
        ref: "scrollYWarp",
        "class": this.scrollYStyles
      }, [h("div", {
        ref: "scrollY",
        "class": ["".concat(this.prefixCls, "__axis"), "".concat(this.prefixCls, "__axis--y")]
      })]), h("div", {
        ref: "scrollXWarp",
        "class": this.scrollXStyles
      }, [h("div", {
        ref: "scrollX",
        "class": ["".concat(this.prefixCls, "__axis"), "".concat(this.prefixCls, "__axis--x")]
      })])]);
    }
  }, {
    key: "scrollXStyles",
    get: function get() {
      var style = {};
      style["".concat(this.prefixCls, "__axis--warp")] = true;
      style["".concat(this.prefixCls, "__axis--warp-x")] = true;
      style["".concat(this.prefixCls, "__axis--warp-t-x")] = this.scrollXBtnDirection === "top";
      style["".concat(this.prefixCls, "__axis--warp-leave")] = this.autoHideMode;
      return style;
    }
  }, {
    key: "scrollYStyles",
    get: function get() {
      var style = {};
      style["".concat(this.prefixCls, "__axis--warp")] = true;
      style["".concat(this.prefixCls, "__axis--warp-y")] = true;
      style["".concat(this.prefixCls, "__axis--warp-l-y")] = this.scrollYBtnDirection === "left";
      style["".concat(this.prefixCls, "__axis--warp-leave")] = this.autoHideMode;
      return style;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.scroll = this.$refs.scroll;
      this.scrollYWarp = this.$refs.scrollYWarp;
      this.scrollYWarp.style.backgroundColor = this.backgroundColor;
      this.scrollXWarp = this.$refs.scrollXWarp;
      this.scrollXWarp.style.backgroundColor = this.backgroundColor;
      this.scrollY = this.$refs.scrollY;
      this.scrollY.style.backgroundColor = this.buttonColor;
      this.scrollX = this.$refs.scrollX;
      this.scrollX.style.backgroundColor = this.buttonColor;
      setTimeout(function () {
        _this2.setScrollBar();

        _this2.bindEvents();
      }, 100);
    }
  }, {
    key: "setScrollBar",
    value: function setScrollBar(e) {
      var _this3 = this;

      var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      console.log(e);
      if (!this.resize) return false;
      var scaleY = 0;
      var scaleX = 0;

      if (!refresh) {
        scaleY = isNaN(this.eY / this.scaleY) ? 0 : this.eY / this.scaleY;
        scaleX = isNaN(this.eX / this.scaleX) ? 0 : this.eX / this.scaleX;
      }

      setTimeout(function () {
        var contHeight = _this3.$el.clientHeight;
        var contWidth = _this3.$el.clientWidth;
        var scrollHeight = _this3.scroll.scrollHeight;
        var scrollWidth = _this3.scroll.scrollWidth;
        var yHeight = parseInt((contHeight / scrollHeight * contHeight).toFixed(0), 10);
        var xWidth = parseInt((contWidth / scrollWidth * contWidth).toFixed(0), 10);
        var dffYHeight = 20 - yHeight;
        var dffXWidth = 20 - xWidth;
        var clientHeight = dffYHeight > 0 ? contHeight - dffYHeight : contHeight;
        var clientWidth = dffXWidth > 0 ? contWidth - dffXWidth : contWidth;

        if (scrollHeight > clientHeight && _this3.scrollYBtn) {
          _this3.scrollYWarp.style.display = "block";
          _this3.scrollY.style.height = "".concat(dffYHeight >= 0 ? 20 : yHeight, "px");
        } else {
          _this3.scrollYWarp.style.display = "none";
        }

        if (scrollWidth > clientWidth && _this3.scrollXBtn) {
          _this3.scrollXWarp.style.display = "block";
          _this3.scrollX.style.width = "".concat(dffXWidth >= 0 ? 20 : xWidth, "px");
        } else {
          _this3.scrollXWarp.style.display = "none";
        }

        _this3.maxY = (scrollHeight - clientHeight) * (clientHeight / scrollHeight);
        _this3.maxX = (scrollWidth - clientWidth) * (clientWidth / scrollWidth);
        _this3.scaleY = clientHeight / scrollHeight;
        _this3.scaleX = clientWidth / scrollWidth;
        _this3.eY = scaleY * _this3.scaleY;
        _this3.eX = scaleX * _this3.scaleX;
        _this3.eY = _this3.eY > _this3.maxY ? _this3.maxY : _this3.eY;
        _this3.eX = _this3.eX > _this3.maxX ? _this3.maxX : _this3.eX;
        _this3.scrollY.style.transform = "translate3d(0px,".concat(_this3.eY, "px,0px)");
        _this3.scrollX.style.transform = "translate3d(".concat(_this3.eX, "px,0px,0px)"); // this.scroll.style.transform = `translate3d(-${this.eX / this.scaleX}px,-${this.eY / this.scaleY}px,0px)`;

        _this3.scroll.scrollTop = _this3.eY / _this3.scaleY;
        _this3.scroll.scrollLeft = _this3.eX / _this3.scaleX;

        _this3.$emit("scroll", {
          x: _this3.scroll.scrollLeft,
          y: _this3.scroll.scrollTop
        });
      }, 0);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener("resize", this.setScrollBar, false);

      if (this.scrollYBtn) {
        this.scrollY.addEventListener("mousedown", this.scrollEvent, false);
        (0, _global.addWheelListener)(this.$el, this.mousewheel, false);
      }

      if (this.scrollXBtn) {
        this.scrollX.addEventListener("mousedown", this.scrollEvent, false);
      } // this.$el.addEventListener("touchstart", this.touchstart, false);
      // this.$el.addEventListener("touchmove", this.touchmove, false);


      this.$el.addEventListener("touchend", this.touchend, false);
    }
    /**
     * 手机的touch开始事件
     */

  }, {
    key: "touchstart",
    value: function touchstart(e) {
      this.scrollState = true;
      this.sX = e.targetTouches[0].pageX;
      this.sY = e.targetTouches[0].pageY;
    }
  }, {
    key: "touchmove",
    value: function touchmove(e) {
      if (!this.scrollState) return;
      var pageX = e.targetTouches[0].pageX;
      var pageY = e.targetTouches[0].pageY; // 是否伪横屏 如果是就要调换手势方向

      if (this.landscape) {
        this.tY = this.sY - pageY + this.eY;
        this.tX = -(this.sX - pageX + this.eX);

        if (this.tY > this.maxX) {
          this.tY = this.maxX;
        } else if (this.tY < 0) {
          this.tY = 0;
        }

        if (this.tX > this.maxY) {
          this.tX = this.maxY;
        } else if (this.tX < 0) {
          this.tX = 0;
        }

        this.changeScroll(this.tY, this.tX);
      } else {
        this.tY = this.sY - pageY + this.eY;
        this.tX = this.sX - pageX + this.eX;

        if (this.tY > this.maxY) {
          this.tY = this.maxY;
        } else if (this.tY < 0) {
          this.tY = 0;
        }

        if (this.tX > this.maxX) {
          this.tX = this.maxX;
        } else if (this.tX < 0) {
          this.tX = 0;
        }

        this.changeScroll(this.tX, this.tY);
      }

      if ((this.maxX === 0 || this.tX < this.maxX) && this.tY < this.maxY && this.tY > 0) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }, {
    key: "touchend",
    value: function touchend() {
      this.scrollState = false;

      if (this.landscape) {
        this.eX = -this.tX;
        this.eY = this.tY;
      } else {
        this.eX = this.tX;
        this.eY = this.tY;
      }
    }
  }, {
    key: "mousewheel",
    value: function mousewheel(e) {
      var _this4 = this;

      var bool = e.deltaY;
      this.eY = this.eY + (bool > 0 ? 100 * this.scaleY : -100 * this.scaleY);

      if (this.eY > this.maxY) {
        this.eY = this.maxY;
      } else if (this.eY < 0) {
        this.eY = 0;
      }

      if (this.animate) {
        this.scrollY.style.transition = "transform 0.1s ease-out";
        this.scroll.style.transition = "transform 0.1s ease-out";
      }

      this.changeScroll(this.eX, this.eY);
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.scrollY.style.transition = "none";
        _this4.scroll.style.transition = "none";
      }, 100);

      if (this.maxY) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "onmousemove",
    value: function onmousemove(e) {
      if (!this.scrollState) return;

      if (this.eventType === "y") {
        this.tX = this.eX;
        this.tY = e.pageY - this.sY + this.eY;

        if (this.tY > this.maxY) {
          this.tY = this.maxY;
        } else if (this.tY < 0) {
          this.tY = 0;
        }
      } else {
        this.tY = this.eY;
        this.tX = e.pageX - this.sX + this.eX;

        if (this.tX > this.maxX) {
          this.tX = this.maxX;
        } else if (this.tX < 0) {
          this.tX = 0;
        }
      }

      this.changeScroll(this.tX, this.tY);
    }
  }, {
    key: "onmouseup",
    value: function onmouseup() {
      this.scrollState = false;
      this.eX = this.tX;
      this.eY = this.tY;
      window.document.removeEventListener("mousemove", this.onmousemove, false);
      window.document.removeEventListener("mouseup", this.onmouseup, false);
    }
  }, {
    key: "getScrollY",
    value: function getScrollY(y) {
      this.scrollY.style.transform = "translate3d(0px,".concat(y, "px,0px)");
      var maxScrollHeight = this.scroll.scrollHeight - this.$el.clientHeight;
      var transformY = y / this.scaleY > maxScrollHeight ? maxScrollHeight : y / this.scaleY;
      transformY = parseFloat(transformY.toFixed(2));
      return transformY;
    }
  }, {
    key: "getScrollX",
    value: function getScrollX(x) {
      this.scrollX.style.transform = "translate3d(".concat(x, "px,0px,0px)");
      var maxScrollWidth = this.scroll.scrollWidth - this.$el.clientWidth;
      var transformX = x / this.scaleX > maxScrollWidth ? maxScrollWidth : x / this.scaleX;
      transformX = parseFloat(transformX.toFixed(2));
      return transformX;
    }
  }, {
    key: "changeScroll",
    value: function changeScroll(x, y) {
      var transformX = this.getScrollX(x);
      var transformY = this.getScrollY(y);
      this.scroll.scrollTop = transformY;
      this.scroll.scrollLeft = transformX;
      this.$emit("scroll", {
        x: transformX,
        y: transformY
      });
    }
  }, {
    key: "scrollEvent",
    value: function scrollEvent(e) {
      e.preventDefault();
      this.scrollState = true;
      var target = e.target;
      this.sX = e.pageX;
      this.sY = e.pageY;

      if (target.classList.contains("".concat(this.prefixCls, "__axis--y"))) {
        this.eventType = "y";
      } else {
        this.eventType = "x";
      }

      window.document.addEventListener("mousemove", this.onmousemove, false);
      window.document.addEventListener("mouseup", this.onmouseup, false);
    }
    /**
     * 设置滚动条 外部API
     * @param x
     * @param y
     */

  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.eX = x * this.scaleX < this.maxX ? x * this.scaleX : this.maxX;
      this.eY = y * this.scaleY < this.maxY ? y * this.scaleY : this.maxY;
      this.changeScroll(this.eX, this.eY);
    }
    /**
     * 强制设置滚动条 外部API
     * @param x
     * @param y
     */

  }, {
    key: "setForceScroll",
    value: function setForceScroll(x, y) {
      this.eX = x;
      this.eY = y;
      this.changeScroll(Math.floor(x), Math.floor(y));
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.removeEventListener("resize", this.setScrollBar, false);
      this.scrollY.removeEventListener("mousedown", this.scrollEvent, false);
      this.scrollX.removeEventListener("mousedown", this.scrollEvent, false);
    }
  }]);

  return H3Scroll;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], H3Scroll.prototype, "scrollYBtn", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], H3Scroll.prototype, "scrollXBtn", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "right"
})], H3Scroll.prototype, "scrollYBtnDirection", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "bottom"
})], H3Scroll.prototype, "scrollXBtnDirection", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "transparent"
})], H3Scroll.prototype, "backgroundColor", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "#eee"
})], H3Scroll.prototype, "buttonColor", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], H3Scroll.prototype, "resize", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], H3Scroll.prototype, "autoHideMode", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], H3Scroll.prototype, "animate", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: false
})], H3Scroll.prototype, "landscape", void 0);

H3Scroll = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-scroll"
})], H3Scroll);
var _default = H3Scroll;
exports.default = _default;