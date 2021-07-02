import Module from './module';
export default class ReportChartSwitchModule extends Module implements H3.ReportModules.ChartSwitch {
    title: string;
    display: boolean;
    handleChartData(chart: H3.Report.Chart): void;
}
