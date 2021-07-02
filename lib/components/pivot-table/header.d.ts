import { Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
export default class ReportPivotTableHeader extends Vue implements H3.PivotTable.TableHeader {
    prefixCls: string;
    scrollLeft: number;
    alias: any;
    tableRows: Array<Array<string>>;
    tableColumnsWidths: Array<number>;
    rows: Array<H3.Report.FieldColumn>;
    fix: string;
    cellClick: Function;
    watchScrollLeft(): void;
    render(h: CreateElement): VNode;
}
