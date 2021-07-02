import { Vue } from 'vue-property-decorator';
export default class ReportTable extends Vue {
    options: H3.Chart.Table;
    refresh: boolean;
    prefixCls: string;
    height: number;
    width: number;
    watchResizeState(val: boolean): void;
    render(): any;
    get tableHeight(): number;
    get getColumns(): {
        label: string;
        prop: string;
        width: number;
        type: string;
        summaryType: string;
        formatter: (text: string, row: any) => string;
    }[];
    mounted(): void;
}
