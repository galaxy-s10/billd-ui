import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportAxisXModule extends Module implements H3.ReportModules.AxisX {
    title: string;
    display: boolean;
    displayAxisX: boolean;
    displayLabel: boolean;
    direction: "crosswise" | "endwise" | "leftBank" | "rightBank";
    default: H3.Report.AxisX;
    /**
     * 构建函数
     * @param chart
     * @param modules
     */
    constructor(def?: H3.Analysis.AxisXModule);
    handleChartData(chart: H3.Report.Chart): void;
}
