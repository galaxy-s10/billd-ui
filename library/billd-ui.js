!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("billd-ui.js", [], e)
    : "object" == typeof exports
    ? (exports["billd-ui.js"] = e())
    : (t["billd-ui.js"] = e());
})(self, function() {
  return (function() {
    "use strict";
    var t = {
        504: function(t, e, n) {
          console.log('====');
          console.log(n.p + "img/wechat-2953ba.jpg");
          t.exports = n.p + "img/wechat-2953ba.jpg";
        },
        568: function(t) {
          function e() {
            return (e =
              Object.assign ||
              function(t) {
                for (var e, n = 1; n < arguments.length; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          }
          var n = ["attrs", "props", "domProps"],
            i = ["class", "style", "directives"],
            r = ["on", "nativeOn"],
            c = function(t, e) {
              return function() {
                t && t.apply(this, arguments), e && e.apply(this, arguments);
              };
            };
          t.exports = function(t) {
            return t.reduce(function(t, o) {
              for (var s in o)
                if (t[s])
                  if (-1 !== n.indexOf(s)) t[s] = e({}, t[s], o[s]);
                  else if (-1 !== i.indexOf(s)) {
                    var u = t[s] instanceof Array ? t[s] : [t[s]],
                      a = o[s] instanceof Array ? o[s] : [o[s]];
                    t[s] = u.concat(a);
                  } else if (-1 !== r.indexOf(s))
                    for (var l in o[s])
                      if (t[s][l]) {
                        var h = t[s][l] instanceof Array ? t[s][l] : [t[s][l]],
                          f = o[s][l] instanceof Array ? o[s][l] : [o[s][l]];
                        t[s][l] = h.concat(f);
                      } else t[s][l] = o[s][l];
                  else if ("hook" == s)
                    for (var d in o[s])
                      t[s][d] = t[s][d] ? c(t[s][d], o[s][d]) : o[s][d];
                  else t[s] = o[s];
                else t[s] = o[s];
              return t;
            }, {});
          };
        },
      },
      e = {};
    function n(i) {
      var r = e[i];
      if (void 0 !== r) return r.exports;
      var c = (e[i] = { exports: {} });
      return t[i](c, c.exports, n), c.exports;
    }
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, { a: e }), e;
    }),
      (n.d = function(t, e) {
        for (var i in e)
          n.o(e, i) &&
            !n.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.p = "/library/");
    var i = {};
    return (
      (function() {
        n.r(i),
          n.d(i, {
            Loading: function() {
              return e;
            },
            Switch: function() {
              return t;
            },
            imgcpt: function() {
              return l;
            },
            sum: function() {
              return r;
            },
          });
        var t = {
            inheritAttrs: !1,
            components: {},
            props: { switchVal: { default: void 0 } },
            model: { prop: "switchVal", event: "input" },
            watch: {
              switchVal: function(t) {
                (this.isChecked = t),
                  this.$emit("changeSwitch", this.isChecked);
              },
            },
            data: function() {
              return { isChecked: this.switchVal };
            },
            mounted: function() {
              null == this.switchVal
                ? !this.$attrs.defaultChecked ||
                  (null != this.switchVal && 1 != this.switchVal) ||
                  (this.isChecked = !0)
                : (this.isChecked = this.switchVal);
            },
            render: function() {
              var t = this,
                e = arguments[0];
              return e(
                "div",
                {
                  class: {
                    bar: !0,
                    "hss-switch": !0,
                    "hss-switch-checked": this.isChecked,
                  },
                  on: {
                    click: function(e) {
                      return t.clickSwitch(e);
                    },
                  },
                },
                [
                  e("span", { class: "hss-switch-inner" }, [
                    this.isChecked
                      ? this.$scopedSlots.openSlot
                        ? this.$scopedSlots.openSlot({})
                        : this.$attrs.openText
                        ? this.$attrs.openText
                        : " "
                      : this.$scopedSlots.closeSlot
                      ? this.$scopedSlots.closeSlot({})
                      : this.$attrs.closeText
                      ? this.$attrs.closeText
                      : "",
                  ]),
                ]
              );
            },
            computed: {},
            created: function() {},
            methods: {
              clickSwitch: function(t) {
                null == this.switchVal
                  ? (this.$emit("clickSwitch", this.isChecked, t),
                    (this.isChecked = !this.isChecked),
                    this.$emit("changeSwitch", this.isChecked))
                  : (this.$emit("clickSwitch", this.isChecked, t),
                    this.$emit("input", !this.isChecked));
              },
            },
          },
          e = {
            components: { HSwitch: t },
            render: function() {
              var t = arguments[0];
              t("div", [
                t("h-switch", { attrs: { a: "23", b: "sdgh" } }),
                t("img", { attrs: { src: "./loading.png", alt: "" } }),
                "加载中",
              ]);
            },
          },
          r = function(t, e) {
            return t + e;
          },
          c = n(568),
          o = n.n(c);
        function s(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function u(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? s(Object(n), !0).forEach(function(e) {
                  a(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function a(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var l = {
          components: {},
          data: function() {
            return {};
          },
          render: function() {
            var t = this,
              e = arguments[0];
            return e("div", [
              e("div", ["我是vueRenerCpt"]),
              e("div", { on: { click: this.clickme } }, ["click me"]),
              e("input", {
                on: {
                  keyup: function(e) {
                    return !("button" in e) &&
                      t._k(e.keyCode, "enter", 13, e.key, "Enter")
                      ? null
                      : t.enterClick(e);
                  },
                },
              }),
              e(
                "div",
                o()([{}, { attrs: { key: 2323 } }, { attrs: { abc: "23" } }]),
                ["attrskey"]
              ),
              e(
                "div",
                { attrs: u({}, { key: 0xd51ffb17a555, xga: 34111112 }) },
                ["key22"]
              ),
              e("img", { attrs: { src: n(504) }, style: "width:100px;" }),
              e("img", {
                attrs: { src: "./wechat.jpg" },
                style: "width:100px;",
              }),
            ]);
          },
          computed: {},
          created: function() {},
          mounted: function() {},
          methods: {
            clickme: function() {
              console.log("clickmeclickmeclickme");
            },
            enterClick: function(t) {
              console.log("enter!!!");
            },
          },
        };
        console.log(r(12, 3));
      })(),
      i
    );
  })();
});
