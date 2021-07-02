import Module from "./module";
export default class ReportMapDigitalModule extends Module implements H3.ReportModules.MapDigitalSet {
    title: string;
    display: boolean;
    default: H3.Report.MapDigitalSet;
    constructor(def?: H3.Analysis.MapDigitalSetModule);
    handleChartData(chart: H3.Report.Chart): void;
}
