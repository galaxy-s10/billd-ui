import BaseChartModules from './base';
export default class TableModules extends BaseChartModules {
    constructor(chart: H3.Report.Chart, modules?: H3.Report.Global);
    /**
     * 处理基本两维一指标 or 一维多指标
     * @param modules
     * @param data
     */
    initDimensionsAndMetric(modules: any, data: any): {
        modules: any;
        dataGroup: any;
    };
}
