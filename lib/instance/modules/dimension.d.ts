import FieldMapping from "./field-mapping";
/**
 * 维度实例
 */
export default class ReportDimensionModule extends FieldMapping implements H3.ReportModules.Dimension {
    default: Array<H3.Report.FieldColumn>;
    constructor(def?: H3.Analysis.DimensionModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
