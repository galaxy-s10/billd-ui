import { Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
export default class ReportPivotTableFooter extends Vue implements H3.PivotTable.TableFooter {
    prefixCls: string;
    scrollLeft: number;
    summary: Array<number>;
    tableColumnsWidths: Array<number>;
    fix: string;
    cellClick: Function;
    setFixedWidth: Function;
    setTableWidth: Function;
    watchScrollLeft(): void;
    mounted(): void;
    updated(): void;
    setProvide(): void;
    render(h: CreateElement): VNode;
    destroyed(): void;
}
