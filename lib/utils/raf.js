"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimeout = setTimeout;
exports.setInterval = setInterval;
exports.clearTimer = clearTimer;
exports.default = void 0;

function setTimeout(cb, interval) {
  var timeoutTimer = null,
      now = Date.now,
      st = now(),
      et = st;

  var loop = function loop() {
    et = now();
    timeoutTimer = requestAnimationFrame(loop);

    if (et - st >= interval) {
      cb();
      clearTimer(timeoutTimer);
    }
  };

  timeoutTimer = requestAnimationFrame(loop);
  return timeoutTimer;
}
/**
 *
 * @param cb 回调方法
 * @param interval 间隔时间
 */


function setInterval(cb, interval) {
  console.log('aa' + cb + interval); // let // intervalTimer: any,
  //   now = Date.now,
  //   st = now(),
  //   et = st,
  //   end = false;
  // let loop = () => {
  //   et = now();
  //   if (et - st >= interval) {
  //     st = now();
  //     et = st;
  //     end = (cb() as any) ? true : false;
  //   }
  //   // if (!end) {
  //   //   intervalTimer = requestAnimationFrame(loop) as any;
  //   // }
  // };
  // // return (intervalTimer = requestAnimationFrame(loop) as any);
  // return requestAnimationFrame(loop);

  return null;
}

function clearTimer(timer) {
  cancelAnimationFrame(timer);
}

var _default = {
  setTimeout: setTimeout,
  setInterval: setInterval,
  clearTimer: clearTimer
};
exports.default = _default;