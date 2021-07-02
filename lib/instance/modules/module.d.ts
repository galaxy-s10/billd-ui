export default abstract class Module {
    /**
     * 处理图表数据
     * @param chart
     */
    abstract handleChartData(chart: H3.Report.Chart): void;
}
