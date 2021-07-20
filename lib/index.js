"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.components = void 0;

var _index = _interopRequireDefault(require("./switch/index"));

var _index2 = _interopRequireDefault(require("./loading/index"));

require("../test.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Message from "./message";
// import Modal from "./modal";
// import Table from "./table";
var components = {
  Switch: _index.default,
  Loading: _index2.default
};
exports.components = components;

var install = function install(app) {
  Object.keys(components).forEach(function (key) {
    var component = components[key]; // console.log(component);

    if (component.install) {
      app.use(component);
    }
  });
};

var _default = install; // export { install, Switch, Loading };

exports.default = _default;