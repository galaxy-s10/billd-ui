import { Vue } from "vue-property-decorator";
export default class ReportElementWrap extends Vue {
    corpId: string;
    api: H3.ReportAPI.Instance;
    chart: H3.Report.Chart;
    global: H3.Report.Global;
    status: "design" | "report" | "preview";
    refresh: boolean;
    /**
     * 获取元件类型
     */
    get getElementType(): "long-text" | "chart-wrap";
    render(): any;
    /**
     * 图表注册刷新事件
     */
    updateChartsData(data: any): void;
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
    registerRefresh(events: any): void;
}
