import Module from './module';
/**
 * 数据限制模块
 */
export default class ReportDirectionModule extends Module implements H3.ReportModules.Direction {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
