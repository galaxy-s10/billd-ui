"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    type: String
  },
  components: {},
  data: function data() {
    return {
      typeList: ["success", "info", "error", "warning"]
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", [this.typeList.indexOf(this.type) != -1 ? h("img", {
      "attrs": {
        "src": require("../assets/img/".concat(this.type, ".png")),
        "alt": ""
      },
      "style": "width: 20px; height: 20px; vertical-align: bottom"
    }) : h("img", {
      "attrs": {
        "src": require("../assets/img/info.png"),
        "alt": ""
      },
      "style": "width: 20px; height: 20px; vertical-align: bottom"
    })]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {}
};
exports.default = _default;