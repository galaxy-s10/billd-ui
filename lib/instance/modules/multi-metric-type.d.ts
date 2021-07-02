import Module from "./module";
/**
 * 多种类数据显示设置模块
 */
export default class ReportMultiMetricTypeModule extends Module implements H3.ReportModules.MultiMetricType {
    title: string;
    display: boolean;
    default: Array<"bar" | "line" | "area" | "pileBar"> | null;
    data: Array<H3.ReportModules.MultiTypeData>;
    constructor(def?: H3.Analysis.MultiMetricTypeModule);
    handleChartData(chart: H3.Report.Chart): void;
}
