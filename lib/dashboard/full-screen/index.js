"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _fullScreen = _interopRequireDefault(require("./full-screen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style.less';
var _default = function _default(options) {
  var Instance = new _vue.default({
    router: options.router,
    store: options.store,
    destroyed: function destroyed() {
      if (options.el) {
        options.el.removeChild(component.$el);
      } else {
        document.body.removeChild(component.$el);
      }

      Instance = null;
    },
    render: function render(h) {
      var on = {};
      Object.keys(options).forEach(function (key) {
        if (options[key] instanceof Function) {
          on[key] = options[key];
        }
      });

      on.destroy = function () {
        return Instance && Instance.$destroy();
      };

      return h(_fullScreen.default, {
        props: options,
        scopedSlots: options.scopedSlots,
        on: on
      });
    }
  });
  var component = Instance.$mount();

  if (options.el) {
    options.el.appendChild(component.$el);
  } else {
    document.body.appendChild(component.$el);
  }

  return {
    Instance: Instance,
    close: function close() {
      if (Instance) {
        Instance.$destroy();
      }
    }
  };
};

exports.default = _default;