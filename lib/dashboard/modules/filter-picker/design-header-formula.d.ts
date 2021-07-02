import { Vue } from "vue-property-decorator";
export default class FilterFormula extends Vue {
    chart: H3.Report.FilterPicker;
    status: "design" | "report" | "preview";
    prefixCls: string;
    render(): any;
    get showFormula(): boolean;
    get filter(): {
        field: H3.Report.FieldColumn;
        formula: string;
        text: (string | number)[];
    };
    /**
     * 更改过滤条件
     *  filter 字段过滤参数
     */
    changeFilter(filter: H3.Report.FilterFieldColumn): void;
}
