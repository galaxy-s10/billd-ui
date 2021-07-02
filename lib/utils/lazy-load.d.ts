declare class LazyLoad {
    el: HTMLElement;
    options: H3.LazyLoad.Options;
    timer: any;
    observer: IntersectionObserver;
    constructor(el: HTMLElement, options?: H3.LazyLoad.Options);
    init(): void;
    /**
     * 处理observer
     * @param entries
     */
    handleObserver(entries: Array<IntersectionObserverEntry>): void;
    /**
     * 销毁对象
     */
    destroy(): void;
}
export default LazyLoad;
