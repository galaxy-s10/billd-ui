/**
 * raf版setTimeout及setInterval
 * 注意，requestAnimationFrame是循环调用的，setInterval中timer时刻在变化，
 * 因此，如果是初次调用，可以通过clearTimer来清除
 * 否则，只能通过回调中返回true来停止
 */
declare type callback = () => void;
declare function setTimeout(cb: callback, interval: number): number;
/**
 *
 * @param cb 回调方法
 * @param interval 间隔时间
 */
declare function setInterval(cb: callback, interval: number): any;
declare function clearTimer(timer: number): void;
export { setTimeout, setInterval, clearTimer };
declare const _default: {
    setTimeout: typeof setTimeout;
    setInterval: typeof setInterval;
    clearTimer: typeof clearTimer;
};
export default _default;
