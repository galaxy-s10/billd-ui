import Module from "./module";
/**
 * 数据显示设置模块
 */
export default class ReportOrderNumberModule extends Module implements H3.ReportModules.OrderNumber {
    title: string;
    display: boolean;
    displayOrderName: boolean;
    checked: boolean;
    orderName: string;
    default: H3.Report.OrderNumber;
    constructor(def?: H3.Analysis.OrderNumberModule);
    handleChartData(chart: H3.Report.Chart): void;
}
