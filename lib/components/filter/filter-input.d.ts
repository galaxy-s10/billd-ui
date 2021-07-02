import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class FilterInput extends Vue {
    filter: H3.Report.FilterFieldColumn;
    format: string;
    checkEmpty: boolean;
    status?: 'design' | 'report' | 'preview';
    global: H3.Report.Global;
    prefixCls: string;
    activeType: string;
    formulaOptions: Array<string>;
    formulaLabel: string;
    tmpFilter: H3.Report.FilterFieldColumn;
    changeFilterPicker(value: H3.Report.FilterFieldColumn): void;
    changeFilterType(value: string): void;
    /**
     *  更改筛选逻辑
     * @param filter
     */
    changeFilter(filter: H3.Report.FilterFieldColumn): void;
    /**
     *  更改筛选条件
     * @param value 值
     */
    valueChange(value: Array<any>): void;
    render(h: CreateElement): import("vue").VNode;
}
