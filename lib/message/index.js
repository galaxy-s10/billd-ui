"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("./main"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseConfig = {
  type: "info",
  closeAble: false,
  duration: 2000
};

var messageConstructor = _vue.default.extend(_main.default);

var messageInstance = new messageConstructor();
messageInstance.$mount();
document.body.appendChild(messageInstance.$el);

var Message = function Message(options) {
  var newOptions = Object.assign({}, baseConfig, options);
  return messageInstance[newOptions.type](newOptions);
};

["success", "warning", "notice", "error"].forEach(function (type) {
  Message[type] = function (options) {
    options.type = type;
    return Message(options);
  };
});

Message.closeAll = function () {
  messageInstance.closeAll();
};

Message.config = function (options) {
  baseConfig = Object.assign({}, baseConfig, options);
};

var _default = Message;
exports.default = _default;