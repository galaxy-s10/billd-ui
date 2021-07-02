import Module from './module';
/**
 * 数据显示设置模块
 */
export default class ReportWarningLineModule extends Module implements H3.ReportModules.WarningLine {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
