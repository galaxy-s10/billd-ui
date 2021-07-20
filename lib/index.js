"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _index2.default;
  }
});
Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function get() {
    return _index3.default;
  }
});

var _index = _interopRequireDefault(require("./switch/index"));

var _index2 = _interopRequireDefault(require("./loading/index"));

var _index3 = _interopRequireDefault(require("./sum/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Message from "./message";
// import Modal from "./modal";
// import Table from "./table";
// import '../test.js'
console.log((0, _index3.default)(12, 3)); // export const components = {
//   Switch,
//   Loading
// };
// const install = function(app) {
//   Object.keys(components).forEach(key => {
//     const component = components[key];
//     // console.log(component);
//     if (component.install) {
//       app.use(component);
//     }
//   });
// };
// export default install;