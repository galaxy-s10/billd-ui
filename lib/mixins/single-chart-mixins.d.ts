import { Vue } from "vue-property-decorator";
export default class SingleChartMixins extends Vue {
    corpId: string;
    reportId: string;
    chartId: string;
    config: any;
    integrateComponents: Function;
    classification: Function;
    limit: any;
    getReportDetail: Function;
    setReportOptions: Function;
    resizeChartView: Function;
    prefixCls: string;
    element: H3.Report.BaseElement | null;
    global: H3.Report.Global | null;
    loading: boolean;
    fullScreenElement: any;
    /**
     * 获取class
     */
    get getClass(): {
        [x: string]: boolean;
    };
    /**
     * 获取仪表盘背景色
     */
    get getStyles(): any;
    /**
     * 设置仪表盘配置项
     */
    setSingleChartOptions(): void;
    /**
     * 刷新图表
     */
    refresh(): void;
    /**
     * 图表懒加载
     * @param entries
     */
    lazyLoadChart(entries: Array<IntersectionObserverEntry>): void;
    /**
     * 单图表加载
     */
    loadSingleChart(): Promise<void>;
    created(): Promise<void>;
}
