"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vueQuillEditor = require("vue-quill-editor");

require("quill/dist/quill.core.css");

require("quill/dist/quill.snow.css");

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
var LongTextWrap = /*#__PURE__*/function (_Vue) {
  _inherits(LongTextWrap, _Vue);

  var _super = _createSuper(LongTextWrap);

  function LongTextWrap() {
    var _this;

    _classCallCheck(this, LongTextWrap);

    _this = _super.apply(this, arguments);
    _this.isEdit = false;
    _this.prefixCls = "h3-report-long-text-wrap";
    _this.content = "";
    _this.maxLength = 500;
    _this.editorOption = {
      modules: {
        toolbar: [[{
          size: ["small", false, "large", "huge"]
        }], [{
          color: []
        }, "link"], ["bold", "italic", "underline"], [{
          align: ""
        }, {
          align: "center"
        }, {
          align: "right"
        }]]
      },
      placeholder: "在此插入文本"
    };
    _this.composing = false; // 是否处在合成输入阶段

    return _this;
  }

  _createClass(LongTextWrap, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, {
          'h3-report-long-text-edit': this.isEdit
        }]
      }, [h("quill-editor", {
        ref: "quillEditor",
        "class": "editor",
        attrs: {
          options: this.editorOption,
          model: {
            value: _this2.content,
            callback: function callback($$v) {
              _this2.content = $$v;
            }
          }
        },
        on: {
          "change": function change(e) {
            return _this2.onEditorChange(e);
          }
        }
      })]);
    }
  }, {
    key: "watchEdit",
    value: function watchEdit(v) {
      var _this3 = this;

      console.log('1111');
      if (this.status !== "design") return;
      this.isEdit = v;
      console.log(2222);
      this.$nextTick(function () {
        if (_this3.isEdit && _this3.$refs.quillEditor) {
          console.log('focus');

          var qlEditor = _this3.$el.querySelector(".ql-editor");

          qlEditor.focus();
        }
      });
    }
    /**
     * 组件背景颜色设置
     */

  }, {
    key: "getStyles",
    get: function get() {
      // const globalCoat = this.global.styles.elementCoat ? this.global.styles.elementCoat : null;
      return {
        color: this.global.styles.fontSetting.fontColor
      };
    }
  }, {
    key: "created",
    value: function created() {
      this.content = this.chart.content;
      this.$emit("register-refresh", {
        data: function data() {},
        view: function view() {}
      });
    }
  }, {
    key: "onEditorFocus",
    value: function onEditorFocus() {
      if (this.focus) {
        this.focus(this.chart);
      }
    }
  }, {
    key: "onEditorKeyDown",
    value: function onEditorKeyDown(e) {
      var quill = this.$refs.quillEditor.quill;
      var length = quill.getLength();

      if (e.key !== "Backspace" && e.key !== "Delete" && length > this.maxLength) {
        e.cancelBubble = true;
        e.returnValue = false;
      }
    }
  }, {
    key: "onEditorPaste",
    value: function onEditorPaste() {
      var _this4 = this;

      setTimeout(function () {
        _this4.maxLengthLimit();
      }, 0);
    }
  }, {
    key: "onEditorChange",
    value: function onEditorChange(v) {
      this.$set(this.chart, "content", v.html);
    }
  }, {
    key: "maxLengthLimit",
    value: function maxLengthLimit() {
      var quill = this.$refs.quillEditor.quill;
      var length = quill.getLength();

      if (length > this.maxLength) {
        quill.deleteText(this.maxLength, length - this.maxLength); // const delta = quill.getContents(0, this.maxLength);
        // quill.setContents(delta);
      }
    }
  }, {
    key: "onEditorComposeStart",
    value: function onEditorComposeStart(e) {
      this.composing = true;
    }
  }, {
    key: "onEditorInput",
    value: function onEditorInput(e) {
      if (this.composing) {
        this.maxLengthLimit();
      }
    }
  }, {
    key: "onEditorComposeEnd",
    value: function onEditorComposeEnd(e) {
      this.composing = false;
    }
  }, {
    key: "addEditEvent",
    value: function addEditEvent() {
      var qlEditor = this.$el.querySelector(".ql-editor");

      if (qlEditor) {
        qlEditor.addEventListener("focus", this.onEditorFocus, false);
        qlEditor.addEventListener("keydown", this.onEditorKeyDown, false);
        qlEditor.addEventListener("paste", this.onEditorPaste, false);
        qlEditor.addEventListener("compositionstart", this.onEditorComposeStart, false);
        qlEditor.addEventListener("input", this.onEditorInput, false);
        qlEditor.addEventListener("compositionend", this.onEditorComposeEnd, false);
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      this.addEditEvent();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.addEditEvent();
    }
  }]);

  return LongTextWrap;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)()], LongTextWrap.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], LongTextWrap.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], LongTextWrap.prototype, "textbbb", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [1, 23, 5];
  }
})], LongTextWrap.prototype, "textccc", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {
      a: 1,
      b: 2
    };
  }
})], LongTextWrap.prototype, "textddd", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 2323
})], LongTextWrap.prototype, "texteee", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)(String)], LongTextWrap.prototype, "textfff", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "design"
})], LongTextWrap.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], LongTextWrap.prototype, "focus", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], LongTextWrap.prototype, "blur", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("chart.edit", {
  immediate: true
})], LongTextWrap.prototype, "watchEdit", null);

LongTextWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-long-text-wrap",
  components: {
    quillEditor: _vueQuillEditor.quillEditor
  }
})], LongTextWrap);
var _default2 = LongTextWrap;
exports.default = _default2;