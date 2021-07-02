import Module from './module';
export default class FieldMapping extends Module implements H3.ReportModules.FieldMapping {
    max: number;
    min: number;
    title: string;
    display: boolean;
    supportedTypes: string[];
    constructor(title?: string);
    handleChartData(chart: H3.Report.Chart): void;
}
