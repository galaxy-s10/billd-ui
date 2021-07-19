"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

require("./style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from "vue";
// import auth from "../../plugins";
// Vue.use(auth);
var directives = [{
  name: "auth",
  value: "b"
}];
console.log(Object.assign({}, directives));
console.log(Object.assign({
  directives: directives
}));
var _default = {
  render: function render() {
    var h = arguments[0];
    return h("div", ["\u6211\u662F\u81EA\u5B9A\u4E49\u6307\u4EE4Cpt,", h("span", ["v-auth\u81EA\u5B9A\u4E49\u6307\u4EE4"]), h("div", {
      "attrs": {
        "directives": [{
          name: "auth",
          value: "a"
        }]
      }
    }, ["\u8FD9\u4E2Adirectives\u4F1A\u88AB\u5F53\u6210\u81EA\u5B9A\u4E49\u5C5E\u6027\u3002"]), h("div", (0, _babelHelperVueJsxMergeProps.default)([{}, {
      directives: [{
        name: "auth",
        value: "a"
      }]
    }]), ["\u8FD9\u4E2Adirectives\u4F1Avnode\u6570\u636E"]), h("div", (0, _babelHelperVueJsxMergeProps.default)([{}, {
      directives: [{
        name: "auth",
        value: "a",
        modifiers: {}
      }, {
        name: "auth",
        value: "a",
        modifiers: {
          bar: true
        }
      }, {
        name: "auth",
        value: "a",
        modifiers: {
          foo: true
        }
      }],
      staticClass: "sdgdsg",
      class: ["123", "2355"]
    }]), ["\u901A\u8FC7vnode\u6307\u4EE4\u6570\u636E\u683C\u5F0F1"]), h("div", {
      "directives": [{
        name: "auth",
        value: "a"
      }]
    }, ["\u81EA\u5B9A\u4E49\u6307\u4EE4\u751F\u6548\uFF0C\u800C\u4E14\u663E\u793A"]), h("div", {
      "directives": [{
        name: "auth",
        value: "a"
      }]
    }, ["\u81EA\u5B9A\u4E49\u6307\u4EE4\u751F\u6548\uFF0C\u800C\u4E14\u663E\u793A"]), h("div", {
      "directives": [{
        name: "auth",
        value: "aaa"
      }]
    }, ["\u81EA\u5B9A\u4E49\u6307\u4EE4\u751F\u6548\uFF0C\u4F46\u4E0D\u663E\u793A"]), h("div", {
      "directives": [{
        name: "auth",
        value: {
          value: "a",
          modifiers: {
            hi: true
          }
        }
      }]
    }, ["\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E0D\u751F\u65481"]), h("div", {
      "directives": [{
        name: "auth",
        value: {
          value: "aa",
          modifier: true
        }
      }]
    }, ["\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E0D\u751F\u65482"]), h("div", {
      "directives": [{
        name: "auth",
        value: {
          age: 1,
          name: 2
        }
      }]
    }, ["age:1,name:2"])]);
  }
};
exports.default = _default;