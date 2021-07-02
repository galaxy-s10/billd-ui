/**
 * 处理图表请求后台参数
 * @param chart
 * @param params
 */
declare function handleChartRequestParams(chart: H3.Report.Chart, params?: {
    [key: string]: string;
}, globalFilters?: Array<H3.Report.FilterFieldColumn>): any;
export { handleChartRequestParams };
declare const _default: {
    handleChartRequestParams: typeof handleChartRequestParams;
};
export default _default;
