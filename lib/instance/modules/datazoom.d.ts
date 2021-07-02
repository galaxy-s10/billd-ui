import Module from "./module";
/**
 * 滚动条设置模块
 */
export default class ReportDataZoomModule extends Module implements H3.ReportModules.DataZoom {
    title: string;
    display: boolean;
    default: H3.Report.DataZoom;
    constructor(def?: H3.Analysis.DataZoomModule);
    handleChartData(chart: H3.Report.Chart): void;
}
