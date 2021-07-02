import BaseChartModules from './base';
export default class CardModules extends BaseChartModules {
    constructor(chart: H3.Report.Chart, modules?: H3.Report.Global);
    /**
     * 初始化
     * @param chart
     */
    handleDimensionAndMetric(chart: any): void;
}
