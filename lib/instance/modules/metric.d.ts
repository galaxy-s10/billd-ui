import FieldMapping from "./field-mapping";
/**
 * 指标实例
 */
export default class ReportMetricModule extends FieldMapping implements H3.ReportModules.Metric {
    title: string;
    display: boolean;
    max: number;
    default: Array<H3.Report.FieldColumn>;
    constructor(def?: H3.Analysis.MetricModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
