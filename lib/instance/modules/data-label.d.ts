import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportDataLabelModule extends Module implements H3.ReportModules.DataLabel {
    title: string;
    display: boolean;
    default: boolean;
    constructor(def?: H3.Analysis.DataLabelModule);
    handleChartData(chart: H3.Report.Chart): void;
}
