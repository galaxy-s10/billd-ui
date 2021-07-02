import Module from './module';
/**
 * 数据显示设置模块
 */
export default class ReportPaintCoatThemeModule extends Module implements H3.ReportModules.PaintCoatTheme {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
