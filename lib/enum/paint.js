"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.paints = exports.CoatType = exports.ThemeType = exports.Color = void 0;

/**
 * 颜色枚举
 */
var Color;
exports.Color = Color;

(function (Color) {
  Color["PAINTCOATVALUE"] = "#F3F5F8";
  Color["ELEMENTCOATVALUE"] = "#FFFFFF";
  Color["TITLECOLOR"] = "#304265";
  Color["FONTCOLOR"] = "#304265";
  Color["THEMEELEMENTCOATVALUE"] = "RGBA(0,0,0,.4)";
  Color["THEMETITLECOLOR"] = "#FFFFFF";
  Color["THEMEFONTCOLOR"] = "#FFFFFF";
})(Color || (exports.Color = Color = {}));
/**
 * 主题类型
 */


var ThemeType;
exports.ThemeType = ThemeType;

(function (ThemeType) {
  ThemeType["DEFAULT"] = "default";
  ThemeType["THEME1"] = "theme1";
  ThemeType["THEME2"] = "theme2";
  ThemeType["THEME3"] = "theme3";
  ThemeType["THEME4"] = "theme4";
})(ThemeType || (exports.ThemeType = ThemeType = {}));
/**
 * 组件外套类型
 */


var CoatType;
exports.CoatType = CoatType;

(function (CoatType) {
  CoatType["BGCOLOR"] = "bgColor";
  CoatType["BGPICTURE"] = "bgPicture";
})(CoatType || (exports.CoatType = CoatType = {}));

var paints = {
  default: {
    url: require('../../assets/color-setting/theme/default.png'),
    themeType: ThemeType.DEFAULT,
    paintCoatType: CoatType.BGCOLOR,
    paintCoatValue: Color.PAINTCOATVALUE,
    elementCoatType: CoatType.BGCOLOR,
    elementCoatValue: Color.ELEMENTCOATVALUE,
    titleColor: Color.TITLECOLOR,
    fontColor: Color.FONTCOLOR
  },
  theme1: {
    url: require('../../assets/color-setting/theme/theme1.png'),
    themeType: ThemeType.THEME1,
    paintCoatType: CoatType.BGPICTURE,
    paintCoatValue: require('../../assets/color-setting/theme/theme1-bg.png'),
    elementCoatType: CoatType.BGCOLOR,
    elementCoatValue: Color.THEMEELEMENTCOATVALUE,
    titleColor: Color.THEMETITLECOLOR,
    fontColor: Color.THEMEFONTCOLOR
  },
  theme2: {
    url: require('../../assets/color-setting/theme/theme2.png'),
    themeType: ThemeType.THEME2,
    paintCoatType: CoatType.BGPICTURE,
    paintCoatValue: require('../../assets/color-setting/theme/theme2-bg.png'),
    elementCoatType: CoatType.BGCOLOR,
    elementCoatValue: Color.THEMEELEMENTCOATVALUE,
    titleColor: Color.THEMETITLECOLOR,
    fontColor: Color.THEMEFONTCOLOR
  },
  theme3: {
    url: require('../../assets/color-setting/theme/theme3.png'),
    themeType: ThemeType.THEME3,
    paintCoatType: CoatType.BGPICTURE,
    paintCoatValue: require('../../assets/color-setting/theme/theme3-bg.png'),
    elementCoatType: CoatType.BGCOLOR,
    elementCoatValue: Color.THEMEELEMENTCOATVALUE,
    titleColor: Color.THEMETITLECOLOR,
    fontColor: Color.THEMEFONTCOLOR
  },
  theme4: {
    url: require('../../assets/color-setting/theme/theme4.png'),
    themeType: ThemeType.THEME4,
    paintCoatType: CoatType.BGPICTURE,
    paintCoatValue: require('../../assets/color-setting/theme/theme4-bg.png'),
    elementCoatType: CoatType.BGCOLOR,
    elementCoatValue: Color.THEMEELEMENTCOATVALUE,
    titleColor: Color.THEMETITLECOLOR,
    fontColor: Color.THEMEFONTCOLOR
  }
};
exports.paints = paints;
var _default = {
  paints: paints
};
exports.default = _default;