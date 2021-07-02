import Module from "./module";
export default class ReportMapAreaModule extends Module implements H3.ReportModules.MapArea {
    title: string;
    display: boolean;
    default: H3.Report.MapArea;
    constructor(def?: H3.Analysis.MapAreaModule);
    handleChartData(chart: H3.Report.Chart): void;
}
