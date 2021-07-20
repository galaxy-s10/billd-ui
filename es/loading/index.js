export default {
  render: function render() {
    var h = arguments[0];
    h("div", [h("img", {
      "attrs": {
        "src": "./loading.png",
        "alt": ""
      }
    }), "\u52A0\u8F7D\u4E2D"]);
  }
};