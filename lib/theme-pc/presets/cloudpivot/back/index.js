"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseVars = require('@h3/theme-pc/core/vars.json');

var presetVars = {
  "h3-blue": "#1890ff",
  "h3-red": "#FF6C65",
  "h3-purple": "#7165FF",
  "h3-orange": "#FAAD14",
  "h3-green": "#17BC94",
  "h3-yellow": "#FAAD14",
  "h3-primary-color": "@h3-green",
  "h3-gradual-blue": "linear-gradient(180deg,rgb(53,195,255,1) 0%,rgb(24,144,255) 100%)",
  "h3-gradual-orange": "linear-gradient(180deg,rgb(253,214,45) 0%,rgb(250,173,20) 100%)",
  "h3-gradual-red": "linear-gradient(180deg,rgb(255,165,158) 0%,rgb(255,108,101) 100%)",
  "h3-gradual-purple": "linear-gradient(180deg,rgb(170,158,255) 0%,rgb(113,101,255) 100%)",
  "h3-gradual-green": "linear-gradient(180deg,rgb(102,233,230) 0%,rgb(54,207,201) 100%)",
  "h3-normal-color": "#F4F6FC",
  "h3-shadow-normal": "0px 2px 8px 0px rgba(0,0,0,0.15)",
  "h3-shadow-large": "0px 4px 12px 0px rgba(0,0,0,0.2)",
  "h3-font-size-sl": "24px",
  "h3-font-size-xl": "20px",
  "h3-font-size-lg": "18px",
  "h3-font-size-md": "16px",
  "h3-font-size-base": "16px",
  "h3-font-size-sm": "14px",
  "h3-font-size-xs": "12px",
  "h3-app-color-1": "#1890ff",
  "h3-app-color-2": "#FAAD14",
  "h3-app-color-3": "#7165FF",
  "h3-app-color-4": "#FF6C65",
  "h3-app-color-5": "#36CFC9",
  "h3-modal-mask-bg": "rgba(0,0,0,0.4)",
  "h3-shadow-card": "@h3-shadow-normal"
};
var paletteVars = {};
module.exports = {
  modifyVars: _extends({}, baseVars.modifyVars, presetVars, paletteVars),
  globalVars: baseVars.globalVars
};