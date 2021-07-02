import SingleChartMixins from "../mixins/single-chart-mixins";
declare const ReportShow_base: import("vue-class-component/lib/declarations").VueClass<SingleChartMixins>;
export default class ReportShow extends ReportShow_base {
    getReportDetail: Function;
    setReportOptions: Function;
    resizeChartView: Function;
    /**
     * 全屏事件
     */
    fullScreen(): void;
}
export {};
