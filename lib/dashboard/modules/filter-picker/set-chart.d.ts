import { Vue } from "vue-property-decorator";
export default class SetChart extends Vue {
    chartIds: Array<string>;
    charts: Array<H3.Report.Chart>;
    prefixCls: string;
    render(): any;
    get getCharts(): H3.Report.Chart[];
    onChange(value: Array<string>): void;
}
