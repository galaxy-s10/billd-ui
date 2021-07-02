import { Vue } from 'vue-property-decorator';
export default class FilterFormula extends Vue {
    prefixCls: string;
    status: 'design' | 'report' | 'preview';
    filter: H3.Report.FilterFieldColumn;
    formulaList: Array<string>;
    formulaLabel: string;
    activeType: 'date' | 'number' | 'string' | string;
    tmpFilter: H3.Report.FilterFieldColumn;
    render(): any;
    get prevent(): boolean;
    changeFilterPicker(value: H3.Report.FilterFieldColumn): void;
    changeFilterType(value: string): void;
    /**
     *  公式改变时的处理
     * @param value
     */
    changeFormula(value: string): void;
}
