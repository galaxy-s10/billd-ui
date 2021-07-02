export default class BaseChartModules implements H3.ReportModules.ChartModules {
    data: H3.ReportModules.ChartDataModules;
    styles: H3.ReportModules.ChartStylesModules;
    inventedChartData: H3.Report.ChartDataGroup;
    /**
     * 构建函数
     * @param chart
     * @param modules
     */
    constructor(chart: H3.Report.Chart, modules?: H3.Report.Global);
    initModules(chart: H3.Report.Chart, type: string, moduleKeys: string[]): void;
    /**
     * 处理模块初始化之后数据
     * @param chart
     * @param modules
     */
    handleModules(chart: H3.Report.Chart, modules?: H3.Report.Global): void;
}
