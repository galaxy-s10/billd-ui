"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.judgeMobile = judgeMobile;
exports.isMobile = void 0;

/**
 * 判断手机系统
 */
function judgeMobile() {
  var u = navigator.userAgent,
      app = navigator.appVersion;
  console.log(app);
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g

  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if (isAndroid) {
    return 'android';
  } else if (isIOS) {
    return 'ios';
  } else {
    return 'pc';
  }
}
/**
 * 判断是移动端还是PC端
 */


var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
exports.isMobile = isMobile;