import ChartMixins from "../../mixins/chart-mixins";
import { ReportState } from "../../enum/report-state";
import { ResizeSensor } from "css-element-queries";
declare const ReportChartWrap_base: import("vue-class-component/lib/declarations").VueClass<ChartMixins>;
export default class ReportChartWrap extends ReportChartWrap_base {
    chart: H3.Report.Chart;
    global: H3.Report.Global;
    api: H3.ReportAPI.Instance;
    status: ReportState;
    refresh: boolean;
    computedStyle: any;
    delay: number;
    corpId: string;
    data: any;
    prefixCls: string;
    dataAlias: {};
    source: H3.Report.MapColumn | null;
    innerData: any;
    updateTimer: any;
    loading: boolean;
    errMsg: string | boolean;
    dataTotal: number;
    isLoadData: boolean;
    wrapWidth: number;
    resizeSensor: ResizeSensor | null;
    render(): any;
    watchData(): void;
    /**
     * 是否展示占位图
     */
    get showPlaceholder(): boolean;
    /**
     * 获取图表wrap样式
     */
    get getStyle(): any;
    /**
     * 判断图表是否有数据
     */
    get isData(): any;
    /**
     * 表格列宽改变
     */
    changeChart(chart: H3.Report.Chart): void;
    /**
     * 下钻
     */
    drillDown(data: any): void;
    /**
     * 图表加载完
     */
    refreshEnd(): void;
    /**
     * 图表点击
     *    * @param option  { filter, params }
     */
    clickChart(option: {
        filters: Array<H3.Report.FieldColumn>;
        params: any;
    }): void;
    /**
     * 刷新图表视图
     */
    refreshChartView(): void;
    /**
     * 加载图表数据
     */
    loadChartData({ isLoading, params, callback }?: any): void;
    /**
     * 只刷新图表视图渲染
     */
    refreshViewStyles(): void;
    /**
     * 加载图表数据
     */
    handleChartData(params?: any, callback?: Function): void;
    /**
     * 刷新图表
     */
    refreshChart(): void;
    /**
     * 只加载一次图表
     */
    onlyLoadChart(): void;
    /**
     * 注册函数
     */
    registerFun(): void;
    created(): void;
    mounted(): void;
    destroyed(): void;
}
export {};
