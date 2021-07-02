import Module from "./module";
/**
 * 指标范围实例
 */
export default class ReportMetricRangeModule extends Module implements H3.ReportModules.MetricRange {
    title: string;
    display: boolean;
    default: H3.Report.MetricRange;
    constructor(def?: H3.Analysis.MetricRangeModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
