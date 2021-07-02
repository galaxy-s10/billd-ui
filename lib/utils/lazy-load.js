"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LazyLoad = /*#__PURE__*/function () {
  function LazyLoad(el, options) {
    _classCallCheck(this, LazyLoad);

    this.options = {
      delay: 0,
      selector: '.lazyload',
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 0],
      callback: null,
      delAfterListening: false
    };
    this.timer = 0;
    this.el = el;
    this.options = _extends(this.options, options);
    this.init();
  }

  _createClass(LazyLoad, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (window.IntersectionObserver) {
        this.observer = new IntersectionObserver(this.handleObserver.bind(this), this.options);
        var children;
        setTimeout(function () {
          children = _this.el.querySelectorAll(_this.options.selector);
          children.forEach(function (el) {
            if (_this.observer) {
              _this.observer.observe(el);
            }
          });
        }, this.options.delay);
      } else {
        var eleArr = [];
        setTimeout(function () {
          var children;
          children = _this.el.querySelectorAll(_this.options.selector);
          children.forEach(function (el) {
            eleArr.push({
              isIntersecting: true,
              target: el
            });
          });

          if (_this.options.callback) {
            _this.options.callback(eleArr);
          }
        }, this.options.delay);
      }
    }
    /**
     * 处理observer
     * @param entries
     */

  }, {
    key: "handleObserver",
    value: function handleObserver(entries) {
      var _this2 = this;

      var eleArr = [];
      entries.forEach(function (entry) {
        eleArr.push(entry);

        if (_this2.options.delAfterListening) {
          _this2.observer.unobserve(entry.target);
        }
      });

      if (this.options.callback) {
        this.options.callback(eleArr);
      }
    }
    /**
     * 销毁对象
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) this.observer.disconnect();
    }
  }]);

  return LazyLoad;
}();

var _default = LazyLoad;
exports.default = _default;