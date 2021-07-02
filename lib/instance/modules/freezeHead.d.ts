import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportFreezeHeadModule extends Module implements H3.ReportModules.FreezeHead {
    title: string;
    display: boolean;
    displayRow: boolean;
    displayColumn: boolean;
    displayColumnNumber: boolean;
    row: boolean;
    column: boolean;
    columnNumber: number;
    default: H3.Report.FreezeHead;
    constructor(def?: H3.Analysis.FreezeHeadModule);
    handleChartData(chart: H3.Report.Chart): void;
}
