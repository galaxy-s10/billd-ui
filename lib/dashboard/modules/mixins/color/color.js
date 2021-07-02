"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

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

var HandleColorPicker = /*#__PURE__*/function (_Vue) {
  _inherits(HandleColorPicker, _Vue);

  var _super = _createSuper(HandleColorPicker);

  function HandleColorPicker() {
    _classCallCheck(this, HandleColorPicker);

    return _super.apply(this, arguments);
  }

  _createClass(HandleColorPicker, [{
    key: "colorPickerPosition",
    value: function colorPickerPosition(el) {
      var colorBox = el.querySelector('.box');
      var rect = el.getBoundingClientRect();
      var boxWidth = 212;
      var boxHeight = 257;
      var height = window.innerHeight;
      var left = rect.left;
      colorBox.style.width = "".concat(boxWidth, "px");
      colorBox.style.height = "".concat(boxHeight, "px");
      colorBox.style.position = 'fixed';

      if (rect.left + boxWidth > window.innerWidth) {
        left = rect.right - boxWidth;
      }

      if (rect.y > height / 2) {
        colorBox.style.top = "".concat(rect.top - boxHeight - 12, "px");
        colorBox.style.left = "".concat(rect.left, "px");
      } else {
        colorBox.style.top = "".concat(rect.top + el.clientHeight, "px");
      }

      colorBox.style.left = "".concat(left, "px");
    }
    /**
     * 批量处理
     */

  }, {
    key: "batchColorPickerPosition",
    value: function batchColorPickerPosition() {
      var _this = this;

      this.colorWarp = this.$el.querySelectorAll('.m-colorPicker');
      this.colorWarp.forEach(function (el) {
        if (el.parentElement) {
          _this.colorPickerPosition(el.parentElement);

          el.parentElement.addEventListener('click', function (e) {
            _this.colorPickerPosition(el.parentElement);
          }, true);
        }
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.batchColorPickerPosition();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.batchColorPickerPosition, false);
    }
  }]);

  return HandleColorPicker;
}(_vuePropertyDecorator.Vue);

HandleColorPicker = __decorate([(0, _vuePropertyDecorator.Component)({})], HandleColorPicker);
var _default = HandleColorPicker;
exports.default = _default;