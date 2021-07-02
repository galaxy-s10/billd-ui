"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = h3Intro;

var _intro = _interopRequireDefault(require("intro.js"));

require("intro.js/introjs.css");

require("../style/h3-intro.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function stepTemplate(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      content = _ref.content;
  return "<div class=\"bubble-box\">\n            ".concat(title ? "\n              <h3>".concat(title, "</h3>\n            ") : '', "\n            <p class=\"bubble-content\">\n              ").concat(content, "\n            </p>\n          </div>");
}

function h3Intro(options) {
  var intro = (0, _intro.default)();
  var defaultOptions = {
    showStepNumbers: false,
    showProgress: false,
    showBullets: false,
    showButtons: true,
    overlayOpacity: 0.6,
    disableInteraction: true,
    exitOnOverlayClick: false,
    exitOnEsc: false,
    tooltipClass: 'h3-report-intro-bubble',
    tooltipPosition: 'bottom-middle-aligned',
    helperElementPadding: 0,
    noPrev: true,
    hideNext: true,
    skipLabel: '跳过',
    prevLabel: '上一步',
    nextLabel: '下一步',
    doneLabel: '我知道了',
    hasOverlay: true,
    offsetX: 0,
    offsetY: 0,
    hideHelperLayer: false,
    showRippleAnimation: true,
    rippleOffsetX: 10,
    rippleOffsetY: 10,
    scrollToElement: true,
    keyboardNavigation: false
  };

  var introOptions = _extends(defaultOptions, options);

  if (!introOptions.steps) {
    var stepData = introOptions.stepData;
    var steps = stepData.map(function (step) {
      return {
        element: step.element,
        intro: stepTemplate(step),
        position: step.position
      };
    });
    introOptions.steps = steps;
  }

  intro.setOptions(introOptions);
  return {
    addStep: function addStep(h3Step) {
      intro.addStep({
        element: h3Step.element,
        intro: stepTemplate(h3Step)
      });
      return this;
    },
    start: function start() {
      intro.start();
      return this;
    },
    exit: function exit() {
      intro.exit();
      return this;
    },
    onComplete: function onComplete(providedCallback) {
      intro.oncomplete(providedCallback);
      return this;
    },
    onSkip: function onSkip(providedCallback) {
      intro.onskip(providedCallback);
      return this;
    },
    onChange: function onChange(providedCallback) {
      intro.onchange(providedCallback);
      return this;
    },
    setOptions: function setOptions(providedCallback) {
      intro.setOptions(providedCallback);
      return this;
    },
    nextStep: function nextStep(providedCallback) {
      intro.nextStep(providedCallback);
      return this;
    },
    goToStep: function goToStep(providedCallback) {
      intro.goToStep(providedCallback);
      return this;
    },
    refresh: function refresh(providedCallback) {
      intro.refresh(providedCallback);
      return this;
    },
    addHinit: function addHinit() {
      intro.addHints();
      return this;
    }
  };
}