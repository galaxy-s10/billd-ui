import Module from "./module";
export default class ReportMapThemeModule extends Module implements H3.ReportModules.MapTheme {
    title: string;
    display: boolean;
    default: H3.Report.MapTheme;
    constructor(def?: H3.Analysis.MapThemeModule);
    handleChartData(chart: H3.Report.Chart): void;
}
