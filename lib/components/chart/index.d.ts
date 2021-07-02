import { Vue } from "vue-property-decorator";
export default class ReportChart extends Vue {
    options: H3.Chart.ChartOptions;
    refresh: boolean;
    showDataZoom: boolean;
    delay: number;
    api: H3.ReportAPI.Instance;
    prefixCls: string;
    chart: any;
    lastInitChartTime: number;
    isScrollY: boolean;
    isScrollX: boolean;
    animate: boolean;
    scrollYDirection: string;
    scrollXDirection: string;
    timer: any;
    timer2: any;
    render(): any;
    get isInitChart(): boolean;
    get chartStyle(): {
        "h3-report-chart-view": boolean;
        "h3-report-chart-view--no-linkage": boolean;
    };
    /**
     * 图表刷新事件
     */
    refreshChartStyles(): void;
    /**
     * 图表点击事件
     */
    clickChart(filters: Array<H3.Report.FilterFieldColumn>, params?: any): void;
    initChart(): void;
    delayInitChart(): void;
    mounted(): void;
    destroyed(): void;
}
