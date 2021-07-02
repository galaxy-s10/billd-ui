import Module from './module';
/**
 * 数据显示设置模块
 */
export default class ReportFontSettingModule extends Module implements H3.ReportModules.FontSetting {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
