import FieldMapping from "./field-mapping";
/**
 * 维度实例
 */
export default class ReportGroupDimensionModule extends FieldMapping implements H3.ReportModules.GroupDimension {
    display: boolean;
    default: Array<H3.Report.FieldColumn>;
    constructor(def?: H3.Analysis.GroupDimensionModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
