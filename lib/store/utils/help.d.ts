/**
 * 注册仪表盘元件
 *  主要是支持元件的数据升级
 * @param elementType
 * @param oldElement
 */
declare function registerElement(elementType: H3.Report.ElementType, oldElement?: H3.Report.BaseElement): H3.Report.BaseElement;
/**
 * 处理报表请求
 * @param report
 */
declare function handleReportResponse(report: H3.DashboardAPI.ReportData): {
    title: string;
    objectId: string;
    elements: H3.Report.BaseElement[];
    reqGlobal: string;
    schemaCodes: any;
    filterPickers: H3.Report.FilterPicker[];
};
/**
 * 处理图表字段同步数据源的字段默认值
 * @param elements
 * @param dataSources
 */
declare function handleChartFieldDefaultValues(elements: H3.Report.BaseElement[], dataSources: {
    [dataSourceId: string]: H3.Report.DataSource;
}): void;
export { handleChartFieldDefaultValues, registerElement, handleReportResponse };
declare const _default: {
    handleChartFieldDefaultValues: typeof handleChartFieldDefaultValues;
    registerElement: typeof registerElement;
    handleReportResponse: typeof handleReportResponse;
};
export default _default;
