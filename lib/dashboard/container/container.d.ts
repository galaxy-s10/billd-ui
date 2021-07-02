import { Vue } from "vue-property-decorator";
import { ReportState } from "../../enum/report-state";
import { ResizeSensor } from "css-element-queries";
export default class ReportContainer extends Vue {
    layoutOptions: any;
    status: ReportState;
    charts: Array<H3.Report.Chart>;
    global: H3.Report.Global;
    activeChart: H3.Report.Chart;
    dragChart: H3.Report.Chart;
    dragField: H3.Report.FieldColumn;
    setActiveChart: Function;
    clearActiveChart: Function;
    resizeChartView: Function;
    getDataSourceList: Function;
    setTableExportData: Function;
    addDataSource: Function;
    render(): any;
    prefixCls: string;
    resizeSensor: ResizeSensor | null;
    showFilterPicker: boolean;
    addFilterPicker: boolean;
    innerChart: H3.Report.Chart;
    lazyLoadCharts: {
        [chartId: string]: any;
    };
    dataListConfirm: any;
    containerHeight: number;
    timer: any;
    get getReportStateDesign(): ReportState;
    get getReserveHeight(): 0 | 200;
    get getItemStyles(): {
        backgroundColor: string;
    };
    /**
     * 获取仪表盘背景色
     */
    get getStyles(): any;
    get getLayoutOptions(): any;
    chartMask(chart: any): boolean;
    mousemoveLayout(e: MouseEvent): void;
    /**
     * 图表获取焦点
     * @param chart
     */
    focus(chart: H3.Report.Chart): void;
    /**
     * 显示数据源弹窗
     */
    showDataSourceModal(): void;
    /**
     * 取消选择数据源列表弹窗
     */
    cancelDataSourceModal(): void;
    /**
     * 关闭数据源弹窗
     * @param value
     */
    changeFilterPicker(value: boolean): void;
    /**
     * 添加元件结束事件
     */
    addElementEnd(): void;
    /**
     * 筛选确认
     */
    sureFilterPicker(chart: H3.Report.FilterPicker): void;
    cancelFilterPicker(): void;
    /**
     * 图表失去焦点
     * @param e
     */
    blur(e: Event): void;
    /**
     * 图表移动中
     */
    changeScroll(): void;
    /**
     * 图表改变形状之后
     * @param chart
     */
    chartResized(chart: H3.Report.Chart): void;
    /**
     * 图表懒加载
     * @param entries
     */
    lazyLoadChart(entries: Array<IntersectionObserverEntry>): void;
    /**
     * 注册懒加载事件
     * @param e
     */
    registerLazyLoad(e: TransitionEvent): void;
    /**
     * 全屏事件
     * @param element
     * @param elementIndex
     */
    fullScreen({ element, elementIndex, status }: {
        element: any;
        elementIndex: any;
        status: any;
    }): void;
    mounted(): void;
    destroyed(): void;
}
