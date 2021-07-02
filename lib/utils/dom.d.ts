/**
 * 通过选择器获取element的父元素节点
 * @param el
 * @param selector
 */
declare function closest(el: Element, selector: string): Element | null;
/**
 * 获取元素index
 * @param el
 */
declare function elementIndex(el: HTMLElement): number;
/**
 * 设置元素css
 * @param el
 * @param prop  属性名称 例如: width height..
 * @param val  属性值 如果不传值就是获取对应属性的值。传值就是赋值
 */
declare function css(el: HTMLElement, prop?: string, val?: string | number): any;
export declare const offSet: (curEle: any, targetClassName?: any) => {
    left: any;
    top: any;
};
export { closest, elementIndex, css };
declare const _default: {
    closest: typeof closest;
    elementIndex: typeof elementIndex;
    css: typeof css;
};
export default _default;
