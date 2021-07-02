import Module from './module';
/**
 * 多组极限值设定
 */
export default class ReportMultiRangeModule extends Module {
    title: string;
    display: boolean;
    data: Array<H3.ReportModules.MetricRange>;
    handleChartData(chart: H3.Report.Chart): void;
}
