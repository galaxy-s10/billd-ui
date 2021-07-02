"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _intro = _interopRequireDefault(require("./intro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IntroHelper = /*#__PURE__*/function () {
  function IntroHelper(steps) {
    _classCallCheck(this, IntroHelper);

    this.intro = null;
    this.exitCallBack = null;
    this.steps = [];
    this.introOption = {
      hasOverlay: true,
      showButtons: false,
      showStepNumbers: false,
      disableInteraction: false,
      exitOnOverlayClick: false,
      hideHelperLayer: true,
      tooltipPosition: 'right',
      steps: [],
      stepData: [],
      showHighLightContent: false
    };
    this.introManage = {
      focusElementId: null,
      focusElementClass: '',
      step: 0,
      show: false,
      introOption: null,
      introInstance: null,
      subStep: 0
    };
    this.steps = steps;
  }

  _createClass(IntroHelper, [{
    key: "createIntroBullets",
    value: function createIntroBullets(num, actIndex) {
      if (!num) return '';
      var htmlBullets = '<div class="h3-introl-bullets">';
      var div = '<div class=\'bullet-body\'>';

      for (var i = 1; i <= num; i++) {
        div += "<div class=\"bullet-item ".concat(i === actIndex ? 'active-bullet' : '', " \"></div>");
      }

      div += '</div>';
      htmlBullets += div + '</div>';
      return htmlBullets;
    }
    /**
     * 创建光标
     * @param rippleOffsetX
     * @param rippleOffsetY
     */

  }, {
    key: "createRippleLayer",
    value: function createRippleLayer() {
      var rippleOffsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var rippleOffsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      return "<div class=\"introjs-rippleLayer\" style=\"top: ".concat(rippleOffsetX, "px; left: ").concat(rippleOffsetY, "px\">  </div>");
    }
    /**
     * 创建高亮部分
     * @param title
     * @param content
     */

  }, {
    key: "createHighlightContent",
    value: function createHighlightContent(title, content) {
      return "<div class=\"introjs-helper-highlight\">\n                <div class=\"introjs-helper-highlight__title\">".concat(title, "</div>\n                <div class=\"introjs-helper-highlight__content\">").concat(content, "</div>\n            </div>");
    }
    /**
     * 创建高亮部分
     * @param content
     */

  }, {
    key: "createMainContent",
    value: function createMainContent(content) {
      return "<div class=\"intro-helper-main\">\n                ".concat(content, "\n            </div>");
    }
    /**
     * 设置配置
     * @param elId
     * @param stepText
     * @param text
     * @param popPosition
     * @param step
     * @param options
     * @param textAlign
     */

  }, {
    key: "setIntroHelper",
    value: function setIntroHelper(elId, stepText, text, popPosition, step, options) {
      var _this = this;

      var textAlign = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'left';
      this.exit();
      var op = {};

      if (options) {
        op = _extends(this.introOption, options);
      }

      var bulletHtml = this.createIntroBullets(op.subTotal || 0, op.subStep || 0);
      var rippleHtml = '';
      var highLightHtml = '';
      var mainContentHtml = '';

      if (op.showRippleAnimation) {
        rippleHtml = this.createRippleLayer(op.rippleOffsetX, op.rippleOffsetY);
      }

      if (op.showHighLightContent) {
        highLightHtml = this.createHighlightContent(op.highTitle, op.highContent);
      }

      if (op.mainContent) {
        mainContentHtml = this.createMainContent(op.mainContent);
      }

      op.steps = [{
        element: elId,
        intro: "".concat(rippleHtml, "\n              <div class=\"h3-intro-top\">\n                ").concat(bulletHtml, "\n              </div>\n              <div class=\"intro-helper-report-content\" style=\"text-align:").concat(textAlign, "\" >\n                <span class=\"intro-helper-step\" >").concat(stepText, "</span>\n                <span class=\"intro-helper-title\">").concat(text, "</span>\n                ").concat(mainContentHtml, "\n                ").concat(highLightHtml, "\n              </div>"),
        position: popPosition
      }];
      var v = this;
      var t = setTimeout(function () {
        v.intro = (0, _intro.default)(op);
        v.intro.onSkip(function () {
          _this.exit();
        });
        v.intro.onComplete(function () {
          _this.exit();
        });
        v.intro.start();
        v.introManage.introInstance = v.intro;
        v.introManage.show = true;
        v.introManage.subStep = options.subStep || 0;
        v.introManage.focusElementId = elId;
        v.introManage.step = step;
        window.clearTimeout(t);
      }, 500);
    }
    /**
     * 转到第几步引导
     * @param step
     * @param stepOptions
     */

  }, {
    key: "goToStep",
    value: function goToStep(step, stepOptions) {
      var num = step - 1;
      var stepIns = stepOptions || this.steps[num];
      var opt = {
        showRippleAnimation: true,
        rippleOffsetY: stepIns.rippleOffsetY,
        rippleOffsetX: stepIns.rippleOffsetX,
        showHighLightContent: stepIns.showHighLightContent,
        highTitle: stepIns.highTitle || ' ',
        highContent: stepIns.highContent || ' ',
        mainContent: stepIns.mainContent || '',
        showButtons: stepIns.showButtons || false
      };
      this.setIntroHelper(stepIns.el, stepIns.step, stepIns.describe, stepIns.position, step, opt);
    }
  }, {
    key: "exit",
    value: function exit() {
      if (this.intro) {
        this.intro.exit();
        !!this.exitCallBack && this.exitCallBack(this.introManage.step);
        this.intro = null;
      }
    }
  }]);

  return IntroHelper;
}();

exports.default = IntroHelper;