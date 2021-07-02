/**
 * 创建图表实例
 * @param chartType
 * @param oldChart  旧的图表数据
 */
export declare const createNewChart: (chartType: any, oldChart?: H3.Report.Chart) => H3.Report.Chart;
/**
 * 创建图表模块实例
 * @param chart 获取图表配置模型的图表
 * @param oldChart  旧的图表数据
 */
export declare const createChartModules: (chart: H3.Report.Chart, oldChart?: H3.Report.Chart) => H3.ReportModules.ChartModules;
