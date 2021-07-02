import Module from "./module";
export default class ReportMapDrillModule extends Module implements H3.ReportModules.MapDrill {
    title: string;
    display: boolean;
    default: H3.Report.MapDrill;
    constructor(def?: H3.Analysis.MapDrillModule);
    handleChartData(chart: H3.Report.Chart): void;
}
