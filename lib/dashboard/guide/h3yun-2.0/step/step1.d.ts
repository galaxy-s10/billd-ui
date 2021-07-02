import { Vue } from "vue-property-decorator";
export default class ReportStep extends Vue {
    global: H3.Report.Global;
    step: number;
    setStep: Function;
    prefixCls: string;
    charts: Array<any>;
    dragChart: boolean;
    showDragingChart: boolean;
    showInitChart: boolean;
    render(): any;
    /**
     * 拖拽布局信息
     */
    get getLayoutOptions(): {
        draggable: boolean;
        margin: number[];
        showGridLine: boolean;
        mask: boolean;
        editState: boolean;
        resizable: boolean;
        responsive: boolean;
        colNum: number;
        rowHeight: number;
    };
    /**
     * 拖拽元素的
     */
    get item(): {
        x: number;
        y: number;
        w: number;
        h: number;
        i: number;
        minH: number;
        minW: number;
        uid: any;
        handleActive: any;
    };
    /**
     * 模块样式
     */
    get getItemStyles(): {
        backgroundColor: string;
        border: string;
    };
    /**
     * 全局标题样式
     */
    get titleColor(): string;
    /**
     * 鼠标移动事件
     */
    mousemove(e: any): void;
    /**
     * 鼠标按下事件
     */
    mousedown(e: any): void;
    /**
     * 鼠标抬起事件
     */
    mouseup(e: MouseEvent): void;
    mounted(): void;
    destroyed(): void;
}
