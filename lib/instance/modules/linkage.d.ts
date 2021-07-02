import Module from './module';
/**
 * 图表联动模块
 */
export default class ReportChartLinkageModule extends Module implements H3.ReportModules.Linkage {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
