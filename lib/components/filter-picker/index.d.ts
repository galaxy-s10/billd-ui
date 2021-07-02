import { Vue } from 'vue-property-decorator';
export default class ReportSmartFilter extends Vue {
    chart: H3.Report.FilterPicker;
    status?: 'design' | 'report' | 'preview';
    prefixCls: string;
    timer: any;
    chartSize: {
        h?: number;
        w?: number;
    };
    get filter(): {
        field: H3.Report.FieldColumn;
        formula: string;
        text: (string | number)[];
    };
    render(): any;
    changeFormula(formula: string): void;
    /**
     * 改变值
     * @param value 筛选值
     */
    changeValue(value: Array<any>): void;
    /**
     * 刷新过滤器
     */
    refreshFilterPicker(): void;
    mounted(): void;
}
