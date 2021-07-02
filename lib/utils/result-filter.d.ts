/**
 * 结果筛选器 过滤结果
 */
declare function resultFilterData(data: any, chart: H3.Report.Chart): any;
/**
 * 处理筛选结果
 * @param data 原始数据
 * @param options 结果筛选条件
 */
declare function handleResultFilter(data: Array<any>, options: Array<H3.Report.ResultFilterOption>, isUnion?: boolean): Array<any>;
export { handleResultFilter, resultFilterData };
declare const _default: {
    handleResultFilter: typeof handleResultFilter;
    resultFilterData: typeof resultFilterData;
};
export default _default;
