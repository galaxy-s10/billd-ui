import Module from "./module";
/**
 * 组件标题实例
 */
export default class ReportChartTitle extends Module implements H3.ReportModules.ChartTitle {
    title: string;
    display: boolean;
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
