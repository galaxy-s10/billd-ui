import { Vue } from "vue-property-decorator";
import { ReportState } from "../../enum/report-state";
export default class ReportElementWrap extends Vue {
    chart: H3.Report.Chart;
    global: H3.Report.Global;
    delay: number;
    api: H3.ReportAPI.Instance;
    corpId: string;
    status: ReportState;
    refresh: boolean;
    filters: Array<H3.Report.FilterFieldColumn>;
    /**
     * 获取元件类型
     */
    get getElementType(): "long-text" | "filter-picker" | "chart-wrap";
    render(): any;
    /**
     * 图表加载完
     */
    refreshEnd(): void;
    /**
     * 修改chart
     * @param chart
     */
    change(chart: H3.Report.FilterPicker | H3.Report.LongText | H3.Report.Chart): void;
    /**
     * 图表点击
     *    * @param option  { filter, params }
     */
    clickChart(option: {
        filters: Array<H3.Report.FieldColumn>;
        params: any;
    }): void;
    /**
     * 图表注册刷新事件
     */
    updateChartsData(data: any): void;
    /**
     * 下钻
     */
    drillDown(data: any): void;
    /**
     * 图表注册刷新事件
     */
    registerRefresh(events: any): void;
}
