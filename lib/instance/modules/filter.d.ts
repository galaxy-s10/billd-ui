import FieldMapping from "./field-mapping";
/**
 * 过滤器实例
 */
export default class ReportScreenModule extends FieldMapping implements H3.ReportModules.Filter {
    title: string;
    max: number;
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
