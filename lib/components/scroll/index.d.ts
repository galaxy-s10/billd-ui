import { Vue } from "vue-property-decorator";
export default class H3Scroll extends Vue {
    scrollYBtn: boolean;
    scrollXBtn: boolean;
    scrollYBtnDirection: string;
    scrollXBtnDirection: string;
    backgroundColor: string;
    buttonColor: string;
    resize: boolean;
    autoHideMode: boolean;
    animate: boolean;
    landscape: boolean;
    prefixCls: string;
    top: number;
    left: number;
    sX: number;
    sY: number;
    tX: number;
    tY: number;
    eX: number;
    eY: number;
    maxX: number;
    maxY: number;
    scaleX: number;
    scaleY: number;
    eventType: string;
    scrollState: boolean;
    scroll: HTMLDivElement;
    scrollYWarp: HTMLDivElement;
    scrollXWarp: HTMLDivElement;
    scrollY: HTMLDivElement;
    scrollX: HTMLDivElement;
    timer: any;
    timer2: number;
    onScroll: Function | undefined;
    render(): any;
    get scrollXStyles(): {};
    get scrollYStyles(): {};
    mounted(): void;
    setScrollBar(e?: Event, refresh?: any): boolean;
    bindEvents(): void;
    /**
     * 手机的touch开始事件
     */
    touchstart(e: TouchEvent): void;
    touchmove(e: TouchEvent): void;
    touchend(): void;
    mousewheel(e: WheelEvent): void;
    onmousemove(e: MouseEvent): void;
    onmouseup(): void;
    getScrollY(y: number): number;
    getScrollX(x: number): number;
    changeScroll(x: number, y: number): void;
    scrollEvent(e: MouseEvent): void;
    /**
     * 设置滚动条 外部API
     * @param x
     * @param y
     */
    setScroll(x: number, y: number): void;
    /**
     * 强制设置滚动条 外部API
     * @param x
     * @param y
     */
    setForceScroll(x: number, y: number): void;
    destroyed(): void;
}
