"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseVars = require('@h3/theme-pc/core/vars.json');

var presetVars = {
  "h3-blue": "#107fff",
  "h3-red": "#ff4384",
  "h3-purple": "#6840ff",
  "h3-orange": "#ff7527",
  "h3-green": "#00d495",
  "h3-yellow": "#ffca00"
};
var paletteVars = {};
module.exports = {
  modifyVars: _extends({}, baseVars.modifyVars, presetVars, paletteVars),
  globalVars: baseVars.globalVars
};