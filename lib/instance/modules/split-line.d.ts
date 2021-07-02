import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportSplitLineModule extends Module implements H3.ReportModules.SplitLine {
    title: string;
    display: boolean;
    default: boolean;
    constructor(def?: H3.Analysis.SplitLineModule);
    handleChartData(chart: H3.Report.Chart): void;
}
