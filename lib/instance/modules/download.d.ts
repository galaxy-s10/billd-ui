import Module from './module';
/**
 * 操作设置-导出
 */
export default class ReportChartDownloadModule extends Module implements H3.ReportModules.Download {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
