/**
 * 生成图表配置
 * @param options
 * @param chartData
 * @param config  对图表属性做配置,提供7个默认配置tooltip，xAxis，yAxis，legend，dataset，color，grid
 *  例： {
 *           tooltip: 'default',             // ‘default’使用tooltip默认配置
 *           xAxis: {
 *               axisLine: {  show: false } // 在提供默认的配置上扩展 axisLine: {  show: false }，已有这个属性，则会覆盖掉
 *              }，
 *           radar: {
 *                radius: '55%'             // 新增radar配置
 *           }
 *        }
 */
declare function viewOptions(options: H3.Chart.ChartOptions, chartData: H3.Chart.ChartData | Array<H3.Chart.ChartData>, config: any): any;
/**
 *  获取tooltip
 * @param options
 * @param chartData
 */
declare function getDataZoom(options: H3.Chart.ChartOptions, chartData: H3.Chart.ChartData | Array<H3.Chart.ChartData>): any[];
/**
 * 图例设置
 * @param chartOptions
 * @param options
 */
declare function legendSetting(chartOptions: any, options: H3.Chart.ChartOptions): void;
/**
 * 自定义范围数值换算
 * @param options
 * @param chartData
 * @param isGetOriginal 是否取原始值
 */
declare function metricRangeMatrixing(options: H3.Chart.ChartOptions, chartData: H3.Chart.ChartData, isGetOriginal?: boolean): {
    max: any;
    min: any;
};
/**
 * 获取最大指标的显示值
 * @param chartOptions
 * @param options
 * @param chartData
 */
declare function getMaxMetricLength(chartOptions: any, options: H3.Chart.ChartOptions, chartData: H3.Chart.ChartData): number;
/**
 * 数值格式设置
 * @param params
 * @param chartData
 * @param options
 * @param beforeIndex 真实数据index的前置index  用于复合图表-双轴图
 *   ['bar', 'stripe', 'area', 'line', 'pileBar']
 */
declare function numericalFormatting(params: any, chartData: H3.Chart.ChartData, options: H3.Chart.ChartOptions, beforeIndex?: number): any;
/**
 * 警戒线配置
 * @param chartOptions
 * @param chartData
 * @param options
 * @param axis 警戒线在x轴/y轴
 */
declare function warningLine(chartOptions: any, chartData: H3.Chart.ChartData, options: H3.Chart.ChartOptions, axis?: "x" | "y"): void;
/**
 * 字体设置
 * @param options
 */
declare function fontSetting(options: H3.Chart.ChartOptions): string;
/**
 * 处理大数据
 * @param chart
 * @param chartOptions
 * @param container
 * @param chartDatas
 * @param options
 */
declare function handleBigData(chart: any, chartOptions: any, container: HTMLDivElement, chartDatas: H3.Chart.ChartData | Array<H3.Chart.ChartData>, options: H3.Chart.ChartOptions): void;
/**
 * 解析图表数据
 */
declare function analysisChartData(params: any, options: H3.Chart.ChartOptions): any[];
/**
 * 获取图表数据
 */
declare function getMapJson(api: any, code: string | number): Promise<any>;
/**
 * 根据指定地址，获取地址面包屑
 * @param list
 * @param target
 * @param top
 */
declare function getAddressLink(list: any, target: any, top: any): any;
/**
 *
 * 设置全局windos时间监听
 */
declare function newDataZoomEvent(uid: string, params: any): void;
/**
 * 节流
 */
export { viewOptions, // 统一初始化配置方法
legendSetting, // 图例设置
metricRangeMatrixing, // 计算指标范围
numericalFormatting, // 数值格式设置
warningLine, // 警戒线设置
fontSetting, // 字体设置
handleBigData, // 处理大数据情况
analysisChartData, // 解析图表数据
getMaxMetricLength, // 获取最大指标的显示值
getDataZoom, // echarts滚动条
newDataZoomEvent, // 缩略轴变动时出发自定义事件
getMapJson, // 获取地图Json
getAddressLink };
declare const _default: {
    viewOptions: typeof viewOptions;
    legendSetting: typeof legendSetting;
    metricRangeMatrixing: typeof metricRangeMatrixing;
    numericalFormatting: typeof numericalFormatting;
    warningLine: typeof warningLine;
    fontSetting: typeof fontSetting;
    handleBigData: typeof handleBigData;
    analysisChartData: typeof analysisChartData;
    getMaxMetricLength: typeof getMaxMetricLength;
    getDataZoom: typeof getDataZoom;
    newDataZoomEvent: typeof newDataZoomEvent;
    getMapJson: typeof getMapJson;
    getAddressLink: typeof getAddressLink;
};
export default _default;
