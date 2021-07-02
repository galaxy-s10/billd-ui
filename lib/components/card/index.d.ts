import { Vue } from "vue-property-decorator";
export default class ReportCard extends Vue {
    options: H3.Chart.Card;
    refresh: boolean;
    prefixCls: string;
    summary: number;
    innerSummary: any;
    showTotal: boolean;
    watchLimit(): void;
    get getMetricData(): any[];
    render(): any;
    mounted(): void;
    initCard(): void;
    convertNumber(value: any, numberFormat: any): any;
}
