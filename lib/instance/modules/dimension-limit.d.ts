import Module from './module';
/**
 * 维度数据限制模块
 */
export default class ReportDimensionLimitModule extends Module implements H3.ReportModules.DimensionLimit {
    title: string;
    number?: number;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
