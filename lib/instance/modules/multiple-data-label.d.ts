import Module from "./module";
/**
 * 多种类数据显示设置模块
 */
export default class ReportMultipleDataLabelModule extends Module implements H3.ReportModules.MultipleDataLabel {
    title: string;
    display: boolean;
    default: H3.Report.MultipleDataLabel;
    constructor(def?: H3.Analysis.MultipleDataLabelModule);
    handleChartData(chart: H3.Report.Chart): void;
}
