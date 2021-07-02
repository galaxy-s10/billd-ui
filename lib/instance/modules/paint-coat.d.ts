import Module from './module';
/**
 * 数据显示设置模块
 */
export default class ReportPaintCoatModule extends Module implements H3.ReportModules.PaintCoat {
    display: boolean;
    title: string;
    handleChartData(chart: H3.Report.Chart): void;
}
