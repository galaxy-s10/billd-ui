export default class BaseChartModules implements H3.ReportModules.ChartModules {
    data: H3.ReportModules.ChartDataModules;
    styles: H3.ReportModules.ChartStylesModules;
    /**
     * 构建函数
     * @param chart
     * @param modules
     */
    constructor(chart: H3.Report.Chart, modules?: H3.Report.Global, defaultOptions?: H3.Analysis.ChartModules);
    /**
     * 注册模块
     * @param chart
     * @param type
     * @param moduleKeys
     */
    initModules(chart: H3.Report.Chart, type: string, moduleKeys: string[], defaultOptions?: H3.Analysis.ChartModules): void;
    /**
     * 处理模块初始化之后数据
     * @param chart
     * @param oModules 旧模块
     */
    handleModules(chart: H3.Report.Chart, oModules?: H3.Report.Global): void;
}
