/**
 * 注册事件监听
 * @param el
 * @param event
 * @param fn
 * @param options
 */
declare function on(el: HTMLElement | Document, event: keyof HTMLElementEventMap, fn: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
/**
 * 删除事件监听
 * @param el
 * @param event
 * @param fn
 * @param options
 */
declare function off(el: HTMLElement | Document, event: keyof HTMLElementEventMap, fn: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
/**
 * 触发事件
 * @param el
 * @param eventName
 * @param options
 */
declare function dispatch(el: HTMLElement | Window, eventName: string, options?: any): void;
export { on, off, dispatch };
declare const _default: {
    on: typeof on;
    off: typeof off;
    dispatch: typeof dispatch;
};
export default _default;
