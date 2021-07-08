"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseVars = require('@h3/theme-pc/core/vars.json');

var presetVars = {
  "h3-blue": "#2565F1",
  "h3-red": "#FF3640",
  "h3-purple": "#722ed1",
  "h3-orange": "#FA541C",
  "h3-volcano-orange": "#FADB14",
  "h3-green": "#0DD1A2",
  "h3-yellow": "#FFAF06",
  "h3-daybreak-blue": "#23B7FF",
  "h3-cyan": "#52C41A",
  "h3-gray": "@h3-black-6",
  "h3-pink": "#EB2F96",
  "h3-blue-6": "@h3-blue",
  "h3-green-6": "@h3-green",
  "h3-red-6": "@h3-red",
  "h3-yellow-6": "@h3-yellow",
  "h3-purple-6": "@h3-purple",
  "h3-orange-6": "@h3-orange",
  "h3-volcano-orange-6": "@h3-volcano-orange",
  "h3-daybreak-blue-6": "@h3-daybreak-blue",
  "h3-cyan-6": "@h3-cyan",
  "h3-pink-6": "@h3-pink",
  "h3-black-1": "#ecf0f6",
  "h3-black-2": "#e3e6ec",
  "h3-black-3": "#ced4dd",
  "h3-black-4": "#b6bcc6",
  "h3-black-5": "#8e96a4",
  "h3-black-6": "#777f8d",
  "h3-black-7": "#0f1c35",
  "h3-black-8": "#000",
  "h3-black-9": "#000",
  "h3-black-10": "#000",
  "h3-gradual-blue": "linear-gradient( 45deg, @h3-blue 0%, @h3-blue-4 100% )",
  "h3-gradual-red": "linear-gradient(45deg, @h3-red 0%, @h3-red-4 100%)",
  "h3-gradual-green": "linear-gradient( 45deg, @h3-green 0%, @h3-green-4 100% )",
  "h3-gradual-orange": "linear-gradient( 45deg, @h3-orange 0%, @h3-orange-4 100% )",
  "h3-gradual-yellow": "linear-gradient( 45deg, @h3-yellow 0%, @h3-yellow-4 100% )",
  "h3-gradual-purple": "linear-gradient( 45deg, @h3-purple 0%, @h3-purple-4 100% )",
  "h3-gradual-pink": "linear-gradient( 45deg, @h3-pink 0%, @h3-pink-4 100% )",
  "h3-gradual-volcano-orange": "linear-gradient( 45deg, @h3-volcano-orange 0%, @h3-volcano-orange-4 100% )",
  "h3-gradual-black": "linear-gradient( 45deg, @h3-black-7 0%, @h3-black-4 100% )",
  "h3-gradual-cyan": "linear-gradient( 45deg, @h3-cyan 0%, @h3-cyan-4 100% )",
  "h3-gradual-daybreak-blue": "linear-gradient( 45deg, @h3-daybreak-blue 0%, @h3-daybreak-blue-4 100% )",
  "h3-primary-color": "@h3-blue",
  "h3-info-color": "@h3-primary-color",
  "h3-error-color": "@h3-red",
  "h3-success-color": "@h3-green",
  "h3-warning-color": "@h3-yellow",
  "h3-normal-color": "#ecf0f6",
  "h3-option-hover-color": "#ECF0F6",
  "h3-option-active-color": "#F0F7FF",
  "h3-line-color": "#e3e6ec",
  "h3-zebra-crossing-color": "#fbfcfe",
  "h3-info-bg-color": "@h3-blue-1",
  "h3-info-hover-color": "@h3-blue-5",
  "h3-info-active-color": "@h3-blue-7",
  "h3-error-bg-color": "@h3-red-1",
  "h3-error-hover-color": "@h3-red-5",
  "h3-error-active-color": "@h3-red-7",
  "h3-success-bg-color": "@h3-green-1",
  "h3-success-hover-color": "@h3-green-5",
  "h3-success-active-color": "@h3-green-7",
  "h3-warning-bg-color": "@h3-orange-1",
  "h3-warning-hover-color": "@h3-orange-5",
  "h3-warning-active-color": "@h3-orange-7",
  "h3-app-color-1": "@h3-red",
  "h3-app-color-2": "@h3-purple",
  "h3-app-color-3": "@h3-orange",
  "h3-app-color-4": "@h3-green",
  "h3-app-color-5": "@h3-yellow",
  "h3-app-color-6": "@h3-volcano-orange",
  "h3-app-color-7": "@h3-daybreak-blue",
  "h3-app-color-8": "@h3-cyan",
  "h3-app-color-9": "@h3-blue",
  "h3-app-color-10": "@h3-gray",
  "h3-app-color-11": "@h3-pink",
  "h3-text-color-dark": "#000",
  "h3-text-color": "@h3-black-7",
  "h3-text-color-light": "@h3-black-6",
  "h3-text-color-light-2": "@h3-black-4",
  "h3-text-color-primary": "@h3-primary-color",
  "h3-text-color-disabled": "#bbb",
  "h3-heading-text-color": "@h3-text-color",
  "h3-shadow-color": "#d5e8ff",
  "h3-dark-shadow-color": "rgba(51, 93, 182, 0.2)",
  "h3-drag-ghost-color": "@h3-shadow-color",
  "h3-tooltip-bg": "fade(@h3-black-7, 85%)",
  "h3-input-placeholder-color": "@h3-text-color-light-2",
  "h3-input-border-color": "#D4D7E0",
  "h3-select-border-color": "#D4D7E0",
  "h3-modal-header-padding": "@h3-padding-sm @h3-padding-lg",
  "h3-modal-header-height": "48px",
  "h3-modal-header-border-bottom": "none",
  "h3-modal-header-line-height": "24px",
  "h3-modal-body-padding": "@h3-padding-md @h3-padding-lg",
  "h3-modal-body-line-height": "22px",
  "h3-modal-footer-padding": "@h3-padding-md @h3-padding-lg",
  "h3-modal-footer-border-top": "none",
  "h3-modal-close-x-height": "48px",
  "h3-modal-close-x-width": "48px",
  "h3-modal-close-x-line-height": "48px"
};
var paletteVars = {
  "h3-blue-1": "#f0f7ff",
  "h3-blue-2": "#c9e2ff",
  "h3-blue-3": "#a1c8ff",
  "h3-blue-4": "#78acff",
  "h3-blue-5": "#4f8dff",
  "h3-blue-6": "#2565f1",
  "h3-blue-7": "#1448cc",
  "h3-blue-8": "#0830a6",
  "h3-blue-9": "#001c80",
  "h3-blue-10": "#001059",
  "h3-red-1": "#fff1f0",
  "h3-red-2": "#ffdcd9",
  "h3-red-3": "#ffb4b0",
  "h3-red-4": "#ff8987",
  "h3-red-5": "#ff5e61",
  "h3-red-6": "#ff3640",
  "h3-red-7": "#d92332",
  "h3-red-8": "#b31426",
  "h3-red-9": "#8c081c",
  "h3-red-10": "#660517",
  "h3-green-1": "#e6fff5",
  "h3-green-2": "#b3ffe3",
  "h3-green-3": "#86f7d1",
  "h3-green-4": "#59ebbf",
  "h3-green-5": "#31deb0",
  "h3-green-6": "#0dd1a2",
  "h3-green-7": "#02ab89",
  "h3-green-8": "#00856e",
  "h3-green-9": "#005e52",
  "h3-green-10": "#003832",
  "h3-orange-1": "#fff2e8",
  "h3-orange-2": "#ffd8bf",
  "h3-orange-3": "#ffbb96",
  "h3-orange-4": "#ff9c6e",
  "h3-orange-5": "#ff7a45",
  "h3-orange-6": "#fa541c",
  "h3-orange-7": "#d4380d",
  "h3-orange-8": "#ad2102",
  "h3-orange-9": "#871400",
  "h3-orange-10": "#610b00",
  "h3-yellow-1": "#fffbe6",
  "h3-yellow-2": "#ffefa8",
  "h3-yellow-3": "#ffe380",
  "h3-yellow-4": "#ffd557",
  "h3-yellow-5": "#ffc42e",
  "h3-yellow-6": "#ffaf06",
  "h3-yellow-7": "#d98d00",
  "h3-yellow-8": "#b36e00",
  "h3-yellow-9": "#8c5200",
  "h3-yellow-10": "#663800",
  "h3-volcano-orange-1": "#feffe6",
  "h3-volcano-orange-2": "#ffffb8",
  "h3-volcano-orange-3": "#fffb8f",
  "h3-volcano-orange-4": "#fff566",
  "h3-volcano-orange-5": "#ffec3d",
  "h3-volcano-orange-6": "#fadb14",
  "h3-volcano-orange-7": "#d4b106",
  "h3-volcano-orange-8": "#ad8b00",
  "h3-volcano-orange-9": "#876800",
  "h3-volcano-orange-10": "#614700",
  "h3-purple-1": "#f9f0ff",
  "h3-purple-2": "#efdbff",
  "h3-purple-3": "#d3adf7",
  "h3-purple-4": "#b37feb",
  "h3-purple-5": "#9254de",
  "h3-purple-6": "#722ed1",
  "h3-purple-7": "#531dab",
  "h3-purple-8": "#391085",
  "h3-purple-9": "#22075e",
  "h3-purple-10": "#120338",
  "h3-pink-1": "#fff0f6",
  "h3-pink-2": "#ffd6e7",
  "h3-pink-3": "#ffadd2",
  "h3-pink-4": "#ff85c0",
  "h3-pink-5": "#f759ab",
  "h3-pink-6": "#eb2f96",
  "h3-pink-7": "#c41d7f",
  "h3-pink-8": "#9e1068",
  "h3-pink-9": "#780650",
  "h3-pink-10": "#520339",
  "h3-gray-1": "#404040",
  "h3-gray-2": "#333333",
  "h3-gray-3": "#262626",
  "h3-gray-4": "#1a1a1a",
  "h3-gray-5": "#0d0d0d",
  "h3-gray-6": "#000000",
  "h3-gray-7": "#000000",
  "h3-gray-8": "#000000",
  "h3-gray-9": "#000000",
  "h3-gray-10": "#000000",
  "h3-cyan-1": "#f6ffed",
  "h3-cyan-2": "#d9f7be",
  "h3-cyan-3": "#b7eb8f",
  "h3-cyan-4": "#95de64",
  "h3-cyan-5": "#73d13d",
  "h3-cyan-6": "#52c41a",
  "h3-cyan-7": "#389e0d",
  "h3-cyan-8": "#237804",
  "h3-cyan-9": "#135200",
  "h3-cyan-10": "#092b00",
  "h3-daybreak-blue-1": "#f0fcff",
  "h3-daybreak-blue-2": "#c7f4ff",
  "h3-daybreak-blue-3": "#9ee8ff",
  "h3-daybreak-blue-4": "#75daff",
  "h3-daybreak-blue-5": "#4dc9ff",
  "h3-daybreak-blue-6": "#23b7ff",
  "h3-daybreak-blue-7": "#1490d9",
  "h3-daybreak-blue-8": "#076eb3",
  "h3-daybreak-blue-9": "#004f8c",
  "h3-daybreak-blue-10": "#003666"
};
module.exports = {
  modifyVars: _extends({}, baseVars.modifyVars, presetVars, paletteVars),
  globalVars: baseVars.globalVars
};