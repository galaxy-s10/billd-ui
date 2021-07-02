"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _guide = _interopRequireDefault(require("./guide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style/index.less';
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

      return h(_guide.default, {
        props: options,
        scopedSlots: options.scopedSlots,
        on: {
          change: function change(step) {
            if (options.change) {
              options.change(step);
            }

            ;
          }
        }
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