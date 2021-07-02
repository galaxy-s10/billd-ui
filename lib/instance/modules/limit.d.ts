import Module from "./module";
/**
 * 数据限制|数据保留模块
 */
export default class ReportLimitModule extends Module implements H3.ReportModules.Limit {
    title: string;
    number?: number;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
