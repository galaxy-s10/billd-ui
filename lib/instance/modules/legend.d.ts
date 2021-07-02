import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportLegendModule extends Module implements H3.ReportModules.Legend {
    title: string;
    display: boolean;
    checked: boolean;
    position: "top" | "bottom" | "left" | "right";
    default: any;
    constructor(def?: H3.Analysis.LegendModule);
    handleChartData(chart: H3.Report.Chart): void;
}
