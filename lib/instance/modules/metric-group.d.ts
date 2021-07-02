import FieldMapping from "./field-mapping";
/**
 * 多组指标实例
 */
export default class ReportMetricGroupModule extends FieldMapping implements H3.ReportModules.MetricGroup {
    title: string;
    display: boolean;
    max: number;
    data: Array<H3.ReportModules.Metric>;
    default: Array<Array<H3.Report.FieldColumn>>;
    constructor(def?: H3.Analysis.MetricGroupModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
