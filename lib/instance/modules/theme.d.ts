import Module from "./module";
/**
 * 图表配色主题实例
 */
export default class ReportThemeModule extends Module implements H3.ReportModules.Theme {
    title: string;
    display: boolean;
    default: H3.Report.Theme;
    constructor(def?: H3.Analysis.ThemeModule);
    /**
     * 处理图表数据
     * @param chart
     */
    handleChartData(chart: H3.Report.Chart): void;
}
