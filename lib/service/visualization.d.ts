/**
 * 获取SchemaModel
 * @param SchemaCode
 */
export declare const getSchemaModel: (SchemaCode: string) => Promise<H3.ReportAPI.Response>;
/**
 * 获取简易报表
 * @param SchemaCode
 */
export declare function getReport(SchemaCode: string): Promise<H3.ReportAPI.Response>;
/**
 * 保存报表
 * @param report
 * 返回ObjectId;
 */
export declare function saveReport(report: H3.Report.Report): Promise<H3.ReportAPI.Response>;
/**
 * 删除图表
 * @param chart
 */
export declare function removeChart(chart: H3.Report.Chart): Promise<H3.ReportAPI.Response>;
/**
 * 加载图表数据
 * @param chart
 */
export declare function loadChartData(chart: H3.Report.Chart): Promise<H3.ReportAPI.Response>;
declare const _default: {
    getSchemaModel: (SchemaCode: string) => Promise<H3.ReportAPI.Response>;
    saveReport: typeof saveReport;
    removeChart: typeof removeChart;
    loadChartData: typeof loadChartData;
};
export default _default;
