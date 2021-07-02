"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorByTheme = exports.mapDrill = exports.mapArea = exports.mapColorOptions = exports.mapColor = exports.mapTheme = void 0;
var mapTheme = [{
  label: "永恒",
  value: "pro"
}, {
  label: "薄暮",
  value: "purple"
}, {
  label: "拂晓",
  value: "blue"
}, {
  label: "青柠",
  value: "green"
}];
exports.mapTheme = mapTheme;
var mapColor = {
  purple: ["#FED5DC", "#6830EC"],
  blue: ["#B5EFEA", "#135CD5"],
  green: ["#FCFFC4", "#048D11"],
  pro: ["#DBE3EF", "#536484"]
};
exports.mapColor = mapColor;
var mapColorOptions = {
  purple: {
    mainColor: ["#FED5DC", "#6830EC"],
    textColor: "#000",
    borderWidth: 1,
    borderColor: "#FFF",
    hoverColor: "#FFA940",
    hoverBorderColor: "#FFF",
    hoverBorderWidth: 2
  },
  blue: {
    mainColor: ["#B5EFEA", "#135CD5"],
    textColor: "#000",
    borderWidth: 1,
    borderColor: "#FFF",
    hoverColor: "#FFA940",
    hoverBorderColor: "#FFF",
    hoverBorderWidth: 2
  },
  green: {
    mainColor: ["#FCFFC4", "#048D11"],
    textColor: "#000",
    borderWidth: 1,
    borderColor: "#EDE6A8",
    hoverColor: "#FFA940",
    hoverBorderWidth: 2,
    hoverBorderColor: "#EDE6A8"
  },
  pro: {
    mainColor: ["#DBE3EF", "#536484"],
    textColor: "#000",
    borderWidth: 1,
    borderColor: "#fff",
    hoverColor: "#FFA940",
    hoverBorderWidth: 2,
    hoverBorderColor: "#fff"
  }
};
exports.mapColorOptions = mapColorOptions;
var mapArea = [{
  label: "全国",
  value: "all"
}, {
  label: "省级",
  value: "province"
}, {
  label: "市级",
  value: "city"
}];
exports.mapArea = mapArea;
var mapDrill = [{
  label: "钻取到省",
  value: "province"
}, {
  label: "钻取到市",
  value: "city"
}, {
  label: "禁用",
  value: "disabled"
}];
exports.mapDrill = mapDrill;

var getColorByTheme = function getColorByTheme(theme) {
  if (typeof theme !== "string") {
    throw Error("uncorrect theme type");
    return false;
  }

  return mapColor[theme] ? mapColor[theme] : [];
};

exports.getColorByTheme = getColorByTheme;