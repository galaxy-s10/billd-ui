import FieldMapping from './field-mapping';
/**
 * 排序实例
 */
export default class ReportSortModule extends FieldMapping implements H3.ReportModules.Sort {
    title: string;
    max: number;
    moduleTypes: Array<"dimension" | "groupDimension" | "metric"> | null;
    constructor(chartData?: H3.Report.ChartDataGroup);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
