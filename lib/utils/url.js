"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlNodeId = getUrlNodeId;
exports.default = void 0;

/**
 * 获取url参数值
 * @param key
 * @param url
 * @returns {{}}
 */
function getUrlVar(key) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  return getUrlVars(url)[key];
}
/**
 * 获取url所有的参数值
 * @param url
 * @returns {{}}
 */


function getUrlVars() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  var vars = {},
      hash;
  url = decodeURI(url).replace(window.location.origin, "");
  var index = url.split("?");
  var hashes;

  if (index.length > 1) {
    hashes = index[1].split("&");

    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars[hash[0].toLocaleLowerCase()] = decodeURIComponent(hash[1]);
    }
  }

  return vars;
}
/**
 * 特殊url，结构如:https://infrastructure.h3yun.com/home.html?v=20191021110828#/ReportDataSourceDesigner?id=6da9deec
 * 获取指定的参数
 */


function getUrlNodeId() {
  var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "id";
  var query = location.hash.split("?");

  if (query.length > 1) {
    var vars = query[query.length - 1].split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");

      if (pair[0] == variable) {
        return pair[1];
      }
    }
  }

  return null;
}

var _default = {
  getUrlVars: getUrlVars,
  getUrlVar: getUrlVar
};
exports.default = _default;