/**
 * 注册滚轮事件
 * @param elem
 * @param callback
 * @param useCapture
 */
declare function addWheelListener(elem: HTMLElement, callback: Function, useCapture: boolean): void;
declare function getCursortPosition(element: HTMLElement): number;
declare function setCaretPosition(element: HTMLElement, pos: number): void;
declare function setInputPosition(element: HTMLInputElement, pos: number): void;
export { addWheelListener, getCursortPosition, setInputPosition, setCaretPosition };
declare const _default: {
    addWheelListener: typeof addWheelListener;
    getCursortPosition: typeof getCursortPosition;
    setInputPosition: typeof setInputPosition;
    setCaretPosition: typeof setCaretPosition;
};
export default _default;
